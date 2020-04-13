
# JULIO CESAR CYPHER - CODENATION
![enter image description here](https://github.com/thiagohrcosta/Criptografia-Codenation/blob/master/views/imgs/juliocesar.jpg?raw=true)
Projeto apresentado como condição para a aprovação e ingresso no curso [AceleraDev Java](https://www.codenation.dev/aceleradev/java-online-3) da [CODENATION](https://www.codenation.dev/) cuja nota de corte é de 100/100. 

# Problema a ser solucionado

Segundo o Wikipedia, criptografia ou criptologia (em grego: kryptós, “escondido”, e gráphein, “escrita”) é o estudo e prática de princípios e técnicas para comunicação segura na presença de terceiros, chamados “adversários”. Mas geralmente, a criptografia refere-se à construção e análise de protocolos que impedem terceiros, ou o público, de lerem mensagens privadas. Muitos aspectos em segurança da informação, como confidencialidade, integridade de dados, autenticação e não-repúdio são centrais à criptografia moderna. Aplicações de criptografia incluem comércio eletrônico, cartões de pagamento baseados em chip, moedas digitais, senhas de computadores e comunicações militares. Das Criptografias mais curiosas na história da humanidade podemos citar a criptografia utilizada pelo grande líder militar romano Júlio César para comunicar com os seus generais. Essa criptografia se baseia na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas  **= 3**:

**Normal:**  a ligeira raposa marrom saltou sobre o cachorro cansado

**Cifrado:**  d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr

## Regras

-   As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.
-   No nosso caso os números e pontos serão mantidos, ou seja:

**Normal:**  1a.a

**Cifrado:**  1d.d

Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:

```
https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN
```
O resultado da requisição vai ser um JSON conforme o exemplo:

    { 
    "numero_casas": 10, 
    "token":"token_do_usuario", 
    "cifrado": "texto criptografado", 
    "decifrado": "aqui vai o texto decifrado", 
    "resumo_criptografico": "aqui vai o resumo" 
    }

O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome  **answer.json**, que irá usar no restante do desafio.

Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo  **decifrado**. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo  **sha1**  e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo  **sha1**  do texto decifrado.

Seu programa deve submeter o arquivo atualizado para correção via POST para a API:

```
https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN
```
OBS: a API espera um arquivo sendo enviado como  _multipart/form-data_, como se fosse enviado por um formulário HTML, com um campo do tipo  _file_  com o nome  **answer**. Considere isso ao enviar o arquivo.

O resultado da submissão vai ser sua nota ou o erro correspondente. Você pode submeter quantas vezes achar necessário, mas a API não vai permitir mais de uma submissão por minuto.

## Etapas de desenvolvimento
12.04.2020 : 
* Criação do ambiente de desenvolvimento e instalação das extensões; 
* Obtenção das informações via Insomnia por meio da requisição GET;
* Criação do arquivo answer.json inserindo os dados obtidos pela requisição GET;
* Desenvolvimento do arquivo crypto.js para separar letras do alfabeto, criar sistema de criptografia e descriptografia;
* Utilização do Axios para obter dados solicitados, e postar no arquivo answer.json os dados solicitados pelo problema;
*  Desenvolvimento da função submit(), posteriormente chamada dentro do axios.get para enviar a solução do problema para a CODENATION.
* Utilização do nunjucks para criar simples página HTML com CSS, para mostrar dados estáticos do arquivo criptografado e a resposta descriptografada.

# Aprovação
![enter image description here](https://github.com/thiagohrcosta/Criptografia-Codenation/blob/master/views/imgs/aprovado.jpg?raw=true)

## O que foi utilizado no desenvolvimento do projeto?
Foi utilizado na presente aplicação o seguinte:

- [Axios](https://www.npmjs.com/package/axios)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Nunjucks](https://www.npmjs.com/package/nunjucks)
- [Fs](https://www.npmjs.com/package/fs)
- [Request](https://www.npmjs.com/package/request)
- [Sha1](https://www.npmjs.com/package/sha1)