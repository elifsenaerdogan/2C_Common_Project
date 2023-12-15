import React from 'react';
import {MoleculeSwitch} from "@molecules";

export default {
  title: 'MoleculeSwitch',
  component: MoleculeSwitch,
};

export const Default = () => (
  <MoleculeSwitch label="Switch Label" onChange={(checked) => console.log(checked)} />
);

export const Disabled = () => (
  <MoleculeSwitch label="Disabled Switch" disabled={true} />
);

export const CustomLabel = () => (
  <MoleculeSwitch label="Custom Label" />
);
