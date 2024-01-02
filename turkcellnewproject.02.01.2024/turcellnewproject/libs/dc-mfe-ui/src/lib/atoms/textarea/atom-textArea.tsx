import styles from './atom-textArea.module.scss';
import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import AtomIcon from '../icon/atom-icon';
import { Input } from 'antd';
import { TextArePropTypes } from './types/textarea-interfaces';
// import { CheckboxChangeEvent, Text } from 'antd/es';

export function AtomTextarea(props: TextArePropTypes) {
  const {
    rows,
    maxLength,
    name,
    tooltipText,
    onChange,
    field,
    value,
    isSuccess,
    isError,
    isDisabled,
    icon,
    className,
  } = props;
  const textAreaWrapperClasses = classNames(
    styles['a-trkclApp-textarea'],
    className
  );
  const { TextArea } = Input;
  const textAreaClasses = classNames(
    'text-body-regular',
    styles['a-trkclApp-textarea'],
    {
      [styles['a-trkclApp-textarea__disabled']]: isDisabled,
      [styles['a-trkclApp-textarea__isSuccess']]: isSuccess,
      [styles['a-trkclApp-textarea__isError']]: isError,
    }
  );
  const fieldClasses = isError
    ? classNames(
        'text-captions-regular',
        styles['a-trkclApp-textarea__errorMessage']
      )
    : classNames('text-captions-regular');
  const [tooltip, setTooltip] = useState(true);

  const tooltipIcon = classNames(styles['a-trkclApp-textarea__info']);
  const tooltipClasses = classNames(styles['a-trkclApp-textarea__tooltip']);

  const handleTextAreaChange = (e: any) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={textAreaWrapperClasses}>
      <TextArea
        className={textAreaClasses}
        rows={rows}
        maxLength={maxLength}
        name={name}
        value={value}
        onChange={handleTextAreaChange}
        {...props}
      />
      {field ? <span className={fieldClasses}>{field}</span> : <></>}

      {icon && (
        <div
          className={tooltipIcon}
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          <AtomIcon icon={icon!} />
          {tooltip ? (
            <div className={tooltipClasses}>{tooltipText}</div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default AtomTextarea;
