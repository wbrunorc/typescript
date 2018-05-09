"use strict";
// Examples with FUNCTIONS
// Named function example using generics
function reverseList(list) {
    var reversedList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        // console.log(">> " + list[i]);
        reversedList.push(list[i]);
    }
    return reversedList;
}
var namesList = ["Ragnar", "Lagertha", "Loki", "Bjorn", "Rollo"];
var numbersList = [1, 2, 3, 4, 5];
var reversedNames = reverseList(namesList);
var reversedNumbers = reverseList(numbersList);
console.log(reversedNames);
console.log(reversedNumbers);
// Arrow function example using generics
var reverseArrowList = function (list) {
    var reversedArrowList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversedArrowList.push(list[i]);
    }
    return reversedArrowList;
};
console.log("=> " + reversedNames);
console.log("=> " + reversedNumbers);
// Examples using CLASSES and INTERFACES
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.printName = function () {
        console.log("Your name is " + this._name);
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var PersonRepository = /** @class */ (function () {
    function PersonRepository() {
    }
    PersonRepository.prototype.findById = function (id) {
        console.log("Searching using ID: " + id);
        return new Person("Nami");
    };
    PersonRepository.prototype.save = function (entity) {
        return new Person("Jake");
    };
    return PersonRepository;
}());
var personRepository = new PersonRepository();
console.log(personRepository.findById(1));
console.log(personRepository.save(new Person("T Chan")));
console.log("--------------------");
var PersonRepository2 = /** @class */ (function () {
    function PersonRepository2() {
    }
    PersonRepository2.prototype.findById = function (numberId) {
        console.log("Searching using ID: " + numberId.id);
        return new Person("Nami");
    };
    PersonRepository2.prototype.save = function (entity) {
        return new Person("Jake");
    };
    return PersonRepository2;
}());
var personRepository2 = new PersonRepository2();
console.log(personRepository2.findById({ id: 2 }));
