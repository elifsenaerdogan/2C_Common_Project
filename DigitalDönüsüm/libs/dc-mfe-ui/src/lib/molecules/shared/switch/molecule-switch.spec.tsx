import { render } from '@testing-library/react';
import {MoleculeSwitch} from "@molecules";



describe('MoleculeSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeSwitch label="Switch"/>);
    expect(baseElement).toBeTruthy();
  });
});
