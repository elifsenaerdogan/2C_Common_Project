import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import AtomInput from './atom-input';

describe('AtomInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomInput />);
    expect(baseElement).toBeTruthy();
    cleanup()
  });
});
