import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import AtomRate from './atom-rate';

describe('AtomRate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomRate />);
    expect(baseElement).toBeTruthy();
    cleanup()
  });
});
