"use strict";
var AjaxTest = /** @class */ (function () {
    function AjaxTest() {
        this.READY_STATUS_CODE = 4;
    }
    AjaxTest.prototype.isCompleted = function (req) {
        return req.readyState === this.READY_STATUS_CODE;
    };
    AjaxTest.prototype.httpGet = function (url, callback) {
        var _this = this;
        var req = new XMLHttpRequest;
        req.onreadystatechange = function () {
            var finished = _this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("GET", url, true);
        req.send();
    };
    AjaxTest.prototype.httpPost = function (url, data, callback) {
        var _this = this;
        var req = new XMLHttpRequest;
        req.onreadystatechange = function () {
            var finished = _this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    };
    return AjaxTest;
}());
var ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", function (status, response) {
    var divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
ajax.httpPost("http://httpbin.org/post", "{name: 'W. Bruno', company: 'AC'}", function (status, response) {
    var divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
