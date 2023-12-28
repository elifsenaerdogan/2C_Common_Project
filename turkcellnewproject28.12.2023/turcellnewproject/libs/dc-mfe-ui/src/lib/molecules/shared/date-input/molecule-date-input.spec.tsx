import { render } from '@testing-library/react';

import MoleculeDateInput from "./molecule-date-input";

describe('SelectBox', () => {
  it('should render successfully', () => {
    function onChange() {
      console.log("Onchange");
    }
    const { baseElement } = render(<MoleculeDateInput value="value" onChange={onChange} />);
    expect(baseElement).toBeTruthy();
  });
});
