var express = require('express');
var router = express.Router();

const PedidoController = require('../controllers/PedidoController')

router.get('/', PedidoController.index);

router.get('/cadastro', PedidoController.cadastro);

router.post('/store',  PedidoController.store);

router.put('/update/:id',  PedidoController.update);

router.get('/accept/:id', PedidoController.accept);

router.get('/done/:id', PedidoController.done);

module.exports = router;
