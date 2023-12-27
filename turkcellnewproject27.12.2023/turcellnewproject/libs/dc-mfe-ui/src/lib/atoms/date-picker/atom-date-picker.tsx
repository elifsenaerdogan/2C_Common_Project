import React, { useState } from 'react';
import {DatePicker} from 'antd';
import styles from './atom-date-picker.module.scss';
import classNames from 'classnames';
import {DatePickerProps} from "@atoms/date-picker/types/date-picker-interfaces";


export function AtomDatePicker(props:DatePickerProps) {
  const [focus, setFocus] = React.useState(false);
  const {
    wrapperClassName,
    label,
    value,
    placeholder,
  } = props;

  const inputWrapperClasses = classNames(
    [styles['a-trkclAppDatePickerWrapper']],
    wrapperClassName
  );

  const inputClasses = classNames(
    'text-body-regular',
    [styles['a-trkclAppDatePickerWrapper__input']],
    {
      [styles['a-trkclAppDatePickerWrapper__input--withLabel']]: label,
    },

  );


  const inputLabelClasses = classNames(
    'text-captions-regular',
    [styles['a-trkclAppDatePickerLabel']],
    {
      [styles['a-trkclAppDatePickerLabel__float']]: focus || value || placeholder,
    }
  );


  return (
    <div className={inputWrapperClasses}>
      <div >
        <label>
          {label && <span className={inputLabelClasses}>{label}</span>}
          <DatePicker
            className={inputClasses}
            placeholder={placeholder}
          />
        </label>

      </div>
    </div>



  );
}

export default AtomDatePicker;
