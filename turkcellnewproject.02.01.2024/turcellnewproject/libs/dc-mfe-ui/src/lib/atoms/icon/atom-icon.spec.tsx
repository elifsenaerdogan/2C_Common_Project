import { render } from '@testing-library/react';
import AtomIcon from './atom-icon';
import { IconsCancel } from '@others/icons';
describe('Icon Item', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomIcon icon={<IconsCancel />} />);
    expect(baseElement).toBeTruthy();
  });
});
