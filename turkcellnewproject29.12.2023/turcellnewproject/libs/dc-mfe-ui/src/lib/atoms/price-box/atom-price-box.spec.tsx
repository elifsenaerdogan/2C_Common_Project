import { render } from '@testing-library/react';
import { AtomPriceBox } from '@atoms';

describe('PriceBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomPriceBox />);
    expect(baseElement).toBeTruthy();
  });
});
