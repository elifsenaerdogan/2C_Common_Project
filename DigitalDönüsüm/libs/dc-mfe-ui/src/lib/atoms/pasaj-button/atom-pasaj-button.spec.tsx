import { render } from '@testing-library/react';

import AtomPasajButton from './atom-pasaj-button';

describe('AtomPasajButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomPasajButton />);
    expect(baseElement).toBeTruthy();
  });
});
