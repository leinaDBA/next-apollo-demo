"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const faker_1 = __importDefault(require("faker"));
exports.typeDefs = apollo_server_express_1.gql `
  type Query {
    name: String
  }
`;
exports.resolvers = {
    Query: {
        name: () => faker_1.default.name.findName(),
    },
};
//# sourceMappingURL=schema.js.map