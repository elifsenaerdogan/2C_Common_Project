import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import AtomDatePicker from './atom-date-picker'

describe('AtomDatePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomDatePicker />);
    expect(baseElement).toBeTruthy();
    cleanup()
  });
});
