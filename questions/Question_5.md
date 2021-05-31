# 5

**Explain the differences between **Java and JavaScript** and Java and node. Topics you could include:**  
**- that Java is a compiled language and JavaScript a scripted language**  
**- Java is both a language and a platform**  
**- General differences in language features.**  
**- Blocking vs. non-blocking**  

<br>


**Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, and generics**  
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


**Explain the two strategies for improving JavaScript: **Babel** and ES6 (es2015) + ES-Next, versus **Typescript**. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**  

BABEL  
P1W4EX

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
Babel can be configured using a .babelrc file - eg:

```javascript
{
    "presets": ["@babel/preset-env"]
}
```
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

WEBPACK  
P1W4EX

Webpack is a tool that lets you compile JavaScript modules, also known as module bundler.

Given a large number of files, it generates a single file (or a few files) that run your app.
We can configure webpack to define where output is saved, what plugins to use, tools used in dev environments etc.

Webpack can be configured using a .webpack.config.js file - eg:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

---

**Explain, using relevant examples, the Express concept; **middleware**.  
Middleware in express takes incoming requests, does something to them and passes them on to the next middleware in the chain before returning the request.**

```javascript
app.use(function (req, res, next) {
  req.foo = "bar";
  next();
});
```

In this example "bar" is added to req.foo and next() is called and the request is sent on.

Instead of "Foo" the function could handle logging, authentication, cors and much more.  
In this example, we use a logger to log when the facade is initialized and

```javascript
// Initialize facade using the database set on the application object
router.use(async (req, res, next) => {
  if (!facade) {
    const db = req.app.get("db");
    req.app
      .get("logger")
      .log("info", `Database used: ${req.app.get("db-type")}`);
    facade = new FriendFacade(db);
  }
  next();
});
```

**Explain the purpose of **mocha**, **chai**, **supertest** and **nock** (feel free to combine with the next question**
- Mocha as a test framework for running tests
- Chai as a library for assertions
- Supertest to test HTTP assertions and requests. Supertest will even start a test server for you!
- Nock for HTTP Server mocking to catch outgoing requests and return a defined mock response.

Explain, using relevant examples, your strategy for implementing a **REST-API with Node/Express  + TypeScript** and demonstrate how you have **tested the API**


