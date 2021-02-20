import * as ApolloClient from '@apollo/client';
import sinon from 'sinon';
import { render, RenderResult } from '../utils/test-utils';
import Card from './Card';

describe('Card', () => {
  it('defaults to loading state', () => {
    // const useQueryStub = sinon.stub(ApolloClient, 'useQuery');
    // useQueryStub.returns({ loading: true } as ApolloClient.QueryResult);
    // const { getByText }: RenderResult = render(<Card {...{}} />);
    // expect(getByText('Loading')).toBeDefined();
  });
});
