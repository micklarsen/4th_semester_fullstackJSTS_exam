# 4

**Explain, generally, what is meant by a **NoSQL** database.**  

- Ikke relationel database, dvs. ingen rows/columns
- Ingen fastlagte column regler
- Kan være document style m. json ligesom MongoDB

**Demonstrate, using either a REST-API (or a GraphQL-API), designed by you, how to perform all CRUD operations on a MongoDB**  
asd

**Explain a setup for Express/Node/Test/Mongo-DB/GraphQL development with Typescript. Focus on how it uses Mongo-DB (how secret values are handled, how connections (production or test) are passed on to relevant places in code, and if use, how authentication and authorization is handled**  
Check the start code.

---

**Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events**

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

**Explain using sufficient code examples the concepts**  
**- Variable/function-hosting**  
asd

**- Closures**  
Variables can belong to local or global scope.  
Global variables can be made "Local" (Private) with closures.

Let's check the counter example:

```javascript
function myFunctionA() {
  let myVariableA = "A";

  function myFunctionB() {    //Den her funktion kigger i sit parent scope
    console.log(myVariableA);
  }
  return myFunctionB;
}

var returnClosure = myFunctionA();
returnClosure();
```

OR

Your Presentation related to React Native
