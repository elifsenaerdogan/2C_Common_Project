import type { Meta } from '@storybook/react';
import { Tooltip } from './atom-tooltip';
import Button from '../../button/atom-button';

const Story: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Atoms/Tooltip',
};
export default Story;

export const Primary = () => (
  <Tooltip
    overlayStyle={{ minWidth: 280 }}
    title={
      <div style={{ padding: 16 }}>
        <span
          style={{
            color: '#253342',
            fontSize: 16,
            marginBottom: 6,
            display: 'block',
          }}
        >
          Cayma Ücreti Yansitilmaz
        </span>
        <span style={{ color: '#5f6b76', fontSize: 14 }}>
          Herhangi bir paket değişikliğinde cayma bedeli yansimaz. Turkcellden
          ayrilmadiğiniz sürece erken iptal için herhangi bir ücret ödemezsiniz.
        </span>
      </div>
    }
  >
    <Button variant="secondary" text="Hover me" />
  </Tooltip>
);
