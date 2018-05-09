"use strict";
//Boolean
var isThisVariableGood = false;
//Numbers
var myNumber = 0;
//Text, string
var myName = "Bruninho";
//Template strings
var myGreeting = "Hello, " + myName;
var myGreeting2 = "Hello, " + myName;
//Arrays
var count = [0, 1, 2, 3, 4, 5];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
//If you don't know the type
var anything = 0;
anything = "Zero";
anything = false;
//Returning nothing 
function greeting(myNickname) {
    console.log("Hello, " + myNickname);
}
//Enums
var joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    //Then move the player to left.
}
