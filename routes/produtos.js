var express = require('express');
var router = express.Router();

const ProdutoController = require('../controllers/ProdutoController')

router.get('/', ProdutoController.index);

router.get('/cadastro', ProdutoController.cadastro);

router.post('/store', ProdutoController.store);

router.get('/controle-serial/:id', ProdutoController.controleSerial);

// router.put('/update/:id',  ProdutoController.update);

module.exports = router;
