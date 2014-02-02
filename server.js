//var http = require("http");
var express = require("express");
var mysql = require("mysql2");

var app = express();

app.use(express.bodyParser());
app.set('view engine', 'jade');  

app.use(express.static(process.cwd() + '/public'));

app.get("/", function(request,response){
    response.render("application");
    response.end();
});

var port = Number(process.env.PORT || 8888);
app.listen(port);
