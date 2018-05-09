"use strict";
var person = ["W Bruno", "R Cardoso"];
for (var i = 0; i <= person.length; i++) {
    console.log(person[i]);
}
person.forEach(function (name) {
    console.log(name);
});
var personObj = { name: "Bruninho", lastname: "Rodrigues" };
for (var prop in personObj) {
    console.log(prop);
    console.log(typeof prop);
}
console.log("-----------------------");
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var prop = person_1[_i];
    console.log(prop);
}
