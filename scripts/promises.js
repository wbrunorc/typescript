"use strict";
var promise = new Promise(function (resolve, reject) {
    var isOpened = true;
    if (isOpened)
        resolve("Opened");
    reject("Not Opened");
});
// promise.then((fromResolve) => {
//     console.log(fromResolve);
// }).catch((fromReject) => {
//     console.log(fromReject);
// })
function openFile() {
    return new Promise(function (resolve, reject) {
        var isOpened = true;
        if (isOpened)
            resolve("Opened");
        reject("Not Opened");
    });
}
function readFile() {
    return new Promise(function (resolve, reject) {
        var isRead = true;
        if (isRead)
            resolve("Read");
        reject("Not Read");
    });
}
function deleteFile() {
    return new Promise(function (resolve, reject) {
        var isDeleted = false;
        if (isDeleted)
            resolve("Deleted");
        reject("Not Deleted");
    });
}
openFile()
    .then(function () { return readFile()
    .then(function () { return deleteFile()
    .then(function () { return console.log("Nice! Nice! Nice! Nice! Nice! Nice!"); })
    .catch(function (frj) { return console.log(frj); }); })
    .catch(function (frj) { return console.log(frj); }); })
    .catch(function (frj) { return console.log(frj); });
Promise.all([openFile(), readFile(), deleteFile()]).then().catch(); //Executa todas as funções em paralelo
Promise.race([openFile(), readFile(), deleteFile()]).then().catch(); //Executa todas as funções em paralelo e, no primeiro sucesso, já chama o .then()
