import * as ApolloClient from '@apollo/client';
import sinon from 'sinon';
import { render, RenderResult } from '../utils/test-utils';
import Name from './Name';

describe('Name', () => {
  it('defaults to loading state', () => {
    const useQueryStub = sinon.stub(ApolloClient, 'useQuery');
    useQueryStub.returns({ loading: true } as ApolloClient.QueryResult);
    const { getByText }: RenderResult = render(<Name />);
    expect(getByText('Loading')).toBeDefined();
  });
});
