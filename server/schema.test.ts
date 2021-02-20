import { typeDefs, resolvers } from './schema';
import { DefinitionNode } from 'graphql';

type nameValue = {
  name: { value: string };
};

describe('schema', () => {
  it('should have a resolver for every query', () => {
    const queries = typeDefs.definitions.reduce((acc: string[], next: DefinitionNode) => {
      const {
        // eslint-disable-next-line @typescript-eslint/typedef
        name: { value },
        fields,
      }: nameValue & { fields: nameValue[] } = (next as unknown) as nameValue & { fields: nameValue[] };

      if (value === 'Query') {
        // eslint-disable-next-line @typescript-eslint/typedef
        fields.forEach(({ name: { value } }: nameValue) => {
          acc.push(value);
        });
      }

      return acc;
    }, []);
    expect(queries.length).toEqual(Object.entries(resolvers.Query).length);

    queries.forEach((query: string) => {
      expect((resolvers.Query as { [index: string]: unknown })[query] as unknown).toBeDefined();
    });
  });
});
