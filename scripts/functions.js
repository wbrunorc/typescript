"use strict";
// Some simple arrow functions examples
var arrowSum = function (n1, n2) { return n1 + n2; };
var arrowSum2 = function (n1, n2, n3) {
    if (n3) {
        return n1 + n2 - n3;
    }
    return n1 + n2;
};
console.log(arrowSum(3, 4));
console.log(arrowSum2(2, 2, 1));
// Some simple named functions examples
function printOrNot(flag) {
    if (flag === void 0) { flag = true; }
    var output = flag ? "You should print." : "You should NOT print";
    console.log(output);
}
printOrNot(false);
console.log("--------------------------\n--------------------------");
var lottery = {
    names: ["Bruno", "Kely", "Philip", "Ryan"],
    congratsText: ["Congraaats", "Well Done", "You Won!"],
    createLotteryPicker: function () {
        var _this = this;
        console.log("First level of this: " + this.names);
        return function () {
            console.log("Second level of this: " + _this.congratsText);
            var pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: _this.names[pickedPersonNumber], congrats: _this.congratsText[pickedPersonNumber] };
        };
    }
};
var personPicker = lottery.createLotteryPicker();
var pickedPerson = personPicker();
console.log(pickedPerson);
