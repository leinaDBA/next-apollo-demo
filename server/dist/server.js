"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema");
const app = express_1.default();
const path = '/graphql';
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: schema_1.resolvers });
server.applyMiddleware({ app, path });
app.listen(5000, () => {
    console.log(`Graphql Server started on: http://localhost:${5000}`);
});
//# sourceMappingURL=server.js.map