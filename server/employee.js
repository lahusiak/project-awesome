var getScrumPoint = require("./scrumPoints");
var getName = require("./employeeName");
var getSkill = require("./skill");

var employee = {};

employee.name = getName();
employee.skill = getSkill();
employee.scrum = getScrumPoint(1, 9);

console.log("This is employee.scrum: ", employee.scrum);
console.log(employee);

module.exports = employee;
