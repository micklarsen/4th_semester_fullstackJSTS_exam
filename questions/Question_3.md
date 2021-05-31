# 3

**Explain about the Event Loop in JavaScript, including terms like: blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers**

JavaScript doesn't require us to work directly with threads but uses web-api's (In node, provided by googles V8 environment).  
Check out [Loupe](http://latentflip.com/loupe/) for an illustrated example.

**Explain, using sufficient code examples, the following features in JavaScript (and node):**

**- User-defined Callback Functions (writing functions that take a callback)**

```javascript
let someValue;

function myDisplayer(some) {
  //document.getElementById("demo").innerHTML = some;
  someValue = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
//The DOM element with id "demo" is changed to 10

console.log(someValue);
```

**- How to implement your own events, how to emit events and how to listen for such events**

```javascript
const EventEmitter = require("events");

class DOS_Detector extends EventEmitter {
  constructor(timeValue) { // Threshold
    super();
    this.urls = new Map();
    this.TIME_BETWEEN_CALLS = timeValue;
  }
  addUrl = (url) => {
    const time = new Date().getTime();
    if (this.urls.has(url)) {
      const deltaTime = time - this.urls.get(url);
      if (deltaTime < this.TIME_BETWEEN_CALLS) {
        // First string is what the eventlistener is listening for - they have to match!
        this.emit("DOS Detected", { url: url, timeBetweenCalls: deltaTime });
      }
    }
    this.urls.set(url, time);
  };
}
module.exports.DosDetector = DOS_Detector;


/* EVERYTHING BELOW SHOULD BE ANOTHER FILE - SIMPLIFIED FOR EXAM PURPOSES */

const DosDetector = DOS_Detector; //Simulated import
const ddosDetector = new DosDetector(2000); // Call the constructor on the new obj.

ddosDetector.on("DOS Detected", (arg) => {
  //This string is what the listener is listetning for!
  // Eventlistener with callback
  console.log("Plausible DDOS attack detected", arg);
});

ddosDetector.addUrl("url1");
ddosDetector.addUrl("url2");
ddosDetector.addUrl("url3");

//Simulate requests for same URL within short time period
setTimeout(() => {
  ddosDetector.addUrl("url1");
  ddosDetector.addUrl("url3");
}, 1000);
```

**Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**  
- Code completion
- "Static typing" i modsætning til dynamisk. Det gør at koden bl.a. kan opdate fejl ved det her:

```typescript
function addFive(num) {
    return num + 5
}
//Giver fejl hvis vi prøver at bruge en string som argument
function addFive(num: number) {
    return num + 5
}
```
- Interfaces (Se startkode)
- Generics (Se eksempel)
```
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error
```

---

**Explain shortly about GraphQL, its purpose and some of its use cases**  
asd

**Demonstrate and highlight important parts of a “complete” GraphQL-application using Express and MongoDB on the server-side, and Apollo-Client on the client.**

`C:\Users\Mick\Documents\Datamatiker\4. Semester\Fullstack Javascript\Period 3\Week 2\apollov2`

Complete example with the [fullstack startcode](https://github.com/micklarsen/FullstackTS_Startcode) as the server, and the [Apollo server](https://github.com/micklarsen/4sem_fullstack_js_ts/tree/main/Period%203/Week%202/apollov2) as a React frontend. 

**BACKEND**
The most important parts of the backend is: 
- To import and integrate express with relevant middleware such as auth, debugging, etc. 
- Setup and configure a server to run everything. In the startcode the server is started in www.ts.
- Setup a facade for communicating with a database such as MongoDB
- Setup routes as API endpoints 
- Setup GraphQL schemas and resolvers to simplify and improve the API

**FRONTEND**
- Setup app.tsx that should contain routes and the apolloprovider & client to handle setup caching.
- Setup html/css for routes and build forms for interacting with an API using components.
- Integrate authentification by using localStorage.

