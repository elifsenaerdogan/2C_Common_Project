import { render } from '@testing-library/react';

import PriceBoxContainer from './molecule-price-box-container';

describe('PriceBoxContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PriceBoxContainer
        data={[
          { id: 1, price: 50, isActive: false },
          { id: 2, price: 20, isActive: true },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
