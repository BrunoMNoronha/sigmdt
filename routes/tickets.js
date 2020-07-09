var express = require('express');
var router = express.Router();

const TicketController = require('../controllers/TicketController')

router.get('/', TicketController.index);

router.get('/cadastro', TicketController.cadastro);

router.post('/store',  TicketController.store);

router.put('/update/:id',  TicketController.update);

router.get('/accept/:id', TicketController.accept);

router.get('/done/:id', TicketController.done);

module.exports = router;
