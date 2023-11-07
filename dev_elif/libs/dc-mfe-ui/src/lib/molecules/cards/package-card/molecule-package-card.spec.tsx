import { render } from '@testing-library/react';

<<<<<<<< HEAD:src/lib/molecules/cards/package-card/molecule-package-card.spec.tsx
import { PackageCard } from './molecule-package-card';

describe('PackageCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackageCard />);
========
import SwitchButtons from './switch-buttons';

describe('SwitchButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwitchButtons />);
>>>>>>>> develop:src/lib/header-footer/header/nav/mobile/footer/switch-buttons/switch-buttons.spec.tsx
    expect(baseElement).toBeTruthy();
  });
});
