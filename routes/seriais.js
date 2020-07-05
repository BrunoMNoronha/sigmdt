var express = require('express');
var router = express.Router();

var path = require('path');

const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage })

const SerialController = require('../controllers/SerialController')

router.get('/', SerialController.index);

router.get('/cadastro', SerialController.cadastro);

router.post('/store', upload.single('csv'), SerialController.store);

// router.get('/controle-serial/:id', SerialController.controleSerial);

// router.put('/update/:id',  SerialController.update);

module.exports = router;
