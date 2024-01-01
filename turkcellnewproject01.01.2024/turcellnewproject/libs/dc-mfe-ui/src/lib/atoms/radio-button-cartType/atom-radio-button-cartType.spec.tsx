import { render } from '@testing-library/react';
import RadioButton from './atom-radio-button-cartType';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RadioButton value="TL Yükle" currentCheckedValue="TL Yükle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
