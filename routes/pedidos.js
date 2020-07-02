var express = require('express');
var router = express.Router();
var db = require('../database/db');

router.get('/', function (req, res, next) {

  db.all(`SELECT * FROM pedidos`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    let total = rows.length;
    return res.render('pedidos.html', { pedidos: rows, total });
  })

});

router.get('/cadastro', function (req, res, next) {
  return res.render('pedidos-cadastro.html');
});

router.post('/store', function (req, res) {
  const query = `
  INSERT INTO pedidos (
    data,
    bloco,
    apt,
    prioridade,
    categoria,
    responsavel,
    status,
    descricao
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
`;
  const values = [
    req.body.date,
    req.body.bloco,
    req.body.apt,
    req.body.prioridade,
    req.body.categoria,
    req.body.responsavel,
    req.body.status,
    req.body.descricao
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    return res.redirect('/pedidos');
  }

  db.run(query, values, afterInsertData);
});

router.get('/accept/:id', function (req, res, next) {
  id = req.params.id;
  db.run("UPDATE pedidos SET status = ? WHERE id = ?", "em andamento", id);
  return res.redirect('/pedidos');
});

router.get('/end/:id', function (req, res, next) {
  id = req.params.id;
  db.run("UPDATE pedidos SET status = ? WHERE id = ?", "concluido", id);
  return res.redirect('/pedidos');
});

module.exports = router;
