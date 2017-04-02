var express = require('express');
var router = express.Router();
var tareas = [
      {
          "nom":"Diseño wireframe",
          "etiquetes": [ "wireframe","app","hibrida"],
          "realització":"36"
      },
      {
          "nom":"Reunión",
          "etiquetes": ["app","hibrida"],
          "realització":"74"
      },
      {
          "nom":"Desarrollo Layout",
          "etiquetes": [ "layout","app","hibrida"],
          "realització":"52"
      },
      {
          "nom":"Reunión cliente",
          "etiquetes": [ "reunión","app","hibrida"],
          "realització":"20"
      }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tareas', function(req, res, next) {
  res.render('tareas', { title: 'Express', tareas: tareas});
});

router.get('/tareas/new', function(req, res, next){
   res.render('nuevaTarea', {title: 'Express'}); 
});

module.exports = router;
