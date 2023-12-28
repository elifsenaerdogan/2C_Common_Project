import { render } from '@testing-library/react';

import OrderBox from './molecule-order-box';

describe('OrderBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderBox />);
    expect(baseElement).toBeTruthy();
  });
});
