import merge from 'lodash.merge';
import { typeDefs as Root, resolvers as rootResolvers } from './root';
import { typeDefs as Owner, resolvers as ownerResolvers } from './owner';
import { typeDefs as Pet, resolvers as petResolvers } from './pet';

const typeDefs = [Root, Owner, Pet];
const resolvers = merge(rootResolvers, ownerResolvers, petResolvers);

export { typeDefs, resolvers };
