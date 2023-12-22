import { render } from '@testing-library/react';

import InfoCard from './molecule-info-card';

describe('InfoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoCard text="TL yükleme işleminiz başarıyla gerçekleşmiştir." />);
    expect(baseElement).toBeTruthy();
  });
});
