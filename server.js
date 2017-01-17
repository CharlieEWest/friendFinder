// NODE packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

console.log('Hello world');
// Tell node to create an "express" server
// var app = express(); 
// port listner
// var PORT = process.env.PORT || 3000; /



// BodyParser handles data makes it easy for our server to interpret data.
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
*/

// ================================================================================
// ROUTER points our server 
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or 
// request data from various URLs. 
// ================================================================================

/*
require('./app/routing/api-Routes.js')(app); 
require('./app/routing/html-Routes.js')(app);

*/

/*var app = express();
var PORT = process.env.PORT || 3000;

 app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);*/