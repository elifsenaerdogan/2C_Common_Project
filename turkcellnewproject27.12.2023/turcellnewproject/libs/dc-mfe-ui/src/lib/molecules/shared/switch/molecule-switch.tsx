import React, { useState } from 'react';
import { Switch,Space } from 'antd';
import classNames from 'classnames';
import styles from './molecule-switch.module.scss'
import { MoleculeSwitchTypes } from './types/switch-interfaces';


export function MoleculeSwitch(props: MoleculeSwitchTypes) {
  const [checked, setChecked] = useState(true);
  const { label, disabled, onChange } = props;

  const switchDivClasses = classNames([styles['a-trkclAppSwitchWrapper']]);
  const switchClasses = classNames(checked? styles['a-trkclAppSwitchIcon'] : styles['a-trkclAppSwitchIconNoChecked'], {
    'atom-switch--disabled': props.disabled,
  });
  const switchLabelClasses = classNames(styles['a-trkclAppSwitchLabel']);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    if (props.onChange) {
      props.onChange(newChecked);
    }
  };

  return (
    <div className={switchDivClasses}>
      <label className={switchLabelClasses}>{label}</label>
      <Space>
        <Switch
          defaultChecked={true}
          disabled={false}
          onChange={handleChange}
          className={switchClasses}
        />
      </Space>
    </div>
  );
}

export default MoleculeSwitch;
