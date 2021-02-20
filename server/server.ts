import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';

const app = express();
const path = '/graphql';

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path });

app.listen(5000, () => {
  console.log(`Graphql Server started on: http://localhost:${5000}`);
});
