import { render } from '@testing-library/react';

import CardExtraInfo from './molecule-card-extra-info';

describe('CardExtraInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardExtraInfo />);
    expect(baseElement).toBeTruthy();
  });
});
