import { render } from '@testing-library/react';

import HelpRibbon from './help-ribbon';

describe('HelpRibbon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpRibbon />);
    expect(baseElement).toBeTruthy();
  });
});
