import { render } from '@testing-library/react';
import { Modal } from './types/modal-enums';
import MoleculeModal from './molecule-modal';

describe('MoleculeModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MoleculeModal type={Modal.INFO} buttonText="OK" />
    );
    expect(baseElement).toBeTruthy();
  });
});
