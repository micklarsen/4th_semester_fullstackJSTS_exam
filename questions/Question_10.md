# 10

**Explain, generally, what is meant by a NoSQL database.**  
- Ikke relationel database, dvs. ingen rows/columns
- Ingen fastlagte column regler
- Kan være document style m. json ligesom MongoDB

(feel free to combine the following questions into one)  

**Explain, using relevant examples, how to test JavaScript/Typescript Backend Code, relevant packages (Mocha, Chai etc.) and how to test asynchronous code.**  
asd

**Explain, using a sufficient example a strategy for how to test a REST API. If your system includes authentication and roles explain how you test this part.**  
asd

---

**Explain shortly about GraphQL, its purpose and some of its use cases**  
- Effective, query language that prevents under- and over fetching
- A single endpoint is called
- Can be used as stand-alone API or to "Collect" multiple REST api's in one GraphQL endpoint.


**Explain shortly about GraphQL Schema Definition Language, and provide examples of schemas you have defined.**  
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

**Explain the Concept of a Resolver function, and provide a number of simple examples of resolvers you have implemented in a GraphQL Server.**  
A resolver is a function that is responsible for populating the data for a single field in the schema.  
The fields in the schema needs resolver functions that each contain arguments and execution contexts (The latter is often the request object).  

An example schema could look like this: 
```sdl
type Query{
      numberSix: Int! #Should always return the number 6
      numberSeven: Int! #Should always return the number 7
}
```

We need to define resolvers for both fields of the root `Query` type so that they always return 6 and 7 when queried. 
The resolver definitions would look like this: 

```
const resolvers = {
      Query: {
            numberSix(){
                  return 6;
            },
            numberSeven(){
                  return 7;
            }
      }
};
```
All your servers resolvers should be defined in a single javascript object named `resolvers`. This object is called the `Resolver map`,

For handling arguments we could define a schema like this: 

```
type User{
      id: ID!
      name: String
}

type Query{
      user(id: ID!): User
}
```
Here, we want to be able to query the user field by its ID.
To do this, our server needs access to user data (We'll assume it's in a hardcoded array for this example)
```javascript
const users = [
      {
            id: '1',
            name: 'John'
      },
      {
            id: '2',
            name: 'Pochahontas'
      }
];
```

The resolvers would look like this:

```
const resolvers  = {
      Query: {
            user(parent, args, context, info){
                  return users.find(user => user.id === args.id);
            }
      }
}
```

**Provide a number of examples demonstrating; creating, updating and deleting with Mutations. You should provide examples running in a Sandbox/playground AND/OR examples executed in an Apollo Client.**  
STARTCODE
