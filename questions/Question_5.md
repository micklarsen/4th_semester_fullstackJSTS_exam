# 5

Explain the differences between **Java and JavaScript** and Java and node. Topics you could include:
- that Java is a compiled language and JavaScript a scripted language
- Java is both a language and a platform
- General differences in language features.
- Blocking vs. non-blocking

Provide a number of examples to demonstrate the benefits of using **TypeScript**, including,**types, interfaces, and generics**

Explain the two strategies for improving JavaScript: **Babel** and ES6 (es2015) + ES-Next, versus **Typescript**. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

---

Explain, using relevant examples, the Express concept; **middleware**.  
Middleware in express takes incoming requests, does something to them and passes them on to the next middleware in the chain before returning the request.

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


