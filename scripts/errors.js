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
function doSomethingWithString(input) {
    if (input === undefined || input === "") {
        throw new StringNotValidError("The string " + input + " is not valid.");
    }
    return input;
}
var ApplicationError = /** @class */ (function () {
    function ApplicationError(message) {
        this.message = message;
        this.name = "ApplicationError";
        if (console !== undefined) {
            console.log("Error: " + message);
        }
    }
    ApplicationError.prototype.toString = function () {
        return this.name + " : " + this.message;
    };
    return ApplicationError;
}());
var StringNotValidError = /** @class */ (function (_super) {
    __extends(StringNotValidError, _super);
    function StringNotValidError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringNotValidError;
}(ApplicationError));
try {
    var input = doSomethingWithString("");
}
catch (err) {
    if (err instanceof ApplicationError) {
        console.log("This is an instance of Application Error!");
        throw err;
    }
    console.log("Caught Error!");
}
finally {
    console.log("This is always executed.");
}
