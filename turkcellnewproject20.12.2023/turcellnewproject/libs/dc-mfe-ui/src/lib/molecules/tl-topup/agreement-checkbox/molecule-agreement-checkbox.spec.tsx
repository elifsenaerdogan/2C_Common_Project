import { render } from '@testing-library/react';

import { MoleculeAgreementCheckbox } from '@molecules';

describe('AgreementCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeAgreementCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
