var express = require('express');
var router = express.Router();

/* GET home page. */
var calculo = [];


var datos = {
  cuenta:"0801199611727",
  nombre:"luis eduardo diaz tercero",
  correo:"luiseduardo@gmail.com"
};


router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/0801199611727', function(req, res, next) {
  res.json(datos);
});

router.get('/suma', function(req, res, next) {
  res.render('suma', {});
});

router.post('/suma', function(req, res, next) {
var sum = Object.assign({},calculo);
sum.num1 = req.body.n1;
sum.num2 = req.body.n2;
sum.calculo = parseInt(req.body.n1) + parseInt(req.body.n2);
calculo.push(sum);
var data = Object.assign({}, req.body);
data.calculo = calculo;
res.render('suma', data);
});
module.exports = router;
