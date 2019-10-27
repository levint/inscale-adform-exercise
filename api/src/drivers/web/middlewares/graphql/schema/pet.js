import gql from 'graphql-tag';
import resolveAddPet from '../../../../../implementations/addPet/graphql';
import resolveGetPet from '../../../../../implementations/getPet/graphql';

const typeDefs = gql`
  interface Pet {
    id: ID!
    type: String!
    name: String!
    colour: String!
    age: Int!
    breed: String!
    ownerId: String
  }

  type Dog implements Pet {
    id: ID!
    type: String!
    name: String!
    colour: String!
    age: Int!
    breed: String!
    ownerId: String
  }

  type Cat implements Pet {
    id: ID!
    type: String!
    name: String!
    colour: String!
    age: Int!
    breed: String!
    ownerId: String
  }

  extend type Query {
    GetPet(id: ID!): Pet
  }

  extend type Mutation {
    AddPet(input: AddPetInput!): Pet
  }

  input AddPetInput {
    type: String!
    name: String!
    colour: String!
    age: Int!
    breed: String!
    ownerId: String
  }
`;

const resolvers = {
  Pet: {
    __resolveType(obj, context, info) {
      if (obj.type === 'DOG') {
        return 'Dog';
      }
      if (obj.type === 'CAT') {
        return 'Cat';
      }
      return null;
    },
  },
  Query: {
    GetPet: resolveGetPet,
  },
  Mutation: {
    AddPet: resolveAddPet,
  },
};

export { typeDefs, resolvers };
