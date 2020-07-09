var express = require('express');
var router = express.Router();

const ClienteController = require('../controllers/ClienteController')

router.get('/', ClienteController.index);

router.get('/cadastro', ClienteController.cadastro);

router.post('/store', ClienteController.store);

router.get('/controle-serial/:id', ClienteController.controleSerial);

// router.put('/update/:id',  ClienteController.update);

module.exports = router;
