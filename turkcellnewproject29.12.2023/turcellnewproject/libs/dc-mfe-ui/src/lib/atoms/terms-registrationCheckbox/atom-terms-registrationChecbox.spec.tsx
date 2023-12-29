import { render } from '@testing-library/react';
import { AtomTermsRegistrationCheckbox } from '@atomss';

describe('PriceBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomTermsRegistrationCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
