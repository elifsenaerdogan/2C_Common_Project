import { render } from '@testing-library/react';

import AvatarUserInfo from './atom-avatar-user-info';

describe('AvatarUserInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarUserInfo />);
    expect(baseElement).toBeTruthy();
  });
});
