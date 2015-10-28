
var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 8000));

app.get('/*', function (request, response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"));
