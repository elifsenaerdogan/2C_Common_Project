import { render } from '@testing-library/react';

import CreditCard from './molecule-credit-card';

describe('CreditCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditCard />);
    expect(baseElement).toBeTruthy();
  });
});
