import { render } from '@testing-library/react';

import Accordion from './atom-accordion';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordion />);
    expect(baseElement).toBeTruthy();
  });
});
