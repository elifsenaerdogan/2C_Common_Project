import { useEffect, useState } from 'react';
import styles from './molecule-agreement-checkbox.module.scss';
import classNames from 'classnames';
import { AgreementCheckboxProps } from './types/agreement-checkbox.interfaces';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { AtomCheckbox } from '@atoms';

export function MoleculeAgreementCheckbox(props: AgreementCheckboxProps) {
  const {
    className,
    disabled,
    checked,
    onChangeFunction,
    block,
    children,
    errorMessage,
    inputRef,
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const onChangeFn = (e: CheckboxChangeEvent) => {
    setIsChecked(!isChecked);
    onChangeFunction && onChangeFunction(e, !isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const moleculeCheckboxClassnames = classNames(
    styles['m-trkclApp-agreementCheckbox'],
    className,
    {
      [styles['m-trkclApp-agreementCheckbox__block']]: block,
    }
  );

  const errorMessageClassnames = classNames(
    'text-captions-regular',
    styles['m-trkclApp-agreementCheckbox__ErrorMessage']
  );

  return (
    <>
      <div className={classNames(moleculeCheckboxClassnames)}>
        <AtomCheckbox
          type="checkbox"
          disabled={disabled}
          onChangeFunction={onChangeFn}
          checked={isChecked}
          {...rest}
        />
        {children}
      </div>
      {errorMessage && (
        <div className={errorMessageClassnames}>{errorMessage}</div>
      )}
    </>
  );
}

export default MoleculeAgreementCheckbox;
