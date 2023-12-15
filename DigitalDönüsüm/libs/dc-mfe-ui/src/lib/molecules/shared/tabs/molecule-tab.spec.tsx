import { render } from '@testing-library/react';
import Tabs from './molecule-tab';
describe('Tabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tabs
        tabItems={[
          { id: '1', tabItemName: 'Tab Item1' },
          { id: '2', tabItemName: 'Tab Item2' },
        ]}
        tabsContents={[<div key={1}>AA</div>]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
