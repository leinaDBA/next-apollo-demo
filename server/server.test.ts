import sinon from 'sinon';

describe('server', () => {
  let expressListenStub: sinon.SinonStub;
  let applyMiddlewareStub: sinon.SinonStub;

  beforeAll(async () => {
    expressListenStub = sinon.stub();
    applyMiddlewareStub = sinon.stub();

    jest.doMock('express', () => sinon.stub().callsFake(() => ({ listen: expressListenStub })));
    jest.doMock('apollo-server-express', () => ({
      gql: sinon.stub(),
      ApolloServer: sinon.stub().callsFake(() => ({ applyMiddleware: applyMiddlewareStub })),
    }));
    await import('./server');
  });

  it('uses the graphql path', () => {
    expect(applyMiddlewareStub.args[0][0].path).toEqual('/graphql');
  });

  it('should start the server on 5000', () => {
    expect(expressListenStub.args[0][0]).toEqual(5000);
  });
});
