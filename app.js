
var express = require('express');
var app = express();
var path = require('path');
var employee = require("./server/employee");

app.set('port', (process.env.PORT || 8000));

app.get('/*', function (request, response){
    var file = request.params[0] || "index.html";
    response.write(getScrumPoint(1,9));
    //console.log("ScrumPoints: ", getScrumPoint(1, 9));
    //console.log("EmployeeName: ", getName());
    //console.log("Skill: ", getSkill());
    conosle.log("Skill", skill);
    console.log("Employee: ", employee);
    //response.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"));
