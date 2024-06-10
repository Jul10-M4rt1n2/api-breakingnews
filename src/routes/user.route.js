// user.route.js

// Importando o módulo express e criando um novo roteador
const route = require('express').Router();

// Importando o controlador de usuários
const userController = require('../controllers/user.controller');

// Definindo a rota GET para a raiz ('/') do roteador
// Quando essa rota é acessada, a função 'create' do controlador de usuários é chamada
route.post('/', userController.create);

// Exportando o roteador para ser usado em outros módulos
module.exports = route;