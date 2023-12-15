import { render } from '@testing-library/react';

import AtomPopularCard from './atom-popular-card';

describe('PopularCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomPopularCard text="" url="" icon="" />);
    expect(baseElement).toBeTruthy();
  });
});
