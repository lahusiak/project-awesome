var getScrumPoint = require("./scrumPoints");
var getName = require("./employeeName");
var getSkill = require("./skill");

var employee = {};

employee.name = getName();
employee.skill = parseInt(getSkill());
employee.scrum = getScrumPoint(1, 9);



console.log(employee);

module.exports = employee;
