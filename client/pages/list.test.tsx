import * as ApolloClient from '@apollo/client';
import sinon from 'sinon';
import { act, fireEvent, render, RenderResult } from '../utils/test-utils';
import List from './list';
import { Person } from '../components/Card';

describe('list', () => {
  const fakePerson: Person = {
    name: 'fake name',
    email: 'fake email',
    address: 'fake address',
    phone: 'fake phone',
  };

  let wrapper: RenderResult;
  let useQueryStub: sinon.SinonStub;
  let refetchStub: sinon.SinonStub;

  beforeEach(() => {
    refetchStub = sinon.stub();
    useQueryStub = sinon
      .stub(ApolloClient, 'useQuery')
      .returns(({ refetch: refetchStub } as unknown) as ApolloClient.QueryResult);
    wrapper = render(<List />);
  });

  afterEach(() => {
    sinon.restore();
  });

  const completeQuery = (stub: sinon.SinonStub, data: Person[]): void => {
    const { onCompleted }: { onCompleted: (props: { list: Person[] }) => void } = stub.args[stub.args.length - 1][1];
    act(() => {
      onCompleted({ list: data });
    });
  };

  it('renders a default loading state', () => {
    expect(wrapper.getByText('Loading')).toBeDefined();
  });

  it('renders cards after query completes', () => {
    completeQuery(useQueryStub, [fakePerson]);

    expect(wrapper.getByText('Load more cards')).toBeDefined();
    Object.values(fakePerson).forEach((value: string) => {
      expect(wrapper.getByText(value)).toBeDefined();
    });
  });

  it('fetches more cards after pressing the button', () => {
    completeQuery(useQueryStub, [fakePerson]);

    const button = wrapper.getByText('Load more cards');
    fireEvent.click(button);

    expect(refetchStub.callCount).toEqual(1);
  });
});
