import { render } from '@testing-library/react';

import ProfileMenuCard from './atom-profile-menu-cart';

describe('ProfileMenuCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileMenuCard />);
    expect(baseElement).toBeTruthy();
  });
});
