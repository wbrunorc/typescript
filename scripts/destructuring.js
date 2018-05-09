"use strict";
var Destructuring;
(function (Destructuring) {
    var person = { name: "W Bruno", lastname: "R Cardoso" };
    var name1 = person.name;
    var lastname1 = person.lastname;
    console.log(name1);
    console.log(lastname1);
    var name2 = person.name, lastname2 = person.lastname;
    console.log(name2);
    console.log(lastname2);
    //Arrays
    var array = ["Bruninho", "Rodrigues Cardoso"];
    var a = array[0], b = array[1];
    console.log(a);
    console.log(b);
    console.log("----------------------------");
    var NewPerson = /** @class */ (function () {
        function NewPerson(name) {
            this.name = name;
        }
        return NewPerson;
    }());
    function example(person) {
        console.log(person.name);
    }
    example(new NewPerson("T Chan"));
})(Destructuring || (Destructuring = {}));
