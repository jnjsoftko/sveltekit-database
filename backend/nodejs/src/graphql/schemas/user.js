// A schema is a collection of type definitions (hence "typeDefs")
export const userTypeDefs = `#graphql
  type User {
    name: String
    email: String
  }

  type Query {
    allUsers: [User]
    userByName(name: String!): User
  }
`;
