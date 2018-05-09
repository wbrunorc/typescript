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
