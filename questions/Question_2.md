# 2

**Explain some **Pros & Cons** in using Node.js + Express to implement your Backend compared to a strategy using, for example, **Java/JAX-RS/Tomcat**

**- We can keep the stack to one programming language**  
**- Way less architecture, dependencies, syntaxes etc.**  
**- Easy way to deploy PWA and even desktop applications with electron.js**  

**Explain, using relevant examples, the Express concept; middleware.**  
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

**Explain a setup for Express/Node/Test/Mongo-DB/GraphQL development with Typescript. Focus on how it uses Mongo-DB (how secret values are handled, how connections (production or test) are passed on to relevant places in code, and if used, how authentication and authorization is handled**  
Check the start code.

<br>

**Explain shortly about GraphQL, its purpose and some of its use cases**  
asd

**Explain shortly about GraphQL’s type system and some of the benefits we get from this**  
GraphQL is a strongly typed language. Type System defines various data types that can be used in a GraphQL application. 

```graphql
    type Query {
        getFriend(id: ID): Friend
        allFriends : [Friend]!
    }
```
Mutation Entry point for data manipulation ( post, put ).
```graphgl
    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
```
```graphgl
Enum Useful in a situation where you need the user to pick from a prescribed list of options ( Gender ).

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
```

**Explain shortly about GraphQL Schema Definition Language, and provide examples of schemas you have defined**  
```graphql
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        role: String
    }
     type Query {
        getAllFriends : [Friend]!
        getAllFriendsProxy: [Friend]!
        getFriendByEmail(input: String): Friend
        getFriendById(input: String): Friend
    }
    input FriendInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(email: String, input: FriendEditInput): Friend
        deleteFriend(id: ID!): String
    }
```

**Provide a number of examples demonstrating; creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.**  
- GraphQL startes i app.ts
- Se schema.ts
- Se resolver.ts
- Apollo client i Lynda
- Apollo client forbindes til REACT med apolloprovider component og wrapper vores react app. Så skal vi ikke smide props med rundt

Klienten ser sådan ud: 
```javascript
client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
```