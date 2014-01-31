//var http = require("http");
/*var express = require("express");

var app = express();

app.use(express.bodyParser());
app.set('view engine', 'jade');
app.use(express.static(process.cwd() + '/public'));

app.get("/", function(request,response){
    response.render("application");
    response.end();
});

app.listen(8888);*/

// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.set('view engine', 'jade');
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.render("application");
  //res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});