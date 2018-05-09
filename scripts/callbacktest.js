"use strict";
function doingSomething(callback) {
    callback.call(this, "W Bruno");
    callback.apply(this, ["W.", "Bruno", "Bruninho"]);
    callback("W. Bruno");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
function calculator(n1, n2, type) {
    switch (type) {
        case "add":
            return n1 + n2;
        case "multiply":
            return n1 * n2;
        case "divide":
            return n1 / n2;
        case "subtract":
            return n1 - n2;
        default:
            return 0;
    }
}
function add(n1, n2) {
    return n1 + n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function calculator2(n1, n2, callback) {
    if (typeof callback === "function") {
        return callback(n1, n2);
    }
    return 0;
}
function calculator3(n1, n2, callback) {
    return callback(n1, n2);
}
console.log(calculator2(5, 7, add));
console.log(calculator2(5, 7, multiply));
console.log(calculator3(5, 5, multiply));
console.log(calculator3(12, 6, function (n1, n2) {
    return n1 - n2;
}));
