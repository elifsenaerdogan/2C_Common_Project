import { render } from '@testing-library/react';

import SelectBox from './molecule-select-box';

describe('SelectBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectBox />);
    expect(baseElement).toBeTruthy();
  });
});
