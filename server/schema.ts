import { gql } from 'apollo-server-express';
import faker from 'faker';

export const typeDefs = gql`
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

type List = {
  name: string;
  address: string;
  email: string;
  phone: string;
};

export const resolvers = {
  Query: {
    list: (): List[] =>
      [...Array(20).keys()].map(() => ({
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      })),
  },
};
