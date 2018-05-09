"use strict";
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
