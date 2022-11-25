const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UserController.js');

router.get('/usuarios',usuarioController.listarUsuarios);
router.post('/novoUsuario', usuarioController.novoUsuario);

module.exports = router;