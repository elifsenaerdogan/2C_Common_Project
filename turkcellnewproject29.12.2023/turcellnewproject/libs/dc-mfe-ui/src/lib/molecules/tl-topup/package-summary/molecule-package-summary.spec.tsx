import { render } from '@testing-library/react';

import PackageSummary from './molecule-package-summary';

describe('PackageSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackageSummary />);
    expect(baseElement).toBeTruthy();
  });
});
