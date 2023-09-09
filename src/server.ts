import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { mergeTypeDefs } from '@graphql-tools/merge';
import bookResolvers from './resolvers/book.resolvers.js';
import userResolvers from './resolvers/user.resolvers.js';
import bookTypeDefs from './typedefs/book.typedefs.js';
import userTypeDefs from './typedefs/user.typedefs.js';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const schemas = [bookTypeDefs, userTypeDefs];
const typeDefs = mergeTypeDefs(schemas);

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      ...bookResolvers.Query,
      ...userResolvers.Query,
    },
    // Mutation: {},
    // Subscription: {},
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);