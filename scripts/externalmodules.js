"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidatorExternal_1 = require("./EmailValidatorExternal");
var UrlValidatorExternal_1 = require("./UrlValidatorExternal");
var emailExamples2 = ["lalala", "lalala@lalala", "lalalala@bla.com"];
var urlExamples2 = ["blabalbla", "blablabla.com", "blablabla.com.br", "www.blablabla.com", "https://www.blablabla.com"];
emailExamples2.forEach(function (email) {
    console.log(email + "  " + new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email));
});
urlExamples2.forEach(function (url) {
    console.log(url + "  " + new UrlValidatorExternal_1.UrlValidatorExternal().isValid(url));
});
