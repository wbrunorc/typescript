let promise = new Promise((resolve, reject) => {
    let isOpened: boolean = true;
    if (isOpened)
        resolve("Opened");
    reject("Not Opened");
});
// promise.then((fromResolve) => {
//     console.log(fromResolve);
// }).catch((fromReject) => {
//     console.log(fromReject);
// })

function openFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        let isOpened: boolean = true;
        if (isOpened)
            resolve("Opened");
        reject("Not Opened");
    });
}

function readFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        let isRead: boolean = true;
        if (isRead)
            resolve("Read");
        reject("Not Read");
    });
}

function deleteFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        let isDeleted: boolean = false;
        if (isDeleted)
            resolve("Deleted");
        reject("Not Deleted");
    });
}

openFile()
    .then(() => readFile()
        .then(() => deleteFile()
            .then(() => console.log("Nice! Nice! Nice! Nice! Nice! Nice!"))
            .catch((frj) => console.log(frj)))
        .catch((frj)=> console.log(frj)))
    .catch((frj) => console.log(frj));  


Promise.all([openFile(), readFile(), deleteFile()]).then().catch(); //Executa todas as funções em paralelo
Promise.race([openFile(), readFile(), deleteFile()]).then().catch(); //Executa todas as funções em paralelo e, no primeiro sucesso, já chama o .then()