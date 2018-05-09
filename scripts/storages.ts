// Session Storage Tests
let key1 = "Session Storage 1";
let key2 = "Session Storage 2";

sessionStorage.clear();//Clear everything

// console.log(sessionStorage.getItem(key1));
// console.log(sessionStorage.getItem(key2));

sessionStorage.setItem(key1, "Session Storage 1");//Set a single key value
sessionStorage.setItem(key2, "Session Storage 2");

//console.log(sessionStorage.getItem(key1));
//console.log(sessionStorage.getItem(key2));

for (let i = sessionStorage.length - 1; i >= 0; i--) {
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}

//sessionStorage.removeItem(key1);//Clear a single key
//console.log(sessionStorage.getItem(key1));
console.log("-------------------------------------------------------");

//for (let i = 0; i < sessionStorage.length; i++) {
//   console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
//}


// Local Storage Tests

let localKey1 = "Local Storage K1";
let localKey2 = "Local Storage K2";

console.log(localStorage.getItem(localKey1));
console.log(localStorage.getItem(localKey2));

localStorage.setItem(localKey1, "Local Storage 1");//Set a single key value
localStorage.setItem(localKey2, "Local Storage 2");