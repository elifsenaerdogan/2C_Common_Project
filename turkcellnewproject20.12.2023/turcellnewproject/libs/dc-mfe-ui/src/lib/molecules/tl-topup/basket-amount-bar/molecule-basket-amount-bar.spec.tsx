import { render } from '@testing-library/react';

import BasketAmountBar from './molecule-basket-amount-bar';

describe('BasketAmountBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasketAmountBar />);
    expect(baseElement).toBeTruthy();
  });
});
