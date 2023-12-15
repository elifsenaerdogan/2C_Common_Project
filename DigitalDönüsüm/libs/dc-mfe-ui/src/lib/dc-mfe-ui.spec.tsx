import { render } from '@testing-library/react';

import DcMfeUi from './dc-mfe-ui';

describe('DcMfeUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DcMfeUi />);
    expect(baseElement).toBeTruthy();
  });
});
