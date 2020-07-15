var express = require('express');
var router = express.Router();

const FinanceiroController = require('../controllers/FinanceiroController')

router.get('/', FinanceiroController.index);

router.post('/', FinanceiroController.index);

// router.get('/cadastro', PedidoController.cadastro);

router.post('/store',  FinanceiroController.store);

// router.put('/update/:id',  PedidoController.update);

// router.get('/accept/:id', PedidoController.accept);

// router.get('/done/:id', PedidoController.done);

module.exports = router;
