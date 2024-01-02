import { render } from '@testing-library/react';

import AtomFilterListField from './atom-filter-list-field';

describe('AtomFilterListField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomFilterListField />);
    expect(baseElement).toBeTruthy();
  });
});
