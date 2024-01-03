import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MoleculeModal from './molecule-modal';
import { Modal } from './types/modal-enums';

const Story: Meta<typeof MoleculeModal> = {
  component: MoleculeModal,
  title: 'Molecules/Modal',
};
export default Story;
type Story = StoryObj<typeof MoleculeModal>;

const ModalComp = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Aç {props.type} </button>
      <MoleculeModal
        type={props.type}
        bodyTitle={props.bodyTitle}
        bodyText={props.bodyText}
        buttonText={props.buttonText}
        isOpen={open}
        setVisibility={() => setOpen(false)}
        onClick={() => alert('write your own onClick func')}
      />
    </>
  );
};

export const ModalComponentSuccess: Story = {
  render: () => (
    <ModalComp
      type={Modal.SUCCESS}
      bodyTitle="Üzgünüz, lorem ipsum"
      bodyText="Yaşanılan hatanın sebebi ve nasıl çözüleceği"
      buttonText="Tamam, Anasayfaya dön"
    />
  ),
};
export const ModalComponentInfo: Story = {
  render: () => (
    <ModalComp
      type={Modal.INFO}
      bodyTitle="Üzgünüz, lorem ipsum"
      bodyText="Yaşanılan hatanın sebebi ve nasıl çözüleceği"
      buttonText="Tamam, Anasayfaya dön"
    />
  ),
};
export const ModalComponentError: Story = {
  render: () => (
    <ModalComp
      type={Modal.ERROR}
      bodyTitle="Üzgünüz, lorem ipsum"
      bodyText="Yaşanılan hatanın sebebi ve nasıl çözüleceği"
      buttonText="Tamam, Anasayfaya dön"
    />
  ),
};
