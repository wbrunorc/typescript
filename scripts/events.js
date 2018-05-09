"use strict";
var ClickHander = /** @class */ (function () {
    function ClickHander() {
        var main = document.getElementById("main");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHander.alertEventMain, true);
            btn1.addEventListener("click", ClickHander.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHander.alertEventBtn2, true);
        }
    }
    //capturing and bubbling
    ClickHander.alertEventMain = function (event) {
        alert("Clicked over Main");
        event.stopPropagation();
    };
    ClickHander.alertEventBtn1 = function () {
        alert("Clicked over Btn1");
    };
    ClickHander.alertEventBtn2 = function () {
        alert("Clicked over Btn2");
    };
    return ClickHander;
}());
var clickHandler = new ClickHander();
