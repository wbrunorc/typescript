abstract class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    getName() {
        return this.name;
    };

    walk(distance: number) {
        console.log("Hellooooo, my name is " + this.name + " and I'm walking " + distance + " meters.");
    }

}

class Snake extends Animal {

    constructor(theName: string) {
        super(theName);
    }

    // Teste para usar o método e sobrescrever tbm...
    walk(distance: number) {
        super.walk(666);
        console.log("But, HEEEY! " + myAnimal.getName() + " is a snake!\nAnd, you know, snakes can't walk anyway! ¯\\_(ツ)_/¯ ");
    }

    crawl(distance: number) {
        console.log("Hi, dude! My name is " + myAnimal.getName() + " and you said " + distance + " meters.\nBut, you know, snakes can't walk anyway!¯\\_(ツ)_/¯ ");
    }

}

let myAnimal = new Snake("Lucy");
myAnimal.walk(1);


