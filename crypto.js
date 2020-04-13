const axios = require("axios");
const fs = require("fs");
const request = require("request");
const sha1 = require("sha1");

const apiUrl = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token="
const myToken = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

const postRoute = "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token="

const alphabet = "abcdefghijlmnopqrstuvwxyz"

const codeAlphabet = alphabet.split("");

const decryptionCase = (crypCode, number) => {
    let decrypCode = "";

    for (letters of crypCode) {
        const index = codeAlphabet.indexOf(letters);

        if (index < number && index != -1) {
            decrypCode += codeAlphabet[codeAlphabet.length - number + index];
        } else if (index == -1) {
            decrypCode += letters;
        } else decrypCode += codeAlphabet[index - number]
    }

    return decrypCode;

}

axios.get(apiUrl + myToken)
    .then((result) => {
        const exist = fs.existsSync("answer.json");

        if (!exist) {
            fs.appendFileSync("answer.json", JSON.stringify(result.data));
        }

        const decryptedCode = decryptionCase(result.data.cifrado, result.data.numero_casas);

        result.data.decifrado = decryptedCode;

        result.data.resumo_criptografico = sha1(decryptedCode);

        fs.writeFileSync("answer.json", JSON.stringify(result.data));
    
        submit();
    })

function submit(answer) {
    const formData = {
        answer: fs.createReadStream(__dirname + "/answer.json")
    }

    request.post({
            url: `${postRoute}${myToken}`,
            formData: formData
        },
        function optionalCallback(err, httpResponse, body) {
            if (err) return console.error("Falha ao enviar:", err);
            console.log("Envio com sucesso:", body);
        }
    );
}