let person = ["W Bruno", "R Cardoso"];

for(let i=0;i<=person.length; i++){
    console.log(person[i]);
}

person.forEach((name)=>{
    console.log(name);
})

let personObj = {name: "Bruninho", lastname: "Rodrigues"}
for(let prop in personObj){
    console.log(prop);
    console.log(typeof prop);
}

console.log("-----------------------");

for(let prop of person){
    console.log(prop);
}