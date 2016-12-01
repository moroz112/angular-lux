var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(__dirname));

app.get("/greeting", function(req,res) {
    res.send("Hello, "+req.query.name+"! I’m server!");
});

app.listen(3000);