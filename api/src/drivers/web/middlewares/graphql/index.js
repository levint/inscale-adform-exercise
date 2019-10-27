import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';

const graphQLServer = new ApolloServer({ typeDefs, resolvers });

export function registerGraphQLMiddleware(app) {
  graphQLServer.applyMiddleware({ app });
}
