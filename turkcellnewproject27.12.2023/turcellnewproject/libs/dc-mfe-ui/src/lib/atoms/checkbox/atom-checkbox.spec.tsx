import { render } from '@testing-library/react';
import { AtomCheckbox } from '@atoms';

describe('PriceBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
