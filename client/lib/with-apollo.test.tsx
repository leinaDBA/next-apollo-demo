import sinon from 'sinon';
import * as ApolloLink from 'apollo-link-http';

describe('with-apollo', () => {
  it('creates a client with the correct uri', () => {
    const apolloLinkStub = sinon.stub(ApolloLink, 'createHttpLink');
    require('./with-apollo');
    expect(apolloLinkStub.args[0][0]).toEqual({ uri: 'http://localhost:5000/graphql' });
  });
});
