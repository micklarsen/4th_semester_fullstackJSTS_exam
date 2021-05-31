# 6

Explain about promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:
- Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel  

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


Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.  
Provide examples to demonstrate 
- Why this often is the preferred way of handling promises
- Error handling with async/await  
- Serial or parallel execution with async/await.

---


Provide a number of GraphQL examples demonstrating; creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.  

In an Apollo-based React Component, demonstrate how to perform GraphQL Queries,  including:
- Explain the purpose of ApolloClient and the ApolloProvider component
- Explain the purpose of the gql-function (imported from graphql-tag)
- Explain Custom Hooks used by your Client Code
- In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?
