var http = require("http");
var express = require("express");

var app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/app"));

var server = http.createServer(app);
server.listen(3000);