import { render } from '@testing-library/react';

import MoleculeProfilMenu from './molecule-profil-menu';

describe('MoleculeProfilMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeProfilMenu />);
    expect(baseElement).toBeTruthy();
  });
});
