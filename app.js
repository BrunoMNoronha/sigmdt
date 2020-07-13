var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');

var indexRouter = require('./routes/index');
var financeiroRouter = require('./routes/financeiro');
var ticketsRouter = require('./routes/tickets');
var produtosRouter = require('./routes/produtos');
var seriaisRouter = require('./routes/seriais');
var clientesRouter = require('./routes/clientes');
var categoriasRouter = require('./routes/categorias');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
});

app.use('/', indexRouter);
app.use('/financeiro', financeiroRouter);
app.use('/tickets', ticketsRouter);
app.use('/produtos', produtosRouter);
app.use('/categorias', categoriasRouter);
app.use('/seriais', seriaisRouter);
app.use('/clientes', clientesRouter);

// capturando erros
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({error: error.message});
// })

app.listen(3131, function () {
  console.log('Running on port 3131!');
});