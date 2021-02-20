import { render, RenderResult } from '../utils/test-utils';
import Card, { Person } from './Card';

describe('Card', () => {
  const defaultProps: Person = {
    name: 'person name',
    address: 'person address',
    email: 'person email',
    phone: 'person phone',
  };
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Card {...defaultProps} />);
  });

  it('renders correctly', () => {
    expect(wrapper.getByText(defaultProps.name)).toBeDefined();
    expect(wrapper.getByText(defaultProps.email)).toBeDefined();
    expect(wrapper.getByText(defaultProps.phone)).toBeDefined();
  });
});
