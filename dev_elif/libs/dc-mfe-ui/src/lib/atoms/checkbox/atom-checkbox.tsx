import { useEffect, useState } from 'react';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import styles from './atom-checkbox.module.scss';
import classNames from 'classnames';
import { CheckboxItemProps } from './types/checkbox-interfaces';
import { Checkbox } from 'antd';

export function AtomCheckbox(props: CheckboxItemProps) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const {
    name,
    label,
    message,
    disabled,
    required,
    block,
    onClickText,
    onChangeFunction,
    className,
    ...rest
  } = props;

  const onChangeFn = (e: CheckboxChangeEvent) => {
    //React.ChangeEvent
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(props.checked);
  }, [props?.checked]);

  const elementId = `cb-${name}`;

  const handleClickText = (event: React.MouseEvent<HTMLElement>) => {
    onClickText && onClickText(event);
    setIsChecked(!isChecked);
  };
  const checkBoxClasses = classNames(
    'text-body-regular',
    styles['a-trkclApp-checkbox'],
    {
      [styles['a-trkclApp-checkbox--block']]: block,
    }
  );
  const checkedClasses = isChecked
    ? classNames(
        'text-captions-regular',
        styles['a-trkclApp-checkbox--registration-isChecked']
      )
    : classNames(
        'text-body-bold ',
        styles['a-trkclApp-checkbox--registration-isNotChecked']
      );

  return (
    <>
      <label
        htmlFor={elementId}
        className={classNames(styles['a-trkclApp-label'], className)}
      >
        <Checkbox
          className={checkBoxClasses}
          onChange={(e) => onChangeFn(e)}
          disabled={disabled}
          checked={isChecked}
          {...rest}
        >
          {name ? name : ''}
        </Checkbox>
        <span
          onClick={handleClickText}
          role="button"
          className={checkedClasses}
          tabIndex={0}
          dangerouslySetInnerHTML={{ __html: label ? label : '' }}
          aria-label={label}
        ></span>
      </label>
      {message ? (
        <span className={checkedClasses} style={{ display: 'block' }}>
          {message}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
export default AtomCheckbox;
