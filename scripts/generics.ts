// Examples with FUNCTIONS
// Named function example using generics
function reverseList<T>(list: Array<T>): Array<T> {

    let reversedList: T[] = [];

    for (let i = list.length - 1; i >= 0; i--) {
        // console.log(">> " + list[i]);
        reversedList.push(list[i]);
    }

    return reversedList;
}

let namesList: Array<string> = ["Ragnar", "Lagertha", "Loki", "Bjorn", "Rollo"];
let numbersList: Array<number> = [1, 2, 3, 4, 5];
let reversedNames = reverseList(namesList);
let reversedNumbers = reverseList(numbersList);

console.log(reversedNames);
console.log(reversedNumbers);

// Arrow function example using generics
let reverseArrowList = <T>(list: Array<T>): Array<T> => {

    let reversedArrowList: T[] = [];

    for (let i = list.length - 1; i >= 0; i--) {
        reversedArrowList.push(list[i]);
    }

    return reversedArrowList;
}

console.log("=> " + reversedNames);
console.log("=> " + reversedNumbers);

// Examples using CLASSES and INTERFACES

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    printName(): void {
        console.log(`Your name is ${this._name}`);
    }

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }

}

interface Repository<T, ID> {
    findById(id: ID): T;
    save(entity: T): T;
}

class PersonRepository implements Repository<Person, number>{

    findById(id: number): Person{
        console.log(`Searching using ID: ${id}`);
        return new Person("Nami");
    }

    save(entity: Person): Person {
        return new Person("Jake");
    }

}

let personRepository = new PersonRepository();
console.log(personRepository.findById(1));
console.log(personRepository.save(new Person("T Chan")));
console.log("--------------------");

interface NumberId {
    id: number;
}

interface Repository2<T, ID extends NumberId> {
    findById(id: ID): T;
    save(entity: T): T;
}

class PersonRepository2 implements Repository2<Person, NumberId>{

    findById(numberId: NumberId): Person{
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person("Nami");
    }

    save(entity: Person): Person {
        return new Person("Jake");
    }

}

let personRepository2 = new PersonRepository2();
console.log(personRepository2.findById({id: 2}));