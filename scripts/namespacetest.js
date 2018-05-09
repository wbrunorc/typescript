"use strict";
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
