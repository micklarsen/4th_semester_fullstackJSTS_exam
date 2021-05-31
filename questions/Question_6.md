# 6

**Explain about promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**
**- Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**  

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


**Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**
**Provide examples to demonstrate**
**- Why this often is the preferred way of handling promises**  
**- Error handling with async/await**  
**- Serial or parallel execution with async/await.**  

---


**Provide a number of GraphQL examples demonstrating; creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.**  
WITHOUT APOLLO

A fetch example without using apollo could be performed like this:

```typescript
async getAllFriendsV2(): Promise<Array<IFriend>> {
      const users: Array<any> = await this.friendCollection.find(
      {},
      { projection: { password: 0 } }
      ).toArray();
      const allFriends = users.map(user => this.convertObjectIdToId(user))
      return allFriends as Array<IFriend>
}
```
In this example we use projections to omit the (hashed) passwords from mongodb.

USING APOLLO CLIENT

First, we import apollo in app.tsx and prepare the client:

```typescript
  client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
  client.resetStore();
}
makeClient()
We are then able to use the client by wrapping the entire router with the client: <ApolloProvider client={client}>
```

When using Apollo client with react, we can use the useQuery hook.

In this example we import the gql function to parse our query string into a query document. The apollo client contains the "Loading, error and data" properties we can work with. The data property can be used to render results on the client side.

```typescript 
import { gql, useQuery } from "@apollo/client";

const ALL_FRIENDS = gql`
  {
    getAllFriends {
      id
      firstName
      lastName
      email
      role
    }
  }
`;

const { loading, error, data, startPolling } =
  useQuery < FriendData > (ALL_FRIENDS, { fetchPolicy: "cache-and-network" });

if (loading) return <p>Loading...</p>;

if (error) {
  console.log("---->", error);
  console.log("--2->", error.graphQLErrors);
  console.log("--3->", error.graphQLErrors[0]);
  console.log("--4->", error.networkError);
  console.log("--5->", error.message);
  console.log("--6->", error.name);
  console.log("--7->", error.extraInfo);

  console.log("-##->", JSON.stringify(error.toString()));
}
if (error) return <p>{error.toString()}</p>;

return (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.getAllFriends.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.firstName}</td>
              <td>{f.lastName}</td>
              <td>{f.email}</td>
              <td>{f.role}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
```



**In an Apollo-based React Component, demonstrate how to perform GraphQL Queries,  including:**
**- Explain the purpose of ApolloClient and the ApolloProvider component**  
Explain the purpose of ApolloClient and the ApolloProvider component
Apollo Client is a comprehensive state management library for JavaScript that enables us to manage both local and remote data with GraphQL.
We can use it to fetch, cache, and modify application data, all while automatically updating our UI.

**- Explain the purpose of the gql-function (imported from graphql-tag)**  
The gql template literal tag can be used to concisely write a GraphQL query that is parsed into a standard GraphQL AST (Abstract syntax tree). It is the recommended method for passing queries to Apollo Client. While it is primarily built for Apollo Client, it generates a generic GraphQL AST which can be used by any GraphQL client.  

**- Explain Custom Hooks used by your Client Code**  
```typescript
  const { loading, error, data, startPolling } = useQuery<FriendData>(
    ALL_FRIENDS,
    { fetchPolicy: "cache-first" }
  )
```

**- In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?**  
asd
