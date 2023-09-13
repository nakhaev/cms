import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import userResolvers from './user/user.resolvers.js';
import userTypeDefs from './user/user.typedefs.js';
import accountResolvers from './account/account.resolvers.js';
import accountTypeDefs from './account/account.typedefs.js';
import departmentTypeDefs from './department/department.typedefs.js';
import departmentResolvers from './department/department.resolvers.js';
import clientTypeDefs from './client/client.typedefs.js';
import clientResolvers from './client/client.resolvers.js';
import clientHistoryTypeDefs from './clientHistory/clientHistory.typedefs.js';
import clientHistoryResolvers from './clientHistory/clientHistory.resolvers.js';
import connect from './db.js';

// connect to database
await connect();

const typeDefs = mergeTypeDefs([
  userTypeDefs,
  accountTypeDefs,
  departmentTypeDefs,
  clientTypeDefs,
  clientHistoryTypeDefs
]);

const resolvers = mergeResolvers([
  userResolvers,
  accountResolvers,
  departmentResolvers,
  clientResolvers,
  clientHistoryResolvers
]);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
  
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);