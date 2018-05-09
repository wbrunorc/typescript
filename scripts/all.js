var Validations;
(function (Validations) {
    var htmlTagRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    var HtmlTagValidator = /** @class */ (function () {
        function HtmlTagValidator() {
        }
        HtmlTagValidator.prototype.isValid = function (str) {
            return htmlTagRegex.test(str);
        };
        return HtmlTagValidator;
    }());
})(Validations || (Validations = {}));
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
var Validations;
(function (Validations) {
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validations.UrlValidator = UrlValidator;
})(Validations || (Validations = {}));
/// <reference path = "Validation.ts"/>
/// <reference path = "EmailValidator.ts"/>
/// <reference path = "UrlValidator.ts"/>
var EmailValidator = Validations.EmailValidator;
var UrlValidator = Validations.UrlValidator;
var emailExamples = ["lalala", "lalala@lalala", "lalalala@bla.com"];
var urlExamples = ["blabalbla", "blablabla.com", "blablabla.com.br", "www.blablabla.com", "https://www.blablabla.com"];
emailExamples.forEach(function (email) {
    console.log(email + "  " + new EmailValidator().isValid(email));
});
urlExamples.forEach(function (url) {
    console.log(url + "  " + new UrlValidator().isValid(url));
});
