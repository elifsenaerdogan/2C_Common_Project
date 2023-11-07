import type { Meta } from '@storybook/react';
import { MoleculePaymentForm } from './molecule-payment';
import { useRef } from 'react';

const Story: Meta<typeof MoleculePaymentForm> = {
  component: MoleculePaymentForm,
  title: 'Molecules/Payment',
};
export default Story;

export const Primary = () => {
  const formRef = useRef();
  const onSubmit = (data?: any) => {
    console.log('get form data: ',data);
  }
  return (
  <div style={{ maxWidth: 780 }}>
    <MoleculePaymentForm onSubmit={onSubmit} reference={formRef} />
    <button onClick={() => formRef.current.submitForm()}>Submit</button>
  </div>
)};
