import { render } from '@testing-library/react';

import AtomButton from './atom-button';

describe('DcMfeUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomButton text='' />);
    expect(baseElement).toBeTruthy();
  });
});
