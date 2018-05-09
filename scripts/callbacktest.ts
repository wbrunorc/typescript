function doingSomething(callback: (name: string) => void): void {
    callback.call(this, "W Bruno");
    callback.apply(this, ["W.", "Bruno", "Bruninho"]);
    callback("W. Bruno");
}

function execute(name: string): void {
    console.log(name);
}

doingSomething(execute);

function calculator(n1: number, n2: number, type: string): number {

    switch (type) {
        case "add":
            return n1 + n2;
        case "multiply":
            return n1 * n2;
        case "divide":
            return n1 / n2;
        case "subtract":
            return n1 - n2
        default:
            return 0;
    }

}

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function multiply(n1: number, n2: number): number {
    return n1 * n2;
}

function calculator2(n1: number, n2: number, callback): number {
    if (typeof callback === "function") {
        return callback(n1, n2);
    }
    return 0;
}

function calculator3(n1: number, n2: number, callback: (n1: number, n2: number) => number): number {
    return callback(n1, n2);
}

console.log(calculator2(5, 7, add));
console.log(calculator2(5, 7, multiply));
console.log(calculator3(5, 5, multiply));
console.log(calculator3(12, 6, (n1: number, n2: number) => {
    return n1 - n2;
}));