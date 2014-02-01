//var http = require("http");
var express = require("express");

var app = express();

app.use(express.bodyParser());
app.set('view engine', 'jade');

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(process.cwd() + '/css'));
app.use(express.static(process.cwd() + '/js'));

app.get("/", function(request,response){
    response.render("application");
    response.end();
});

app.listen(8888);
