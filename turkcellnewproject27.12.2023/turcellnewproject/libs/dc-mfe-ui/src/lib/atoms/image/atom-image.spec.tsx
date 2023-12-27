import { render } from '@testing-library/react';
import AtomImage from './atom-image';
import photo from '@others/assets/images/illustration.png';

describe('Image Item', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomImage src={photo} alt="fotograf" />);
    expect(baseElement).toBeTruthy();
  });
});
