var mysql      = require('mysql');
mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'na12345',
  database : 'task_manager'
}).connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
  });;

/*
var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'na12345',
  database : 'task_manager'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});
*/
