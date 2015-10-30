var companyArray = ["Company1"];
var frontendValue = randomNumber(10, 60);
var backendValue = randomNumber(10, 60);
var logicValue = randomNumber(10, 60);

var frontendScrumPoints = 0;
var backendScrumPoints = 0;
var logicScrumPoints = 0;

var frontendEmployeeCount = 0;
var backendEmployeeCount = 0;
var logicEmployeeCount = 0;

var totalWeeks = 0;

var employeeArray = [];


$(document).ready(function(){
    $(".generate").on("click", function(){
        appendDom();
        //console.log(frontendValue);
        addScrumAndSkillPoints(employee1);
        console.log("This is employee1:" , employee1);
        addScrumAndSkillPoints(employee2);
        addScrumAndSkillPoints(employee3);

        //getEmployee();
        //console.log("This is Employee Count: " + backendEmployeeCount);
        //console.log("This is Scrum points: " + backendScrumPoints);

    });
    $("#output").on("click", ".assign-employee", function(){
        getEmployee();
        //addEmployeeToArray();
        console.log("I got the data!");
    });

});

function appendDom(){
    //console.log("I'm working!");
    $('#output').append("<h1>" + companyArray[0] + "<h1>");
    $('#output').children().last().append("<button class = 'assign-employee'>Assign Staff</button>");
    $('#frontend').children().last().append(frontendValue);
    $('#backend').children().last().append(backendValue);
    $('#logic').children().last().append(logicValue);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function getEmployee(){
    $.ajax({
        type: "GET",
        url:"/employee",
        success: function(employee){
            employeeArray.push(employee);
            console.log("This is employeeArray", employeeArray);
            console.log("I got here", employee);
        }
    })
}

function addEmployeeToArray(employee){
    employeeArray.push(employee);
}

function metCriteria() {
    if (frontendEmployeeCount > 0
        && backendEmployeeCount > 0
        && logicEmployeeCount > 0) {
        console.log ("Criteria met");
        findTotalWeeks();

    }else{
        console.log("Criteria not met yet");
    }
};


var employee1 = {
    name:"Joe",
    skill:"backEnd",
    scrum:5
};

var employee2 = {
    name:"Mary",
    skill:"frontEnd",
    scrum:3
};

var employee3 = {
    name:"Jan",
    skill:"logic",
    scrum:7
};

function addScrumAndSkillPoints(employee){
    console.log("This is employee: ", employee);
    if(employee.skill == "frontEnd") {
        frontendEmployeeCount++;
        frontendScrumPoints += employee.scrum;
    }else if(employee.skill == "backEnd"){
        backendEmployeeCount++;
        backendScrumPoints += employee.scrum;
        console.log("This is the backEnd employee");
    }else if(employee.skill == "logic"){
        logicEmployeeCount++;
        logicScrumPoints += employee.scrum;
    }else{
        console.log("Employee not found");
    }
    metCriteria();
}

function findTotalWeeks(){
   var tempFront = frontendValue/frontendScrumPoints;
    var tempBack = backendValue/backendScrumPoints;
     var tempLogic = logicValue/logicScrumPoints;

   totalWeeks = Math.max(tempFront, tempBack, tempLogic);

    console.log("this is total weeks: ", totalWeeks);

}

function addEmployee(){

}

//
//function addScrumAndSkillPoints(buttonClicked){
//
//    switch(buttonClicked) {
//        //check against employee module object incoming from server
//        case "frontEnd":
//            frontendEmployeeCount++;
//            frontendScrumPoints += frontendScrumPoints;
//            break;
//        case "backEnd":
//            backendEmployeeCount++;
//            backendScrumPoints += backendScrumPoints;
//            break;
//        case "logic":
//            logicEmployeeCount++;
//            logicScrumPoints += logicScrumPoints;
//            break;
//
//    }
//}

//function generateEmployeeName(){
//    //generate a number between 1 and 100 and get name
//}
//function generateCompanyName(){
//    //generate number 1-100
//}
//function generateEmployee(){
//    //generate number 1-100
//}