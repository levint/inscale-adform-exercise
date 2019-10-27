import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

export { typeDefs, resolvers };
