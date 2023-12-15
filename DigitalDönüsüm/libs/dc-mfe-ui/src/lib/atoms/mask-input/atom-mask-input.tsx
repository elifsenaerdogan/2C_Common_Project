import { generateMaskedNumberRegex } from '@others/utils/mask';
import React, { useState, useEffect } from 'react';
import AtomInput from '../input/atom-input';
import classNames from 'classnames';
import styles from './atom-mask-input.module.scss';
import { IProps } from './types/mask-input-interface';

export function AtomMaskInput(props: IProps) {
  const { maskType, value, onChange } = props;
  const wrapperClassName = classNames(styles['a-trkclAppAtomMaskInputWrapper']);
  let placeholder = '';
  let maxLen = 0;

  switch (maskType) {
    case 'phone':
      placeholder = 'XXXX XXX XX XX';
      maxLen = 14;
      break;
    case 'card':
      placeholder = 'XXXX XXXX XXXX XXXX';
      maxLen = 19;
      break;
    default:
      placeholder = '';
      maxLen = 0;
  }

  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    const formattedValue = value
      ? generateMaskedNumberRegex(value.toString(), maskType)
      : '';
    if (formattedValue !== localValue) {
      setLocalValue(formattedValue);
    }
  }, [value, maskType]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = generateMaskedNumberRegex(event?.target?.value, maskType);
    setLocalValue(newValue);
    if (onChange) onChange(event);
  };

  return (
    <div className={wrapperClassName}>
      <AtomInput
        value={localValue}
        onChange={(e) => handleInputChange(e)}
        maxLength={maxLen}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default AtomMaskInput;
