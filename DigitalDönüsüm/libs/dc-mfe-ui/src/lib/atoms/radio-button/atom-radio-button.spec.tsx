import { render } from '@testing-library/react';
import RadioButton from './atom-radio-button';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RadioButton
        radioButtonName="TL Yükle"
        value="TL Yükle"
        currentCheckedValue="TL Yükle"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
