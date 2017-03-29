var express = require('express'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

/*
app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
*/
/*app.get('/api/random-quote', function(req, res) {
var xx;
  connection.query('SELECT * from tasks LIMIT 2', function(err, rows, fields) {
  connection.end();
    if (!err) {
      console.log('The solution is: ', rows);
      xx = rows;
     }
    else {
      console.log('Error while performing Query.');
      xx = 'error';
      }
    });
    return res.status(200).send(rows);
    });*/
