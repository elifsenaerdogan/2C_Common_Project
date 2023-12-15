import { render } from '@testing-library/react';

import AtomInfo from './atom-info';

describe('AtomInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomInfo />);
    expect(baseElement).toBeTruthy();
  });
});
