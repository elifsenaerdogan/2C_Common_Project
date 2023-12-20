import { render } from '@testing-library/react';

import TransactionSummary from './transaction-summary';

describe('TransactionSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TransactionSummary />);
    expect(baseElement).toBeTruthy();
  });
});
