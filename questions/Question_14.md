# 14

**Explain and demonstrate User-defined Callback Functions (functions that take a callback)**

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

**Explain the concept Function Closures**
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

**Explain how we can get typescript code-completion for external imports.**  
Check package.json! 
@types/node-fetch

---

**Explain shortly about GraphQL, its purpose and some of its use cases**  

**In an Apollo-based React Component, demonstrate how to perform GraphQL Queries, including:**
**- Explain the purpose of ApolloClient and the ApolloProvider component**
**- Explain the purpose of the gql-function (imported from graphql-tag)**
**- Explain Custom Hooks used by your Client Code**
**- Explain and demonstrate the caching features built into Apollo Client (Feel free to skip this)**
**- Demonstrate how to perform GraphQL Mutations?**


OR

Your Presentation related to React Native
