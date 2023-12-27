import { render } from '@testing-library/react';

import { MoleculeFastActions } from './molecule-fast-actions';

describe('QuickTransactions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeFastActions />);
    expect(baseElement).toBeTruthy();
  });
});
