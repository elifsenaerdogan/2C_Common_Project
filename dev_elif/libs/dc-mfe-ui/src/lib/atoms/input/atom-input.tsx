import React from 'react';
import styles from './atom-input.module.scss';
import classNames from 'classnames';
import { InputProps } from './types/input-interfaces';
import { Input } from 'antd';

export function AtomInput(props: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const {
    wrapperClassName,
    label,
    statusType = 'info',
    disabled,
    icon,
    message,
    value,
    placeholder,
  } = props;
  const filteredProps = { ...props };
  delete filteredProps.statusType;

  const inputWrapperClasses = classNames(
    [styles['a-trkclAppInputWrapper']],
    wrapperClassName
  );

  const inputClasses = classNames(
    'text-body-regular',
    [styles['a-trkclAppInputWrapper__input']],
    {
      [styles[`a-trkclAppInputWrapper__${statusType}`]]: statusType,
      [styles['a-trkclAppInputWrapper__input--withLabel']]: label,
    },
    props.className
  );

  const errorClasses = classNames('text-captions-regular', [
    styles[`a-trkclAppInputWrapper__${statusType}Message`],
  ]);

  const labelCurrentClass = classNames([styles['a-trkclAppInputFloatLabel']], {
    [styles['a-trkclAppInputFloatLabel']]: disabled,
    [styles['a-trkclAppInputFloatLabel__disabled']]: disabled,
  });

  const inputLabelClasses = classNames(
    'text-captions-regular',
    [styles['a-trkclAppInputLabel']],
    {
      [styles['a-trkclAppInputLabel__float']]: focus || value || placeholder,
    }
  );

  const iconClasses = classNames([styles['a-trkclAppInputIcon']]);

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
    if (props.onBlur) props.onBlur(event);
  };
  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setFocus(true);
    if (props.onFocus) props.onFocus(event);
  };

  return (
    <div className={inputWrapperClasses}>
      <div className={labelCurrentClass}>
        <label>
          {label && <span className={inputLabelClasses}>{label}</span>}
          <Input
            className={inputClasses}
            {...filteredProps}
            onBlur={(event) => handleOnBlur(event)}
            onFocus={(event) => handleOnFocus(event)}
            placeholder={placeholder}
          />
        </label>
        {icon && <span className={iconClasses}>{icon}</span>}
      </div>
      {message ? (
        <p className={errorClasses}>{message}</p>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}

export default AtomInput;
