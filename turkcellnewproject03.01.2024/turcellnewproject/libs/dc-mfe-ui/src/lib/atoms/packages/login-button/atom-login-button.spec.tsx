import { render } from '@testing-library/react';

import AtomLoginButton from './atom-login-button';

describe('AtomLoginButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomLoginButton />);
    expect(baseElement).toBeTruthy();
  });
});
