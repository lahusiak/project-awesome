
var express = require('express');
var app = express();
var path = require('path');
var employee = require("./server/employee");


app.set('port', (process.env.PORT || 8000));

app.get('/*', function (request, response){
    var file = request.params[0] || "index.html";
    //response.write(getScrumPoint(1,9));
    //console.log("this is scrum:", getScrumPoint); when console log is here it does not appear
    //but it does appear when console log is called in the function
    //console.log("Employee: ", employee); when console log is here it does not appear
    response.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"));
