# 1

## Explain the differences between Java and JavaScript and node. Topics you could include:

- Java is a compiled language and JavaScript a scripted language
- Java is both a language and a platform
- JavaScript code runs in a browser environment (Typically, but not with Node!) while - - Java typically runs in the Java Virtual Machine (JVM).
- In Java, programs cannot run without being part of a class.
- Java has a thread based approach to concurrency while JavaScript has an event based approach.

**Explain the JavaScript arrays method reduce**

Homemade version:

```javascript
let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

Array.prototype.myReducer = function (callback) {
  let accum = 0;
  this.forEach((elem) => {
    accum = callback(accum, elem.age);
  });
  return accum / this.length;
};

console.log(members.myReducer((accu, curr) => accu + curr));
```

Official way according to Mozilla Docs:

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

<br>

**Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**

**- Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**

```javascript
function wait(waitTime) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`Waited for: ${waitTime} ms`);
            resolve();
        }, waitTime)
    );
}

async function serial() {
    console.time("--serial--");
    try {
        await wait(1000);
        await wait(1000);
/*         if (true) {
            throw new Error("Hovsa!");
        } */
        await wait(1000);
    } catch (err) {
        console.log(err);
    }

    console.timeEnd("--serial--");
}

async function parallel() {
    console.time("--parallel--");
    await Promise.all([wait(1000), wait(1000), wait(1000)]);
    console.timeEnd("--parallel--");
}

async function test() {
    await serial();
    console.log("");
    await parallel();
}

test();
```

**- Example(s) that demonstrate how to implement our own promise-solutions.**
**- Example(s) that demonstrate error handling with promises**

```javascript
/* PROMISE ERROR HANDLING */
const makeRequest = () => {
  try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      // .catch((err) => {
      //   console.log(err)
      // })
  } catch (err) {
    console.log(err)
  }
```

```javascript
// Home made promise

const myPromise = (txt, delay) =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      const err = true;
      if (err) {
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
```


<br>

---

**Explain shortly about GraphQL, its purpose and some of its use cases**
- Effective, query language that prevents under- and over fetching
- A single endpoint is called
- Can be used as stand-alone API or to "Collect" multiple REST api's in one GraphQL endpoint.

**What is meant by the terms **over- and under-fetching** in GraphQL, compared to REST**
Over- and underfetching is getting too much or too little data from a fetch (Typically GET) request.  
In REST this means performing more requests when under fetching or recieving too much in repsonse when over fetching. 
This issue is solved with GraphQL where we can specify exactly what we want.


**Provide examples demonstrating **data fetching with GraphQL**. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client**

<br>

OR

Your Presentation related to React Native
