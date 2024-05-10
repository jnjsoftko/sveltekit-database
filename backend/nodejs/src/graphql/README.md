
```sh
# macos
cd /Users/youchan/Dev/Jnj-soft/Playground/nodejs/sveltekit-database/backend/nodejs/src/graphql
node --watch index.js
```

http://localhost:5001/

```gql
{
  allUsers {
    name
    email
  }
}

{
  userByName(name: "태백한의원") {
    email
  }
}
```