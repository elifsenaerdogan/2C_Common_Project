import { render } from '@testing-library/react';

import MoleculesAsideBox from './molecules-aside-box';

describe('MoleculesAsideBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MoleculesAsideBox>
        <div></div>
      </MoleculesAsideBox>
    );
    expect(baseElement).toBeTruthy();
  });
});
