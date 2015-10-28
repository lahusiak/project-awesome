var companyArray = ["Company1"];
var frontendValue = randomNumber(10, 60);
var backendValue = randomNumber(10, 60);
var logicValue = randomNumber(10, 60);

$(document).ready(function(){
    $(".generate").on("click", function(){
        appendDom();
        console.log(frontendValue);
    });

});

function appendDom(){
    //console.log("I'm working!");
    $('#output').append("<h1>" + companyArray[0] + "<h1>");
    $('#frontend').children().last().append(frontendValue);
    $('#backend').children().last().append(backendValue);
    $('#logic').children().last().append(logicValue);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



//function randomFrontend(){
//    frontendValue = randomNumber(10, 60);
//    return frontendValue;
//}