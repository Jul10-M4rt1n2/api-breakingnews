// Importa o módulo express, que é um framework para aplicações web no Node.js
const express = require('express');

// Cria uma nova aplicação express
const app = express();

// Define uma rota GET para a URL raiz ("/") da aplicação
// Quando alguém acessa a URL raiz, a função de callback é chamada
// req é o objeto de solicitação e res é o objeto de resposta
app.get('/', (req, res) => {
    // A função de callback envia a string 'Hello World' como resposta
    res.send('Hello World');
});

// A aplicação começa a escutar na porta 3000
// Isso significa que a aplicação estará disponível em http://localhost:3000
app.listen(3000);