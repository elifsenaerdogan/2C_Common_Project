import { render } from '@testing-library/react';
import SwitchButtons from './switch-buttons';

import { MoleculePackageCard } from './molecule-package-card';

describe('PackageCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculePackageCard />);
  
describe('SwitchButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwitchButtons />);
    expect(baseElement).toBeTruthy();
  });
})}
