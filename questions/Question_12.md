# 12

**Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**  
asd

**Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.**  
JavaScript doesn't require us to work directly with threads but uses web-api's (In node, provided by googles V8 environment).  
Check out [Loupe](http://latentflip.com/loupe/) for an illustrated example.

**Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)** 
- Engine: Google V8
- Engine: SpiderMonkey for Mozilla firefox
- Environment: Browser environment powered by V8 (Google chrome)
- Environment: NodeJS powered by V8 with without the DOM and more. (Install packages with npm) 

**Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.**
asd

---

**Demonstrate how you have set up sample data for your application testing**
asd

**Explain the purpose of mocha, chai, supertest and nock**  
- Mocha as a test framework for running tests
- Chai as a library for assertions
- Supertest to test HTTP assertions and requests. Supertest will even start a test server for you!
- Nock for HTTP Server mocking to catch outgoing requests and return a defined mock response.

**Explain, using a sufficient example, how to mock and test endpoints that relies on data fetched from external endpoints**  
asd

**Explain, using a sufficient example a strategy for how to test a REST API. If your system includes authentication and roles explain how you test this part.**  
asd

