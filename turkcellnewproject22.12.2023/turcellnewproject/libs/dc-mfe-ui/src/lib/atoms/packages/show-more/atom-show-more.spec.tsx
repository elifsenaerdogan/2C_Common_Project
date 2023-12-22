import { render } from '@testing-library/react';

import AtomShowMore from './atom-show-more';

describe('AtomShowMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomShowMore />);
    expect(baseElement).toBeTruthy();
  });
});
