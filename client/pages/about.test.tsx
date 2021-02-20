import { render, RenderResult } from '../utils/test-utils';
import About from './about';

describe('about', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<About />);
  });

  it('renders correctly', () => {
    expect(wrapper.getByText('About Page')).toBeDefined();
    expect(wrapper.getByText('Go Back')).toBeDefined();
  });

  it('can navigate back', () => {
    const link = wrapper.getByText('Go Back');
    expect((link as HTMLAnchorElement).href).toEqual('http://localhost/');
  });
});
