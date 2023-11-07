import type { Meta, StoryObj } from '@storybook/react';
import Modal from './atom-modal';
import Button from '../button/atom-button';
import { useState } from 'react';
import { AtomIcon } from '@atoms';
import { IconsSettings } from '@others/icons';

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: 'Atoms/Modal',
};
export default Story;
type Story = StoryObj<typeof Modal>;

export const BasicModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Aç</button>
      <Modal
        closeBtnVisibility={false}
        open={open}
        closable
        onCancel={() => setOpen(false)}
        header={<div>HEADER</div>}
        body={<div>BODY</div>}
        footer={<div>FOOTER</div>}
      />
    </>
  );
};

const ModalComp2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>Aç</button>
      <Modal
        closeBtnVisibility={true}
        open={open}
        closable
        onCancel={() => setOpen(false)}
        header={
          <div style={{ textAlign: 'center' }}>
            <AtomIcon
              icon={<IconsSettings width={96} height={96} color="blue" />}
            />
          </div>
        }
        body={
          <div style={{ textAlign: 'center' }}>
            Çıkış Yapmak istediğinize emin misiniz?
          </div>
        }
        footer={
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '2rem 1rem',
            }}
          >
            <Button
              onClick={() => setOpen(false)}
              variant="secondary"
              text="VAZGEÇ"
            />
            <Button variant="secondary" text="TAMAM" />
          </div>
        }
      />
    </>
  );
};

export const ModifiedModal: Story = {
  render: () => <ModalComp2 />,
};
