import { render } from '@testing-library/react';

import AtomCheckoutInfoText from './atom-checkout-info-text';

describe('AtomCheckoutInfoText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomCheckoutInfoText />);
    expect(baseElement).toBeTruthy();
  });
});
