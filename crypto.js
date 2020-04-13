const axios = require("axios");
const fs = require("fs");
const sha1 = require("sha1");

const apiUrl = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token="
const myToken = "964e02a74826cf07042e7d0f79ff5ab6d514f382"

const alphabet = "abcdefghijlmnopqrstuvwxyz"

const codeAlphabet = alphabet.split("");

const decryptionCase = (crypCode, number) => {
    let decrypCode = "";

    for (letters of crypCode){
        const index = codeAlphabet.indexOf(letters);

        if (index < number && index != -1){
            decrypCode += codeAlphabet[codeAlphabet.length - number + index];
        }
        else if (index == -1) {
            decrypCode += letters;
        }
        else decrypCode += codeAlphabet[index - number]
    }

    return decrypCode;

}

axios.get(apiUrl+myToken)
    .then((result) => {
    const exist = fs.existsSync("answer.json");

    if(!exist){
        fs.appendFileSync("answer.json", JSON.stringify(result.data));
    }

    const decryptedCode = decryptionCase(result.data.cifrado, result.data.numero_casas);

    result.data.decifrado = decryptedCode;

    result.data.resumo_criptografico = sha1(decryptedCode);

    console.log(decryptedCode)
})