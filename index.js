// index.js

// Importando o módulo express, que é um framework para aplicações web no Node.js
const express = require('express');

// Criando uma nova aplicação express
const app = express();

// Importando o módulo de roteamento de usuários
const userRoute = require('./src/routes/user.route');

// Definindo a porta da aplicação
const port = 3000;

// Configurando a aplicação para usar JSON no corpo das requisições
app.use(express.json());

// Usando o módulo de roteamento de usuários na raiz ('/') da aplicação
app.use('/user', userRoute);

// Fazendo a aplicação escutar na porta 3000
app.listen(port, () => console.log(`Server is running on port ${port}`));