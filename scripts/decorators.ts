@course
class Personn {
    name: string = "";
}

function course(target: any) {
    Object.defineProperty(target.prototype, "course",
        { value: () => "Decorators Example" });
}

let pe4 = new Personn();
console.log(pe4.course());


@Course({
    course: "DevDojo - TypeScript"
})
class Teacher {
    name: string = "";
}
function Course(config: any) {
    return (target: any) => {
        Object.defineProperty(target.prototype, "course",
            { value: () => config.course });
    }
}
let teacher = new Teacher();
console.log(teacher.course());