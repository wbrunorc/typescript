// Some simple arrow functions examples

let arrowSum = (n1: number, n2: number) => n1 + n2;
let arrowSum2 = (n1: number, n2: number, n3?: number) => {
    if (n3) {
        return n1 + n2 - n3;
    }
    return n1 + n2;
}

console.log(arrowSum(3, 4));
console.log(arrowSum2(2, 2, 1));


// Some simple named functions examples

function printOrNot(flag: boolean = true) {
    let output: string = flag ? "You should print." : "You should NOT print";
    console.log(output);
}

printOrNot(false);
console.log("--------------------------\n--------------------------");


let lottery = {
    names: ["Bruno", "Kely", "Philip", "Ryan"],
    congratsText: ["Congraaats", "Well Done", "You Won!"],
    createLotteryPicker: function () {
        console.log("First level of this: " + this.names);
        return () => {
            console.log("Second level of this: " + this.congratsText);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return {name:this.names[pickedPersonNumber], congrats:this.congratsText[pickedPersonNumber]};
        }
    }
};

let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);