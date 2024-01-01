import { render } from '@testing-library/react';
import { RadioButtonEnum } from './types/radio-button-enums';

import MoleculeRadioButton from './molecule-radio-button';

describe('Molecule2RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MoleculeRadioButton
        type={RadioButtonEnum.CREDITCART}
        creditCartNumber={1234}
        currentCheckedValue="Yapı Kredi Kartım"
        value="Yapı Kredi Kartım"
        radioButtonName="Yapı Kredi Kartım"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
