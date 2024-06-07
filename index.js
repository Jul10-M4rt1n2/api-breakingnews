// Importa o módulo express, que é um framework para aplicações web no Node.js
const express = require('express');

// Cria uma nova aplicação express
const app = express();

// Define uma rota GET para a URL raiz ("/") da aplicação
// Quando alguém acessa a URL raiz, a função de callback é chamada
// req é o objeto de solicitação e res é o objeto de resposta

//ROTA
// Method HTTP - CRUD (Create, Read, Update, Delete)
    // GET - Pegar uma informações
    // POST - Enviar / Criar uma informações
    // PUT - Atualizar informações
    // PATH - Atualizar uma informação específica
    // DELETE - Deletar uma informação
// Name
    // Um nome para a rota. Ex: /users
// Function (Callback)
    // Função que será executada quando a rota for acessada
    // Callback: Função que é passada como argumento para outra função
app.get('/', (req, res) => {
    // A função de callback envia a string 'Hello World' como resposta
    // res.send('Hello World');
    const soma = 2 + 2;
    res.json(soma); 
    //ou
    // res.send({soma:soma});
});

// A aplicação começa a escutar na porta 3000
// Isso significa que a aplicação estará disponível em http://localhost:3000
app.listen(3000);