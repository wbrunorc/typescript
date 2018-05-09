"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Personn = /** @class */ (function () {
    function Personn() {
        this.name = "";
    }
    Personn = __decorate([
        course
    ], Personn);
    return Personn;
}());
function course(target) {
    Object.defineProperty(target.prototype, "course", { value: function () { return "Decorators Example"; } });
}
var pe4 = new Personn();
console.log(pe4.course());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.name = "";
    }
    Teacher = __decorate([
        Course({
            course: "DevDojo - TypeScript"
        })
    ], Teacher);
    return Teacher;
}());
function Course(config) {
    return function (target) {
        Object.defineProperty(target.prototype, "course", { value: function () { return config.course; } });
    };
}
var teacher = new Teacher();
console.log(teacher.course());
