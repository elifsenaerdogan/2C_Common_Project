import { render } from '@testing-library/react';

import AtomNavProfile from './atom-nav-profile';

describe('AtomNavProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomNavProfile />);
    expect(baseElement).toBeTruthy();
  });
});
