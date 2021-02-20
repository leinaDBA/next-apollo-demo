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
    list: [List]
  }
  type List {
    name: String
    address: String
    email: String
    phone: String
  }
`;
exports.resolvers = {
    Query: {
        list: () => [...Array(20).keys()].map(() => ({
            name: faker_1.default.name.findName(),
            address: faker_1.default.address.streetAddress(),
            email: faker_1.default.internet.email(),
            phone: faker_1.default.phone.phoneNumber(),
        })),
    },
};
//# sourceMappingURL=schema.js.map