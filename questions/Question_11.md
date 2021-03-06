# 11

**Explain and demonstrate, how to implement your own events, how to emit events and how to listen for such events**  
```javascript
const EventEmitter = require("events");

class DOS_Detector extends EventEmitter {
  constructor(timeValue) {
    // Threshold
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

**Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**  
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

**Provide examples with es-next, running in a browser, using Babel and Webpack**  
BABEL  
P1W4EX

---

**Explain the purpose of mocha, chai, supertest and nock**  
- Mocha as a test framework for running tests
- Chai as a library for assertions
- Supertest to test HTTP assertions and requests. Supertest will even start a test server for you!
- Nock for HTTP Server mocking to catch outgoing requests and return a defined mock response.

**Explain, using a relevant example, a full JavaScript/TypeScript backend including relevant test cases to test the REST-API (not on the production database)**  
asd

OR

Your Presentation related to React Native
