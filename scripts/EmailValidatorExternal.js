"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var EmailValidatorExternal = /** @class */ (function () {
    function EmailValidatorExternal() {
    }
    EmailValidatorExternal.prototype.isValid = function (str) {
        return emailRegex.test(str);
    };
    return EmailValidatorExternal;
}());
exports.EmailValidatorExternal = EmailValidatorExternal;
