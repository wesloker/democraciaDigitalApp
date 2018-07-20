'use strict';
const
  express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
      title: 'Inicio'
    }
  )})

  .get('/informes-ley', (req, res) => {
    res.render('informes-ley', {
      title: 'Informes de Ley'
    })
  });

module.exports = router;