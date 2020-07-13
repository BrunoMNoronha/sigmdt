var express = require('express');
var router = express.Router();

const CategoriaController = require('../controllers/CategoriaController')

// router.get('/', CategoriaController.index);

// router.get('/cadastro', CategoriaController.cadastro);

router.post('/store', CategoriaController.store);

// router.get('/controle-serial/:id', CategoriaController.controleSerial);

// router.put('/update/:id',  CategoriaController.update);

module.exports = router;
