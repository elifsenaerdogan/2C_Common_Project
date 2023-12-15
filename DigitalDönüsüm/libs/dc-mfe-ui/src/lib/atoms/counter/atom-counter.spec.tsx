import { render } from '@testing-library/react';

import AtomCounter from './atom-counter';

describe('Counter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomCounter />);
    expect(baseElement).toBeTruthy();
  });
});
