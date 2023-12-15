import { render } from '@testing-library/react';
import { AtomTextarea } from '@atoms';

describe('PriceBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomTextarea />);
    expect(baseElement).toBeTruthy();
  });
});
