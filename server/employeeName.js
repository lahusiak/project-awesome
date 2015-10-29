var randomNameArray = ["Paige", "Andy", "Laryssa", "Dave"];
var name;

function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var getName = function(){
    var temp = randomNumber(0, randomNameArray.length);
    name = randomNameArray[temp];
    return name;
};

module.exports = getName;