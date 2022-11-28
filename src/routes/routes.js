/*  

28/11/2022

autor: JOAO PEDRO CARVALHO E VINICIUS DOMINGUES PEREIRA

ROTAS PARA CRUD BÁSICO  USANDO OS METODOS DO CONTROLLER USUARIO PARA EFETUAR AS OPERAÇÕES
*/


const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UserController.js');

router.get('/usuarios',usuarioController.listarUsuarios);
router.get('/usuario/:id',usuarioController.listarUmUsuario);

router.post('/novoUsuario', usuarioController.novoUsuario);

router.put('/usuario/:id',usuarioController.atualizarUsuario);

router.delete('/usuario/:id',usuarioController.removerUsuario);

module.exports = router;