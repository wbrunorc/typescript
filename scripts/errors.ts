function doSomethingWithString(input:string): string {
    if (input === undefined || input === "") {
        throw new StringNotValidError(`The string ${input} is not valid.`);
    }
    return input;
}
class ApplicationError implements Error {
    name: string = "ApplicationError";

    constructor(public message: string){
        if(console !== undefined){
            console.log(`Error: ${message}`);
        }
    }
    
    toString(): string{
        return `${this.name} : ${this.message}`;
    }
}

class StringNotValidError extends ApplicationError{

}
try {
    let input = doSomethingWithString("");
} catch (err) {
    if (err instanceof ApplicationError){
        console.log(`This is an instance of Application Error!`);
        throw err;
    }
    console.log(`Caught Error!`);
} finally{
    console.log(`This is always executed.`);
}