var randomSkillArray = ["frontEnd", "backEnd", "logic"];

var skill="";

function randomNumber (min, max){
    return (Math.floor(Math.random() * (1 + max - min) + min));
}

var getSkill = function(){
    var temp = randomNumber(0, randomSkillArray.length);
    skill = randomSkillArray[temp];
    return skill;
};

module.exports = getSkill;