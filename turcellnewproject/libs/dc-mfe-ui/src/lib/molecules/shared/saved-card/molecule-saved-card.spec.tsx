import { render } from '@testing-library/react';

import MoleculeSavedCard from './molecule-saved-card';

describe('MoleculeSavedCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeSavedCard />);
    expect(baseElement).toBeTruthy();
  });
});
