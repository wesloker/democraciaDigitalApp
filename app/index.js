'use strict';
const
    express = require('express'),
    app = express(),
    pug = require('pug'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    port = 3000,
    dbConf = require(path.join(process.cwd(), 'app', 'models', 'dbConf')),
    router = require(path.join(process.cwd(), 'app', 'routes')),
    viewsDir = path.join(process.cwd(), 'app', 'views'),
    publicDir = express.static(path.join(process.cwd(), 'app', 'public'));
console.log(path.join(process.cwd(), 'app', 'routes'));
app
  .set('port', port)
  .set('views', viewsDir)
  .set('view engine', 'pug')
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: false
  }))
  .use(express.json())
  .use(publicDir)
  .use('/img', express.static(path.join(process.cwd(), 'public', 'img')))
  .use('/css', express.static(path.join(process.cwd(), 'public', 'css')))
  .use('/js', express.static(path.join(process.cwd(), 'public', 'js')))
  .use(router)
  .use(morgan('dev'))
  .listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });