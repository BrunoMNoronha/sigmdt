var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');

var indexRouter = require('./routes/index');
var pedidosRouter = require('./routes/pedidos');

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
app.use('/pedidos', pedidosRouter);

app.listen(3131, function () {
  console.log('Running on port 3131!');
});