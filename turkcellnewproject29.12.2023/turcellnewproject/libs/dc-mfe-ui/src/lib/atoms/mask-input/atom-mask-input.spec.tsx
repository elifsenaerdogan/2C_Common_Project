import { render } from '@testing-library/react';

import AtomMaskInput from './atom-mask-input';

describe('AtomMaskInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomMaskInput mask='(XXX)-XXX-XX-XX' />);
    expect(baseElement).toBeTruthy();
  });
});
