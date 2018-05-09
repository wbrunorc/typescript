(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
var UrlValidatorExternal = /** @class */ (function () {
    function UrlValidatorExternal() {
    }
    UrlValidatorExternal.prototype.isValid = function (str) {
        return urlRegex.test(str);
    };
    return UrlValidatorExternal;
}());
exports.UrlValidatorExternal = UrlValidatorExternal;

},{}],3:[function(require,module,exports){
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

},{"./EmailValidatorExternal":1,"./UrlValidatorExternal":2}]},{},[3]);
