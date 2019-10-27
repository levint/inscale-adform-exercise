import gql from 'graphql-tag';
import { petsDb } from '../../../../../data-access';
import resolveListOwners from '../../../../../implementations/listOwners/graphql';
import resolveGetOwner from '../../../../../implementations/getOwner/graphql';

const typeDefs = gql`
  type Owner {
    id: ID!
    name: String!
    address: String!
    phone: String!
    email: String!
    pets: [Pet!]!
  }

  extend type Query {
    ListOwners: [Owner!]!
    GetOwner(id: ID!): Owner
  }
`;

const resolvers = {
  Owner: {
    pets({ id }) {
      return petsDb.findByOwnerId({ ownerId: id });
    },
  },
  Query: {
    ListOwners: resolveListOwners,
    GetOwner: resolveGetOwner,
  },
};

export { typeDefs, resolvers };
