import React, {useState, ChangeEvent, useEffect} from 'react';
import {DateInputProps} from "./types/date-input-interfaces";
import classNames from "classnames";
import styles from './molecule-date-input.module.scss';
import {AtomInput} from "@atoms";

export function DateInput(props: DateInputProps) {

  const {onChange, value,statusType,wrapperClassName,message,label,placeholder} = props;
  const [formattedDate, setFormattedDate] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Sadece sayıları al

    let formattedValue = '__ / __ / ____';

    for (let i = 0, j = 0; i < formattedValue.length && j < inputValue.length; i++) {
      if (formattedValue[i] === '_') {
        formattedValue = formattedValue.substring(0, i) + inputValue[j] + formattedValue.substring(i + 1);
        j++;
      }
    }

    setFormattedDate(formattedValue);
    onChange(formattedValue);
  };

  const [focus, setFocus] = React.useState(false);


  const inputWrapperClasses = classNames(
    [styles['a-trkclAppInputWrapper']],
    wrapperClassName
  );

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
    if (props.onBlur) props.onBlur(event);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocus(true);
    handleInputChange(event);
    if (props.onFocus) props.onFocus(event);
  };



  return (
    <>
      <AtomInput
        wrapperClassName={inputWrapperClasses}
        label={label}
        placeholder={placeholder}
        value={formattedDate}
        maxLength={20}
        onChange={handleInputChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        message={message}
        statusType={statusType}/>
    </>
  );
};

export default DateInput;

