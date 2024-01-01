import { render } from '@testing-library/react';

import AtomHeaderCounter from './atom-header-counter';

describe('AtomHeaderCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomHeaderCounter />);
    expect(baseElement).toBeTruthy();
  });
});
