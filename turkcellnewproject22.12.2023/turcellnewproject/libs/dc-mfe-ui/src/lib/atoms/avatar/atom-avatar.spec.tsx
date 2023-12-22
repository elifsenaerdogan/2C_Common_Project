import { render } from '@testing-library/react';
import AtomAvatar from './atom-avatar';
describe('Avatar Item', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomAvatar userName="Özgür T." />);
    expect(baseElement).toBeTruthy();
  });
});
