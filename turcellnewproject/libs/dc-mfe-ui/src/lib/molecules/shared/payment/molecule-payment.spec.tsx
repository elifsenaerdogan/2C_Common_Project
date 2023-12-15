import { render } from '@testing-library/react';

import MoleculePayment from './molecule-payment';

describe('MoleculePayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculePayment />);
    expect(baseElement).toBeTruthy();
  });
});
