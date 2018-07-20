'use strict';
const
mysql = require('mysql'),
conf  = require('./dbConf'),

dbOptions = {
  host : conf.mysql.host,
  user : conf.mysql.user,
  password : conf.mysql.pass,
  port : conf.mysql.port,
  database : conf.mysql.db,
  multipleStatements: true
},
dbConnection = mysql.createConnection(dbOptions);
dbConnection.connect((err) => {
return (err)
  ? console.log(`Error to connect MySQL: ${err.stack}`)
  : console.log(`Connection with MySQL N°: ${dbConnection.threadId}`);
});
module.exports = dbConnection;