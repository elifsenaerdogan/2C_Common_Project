import { render } from '@testing-library/react';

import AtomComplexRadioButton from './atom-complex-radio-button';

describe('AtomComplexRadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomComplexRadioButton />);
    expect(baseElement).toBeTruthy();
  });
});
