import { render } from '@testing-library/react';

import { AtomBadgeStatus } from '@atoms';

describe('DcMfeUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomBadgeStatus />);
    expect(baseElement).toBeTruthy();
  });
});
