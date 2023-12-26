import { render } from '@testing-library/react';

import MoleculesStaticCard from './molecules-static-card';

describe('MoleculesStaticCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculesStaticCard />);
    expect(baseElement).toBeTruthy();
  });
});
