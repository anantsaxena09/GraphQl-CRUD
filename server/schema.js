const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
