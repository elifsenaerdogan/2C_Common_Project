import { render } from '@testing-library/react';
import { AtomFavButton } from './atom-fav-button';
describe('PriceBoxContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomFavButton />);
    expect(baseElement).toBeTruthy();
  });
});
