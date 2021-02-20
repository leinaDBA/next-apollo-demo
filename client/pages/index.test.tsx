import { render, RenderResult } from '../utils/test-utils';
import Index from './index';

describe('index', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Index />);
  });

  it('renders correctly', () => {
    expect(wrapper.getByText('Welcome, Please navigate below')).toBeDefined();
    expect(wrapper.getByText('About')).toBeDefined();
    expect(wrapper.getByText('Show list')).toBeDefined();
  });

  it('can navigate to about', () => {
    const link = wrapper.getByText('About');
    expect((link as HTMLAnchorElement).href).toEqual('http://localhost/about');
  });

  it('can navigate to list', () => {
    const link = wrapper.getByText('Show list');
    expect((link as HTMLAnchorElement).href).toEqual('http://localhost/list');
  });
});
