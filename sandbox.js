const myPromise = (txt, delay) => new Promise(function (resolve, reject) {
    setTimeout(function () {
        const err = true;
        if (!err) {
            return reject(new Error("Feeeejl"));
        }
        resolve("Hello " + txt);
    }, delay);
});

const results = [];

myPromise("Nummer 1", 2000)
    .then((msg) => {
        results.push(msg);
        // throw new Error("Feeejl") //Simuler fejl med throw
        return myPromise("Nummer 2", 1000);
    })
    .then((msg) => {
        results.push(msg);
        return myPromise("Nummer 3", 500);
    })
    .then((msg) => results.push(msg))
    .catch((e) => {
        console.log("In catch " + e);
    })
    .finally(() => console.log(results.join(", ")));