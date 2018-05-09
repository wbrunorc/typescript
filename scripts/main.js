"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    ;
    Animal.prototype.walk = function (distance) {
        console.log("Hellooooo, my name is " + this.name + " and I'm walking " + distance + " meters.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    // Teste para usar o método e sobrescrever tbm...
    Snake.prototype.walk = function (distance) {
        _super.prototype.walk.call(this, 666);
        console.log("But, HEEEY! " + myAnimal.getName() + " is a snake!\nAnd, you know, snakes can't walk anyway! ¯\\_(ツ)_/¯ ");
    };
    Snake.prototype.crawl = function (distance) {
        console.log("Hi, dude! My name is " + myAnimal.getName() + " and you said " + distance + " meters.\nBut, you know, snakes can't walk anyway!¯\\_(ツ)_/¯ ");
    };
    return Snake;
}(Animal));
var myAnimal = new Snake("Lucy");
myAnimal.walk(1);
