"use strict";
var Validations;
(function (Validations) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validations.EmailValidator = EmailValidator;
})(Validations || (Validations = {}));
