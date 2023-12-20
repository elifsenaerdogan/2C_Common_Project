import { render } from '@testing-library/react';

import AtomInfoBox from './atom-info-box';

describe('AtomInfoBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomInfoBox />);
    expect(baseElement).toBeTruthy();
  });
});
