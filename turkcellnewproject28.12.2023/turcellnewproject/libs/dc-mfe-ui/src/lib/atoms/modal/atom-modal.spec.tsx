import { render } from '@testing-library/react';

import Modal from './atom-modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal />);
    expect(baseElement).toBeTruthy();
  });
});
