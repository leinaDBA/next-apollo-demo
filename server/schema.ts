import { gql } from 'apollo-server-express';
import faker from 'faker';

export const typeDefs = gql`
  type Query {
    name: String
  }
`;

export const resolvers = {
  Query: {
    name: (): string => faker.name.findName(),
  },
};
