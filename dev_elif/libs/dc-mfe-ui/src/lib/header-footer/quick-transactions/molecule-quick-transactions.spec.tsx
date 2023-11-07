import { render } from '@testing-library/react';

import MoleculeQuickTransactions from './molecule-quick-transactions';

describe('QuickTransactions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeQuickTransactions  />);
    expect(baseElement).toBeTruthy();
  });
});
