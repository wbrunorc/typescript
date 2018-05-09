"use strict";
var nameSet = new Set();
nameSet.add("Bruninho");
nameSet.add("Hecate");
nameSet.add("Princesinha");
nameSet.add("Veru");
nameSet.add("Felinoos");
//nameSet.add("Lithus").add("Esthefanie").add("Bruna");    //Another way to implement the .add()
console.log(nameSet);
var nameSet2 = new Set(["Manon", "Ceridween", "Kernunos", "Rheia", "Hecate", "Bridgit"]); //another way to implement
console.log(nameSet2);
console.log("----------------------");
console.log("NameSet 1 Size is: " + nameSet.size);
console.log("----------------------");
console.log(nameSet.has("Manuel"));
console.log(nameSet.has("Veru"));
console.log(nameSet.delete("kate"));
console.log(nameSet.delete("Kate"));
console.log("----------------------");
console.log("NameSet 1 Size is: " + nameSet.size);
console.log("NameSet 2 Size is: " + nameSet2.size);
nameSet.clear();
// nameSet2.clear();
console.log("----------------------");
console.log("----------------------");
//iterando sobre o array
for (var _i = 0, _a = Array.from(nameSet2); _i < _a.length; _i++) {
    var aux = _a[_i];
    console.log(aux);
}
console.log("----------------------");
//iterando sobre o array com forEach
nameSet2.forEach(function (value) { return console.log(value); });
console.log("----------------------");
console.log("----------------------");
