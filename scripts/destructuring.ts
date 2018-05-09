namespace Destructuring {
    let person = { name: "W Bruno", lastname: "R Cardoso" };
    let name1 = person.name;
    let lastname1 = person.lastname;

    console.log(name1);
    console.log(lastname1);

    let { name: name2, lastname: lastname2 } = person;

    console.log(name2);
    console.log(lastname2);

    //Arrays
    let array = ["Bruninho", "Rodrigues Cardoso"];
    let [a, b] = array;

    console.log(a);
    console.log(b);

    console.log("----------------------------");


    class NewPerson {
        constructor(public name: string) {

        }
    }

    function example(person: NewPerson) {
        console.log(person.name);
    }

    example(new NewPerson("T Chan"));
}