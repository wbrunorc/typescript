//Boolean
let isThisVariableGood: boolean = false;

//Numbers
let myNumber: number = 0;

//Text, string
let myName: string = "Bruninho";

//Template strings
let myGreeting: string = "Hello, " + myName;
let myGreeting2: string = `Hello, ${myName}`;

//Arrays
let count: number[] = [0, 1, 2, 3, 4, 5];
let month: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//If you don't know the type
let anything: any = 0;
anything = "Zero";
anything = false;

//Returning nothing 
function greeting(myNickname: string): void {
    console.log("Hello, " + myNickname)
}

//Enums
let joystickStatus = 1;
enum Directions { Up, Down, Left, Right };

if (joystickStatus === Directions.Left) {
    //Then move the player to left.
}

