import { render } from '@testing-library/react';

import NonLogin from './molecule-non-login';

describe('NonLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NonLogin />);
    expect(baseElement).toBeTruthy();
  });
});
