import { useRef, useState } from 'react';
import { Select, Divider } from 'antd';
import styles from './molecule-select-box.module.scss';
import classNames from 'classnames';
import { PropTypes } from './types/select-box-interfaces';

export function MoleculeSelectBox(props: PropTypes) {
  const {
    className,
    isError,
    isSuccess,
    errorMessage,
    isDisabled,
    label,
    onChange,
    value,
    ...rest
  } = props;
  const [selectedOption, setSelectedOption] = useState('');
  const [focus, setFocus] = useState(false);
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    onChange && onChange(value);
  }; 
  const wrapperRef = useRef(null);

  const selectBoxClasses = classNames(
    styles['m-trkclApp-selectBox'],
    className,
    {
      [styles['m-trkclApp-selectBox__dropdownSuccess']]: isSuccess,
      [styles['m-trkclApp-selectBox__dropdownError']]: isError,
      [styles['m-trkclApp-selectBox__dropdownDisabled']]: isDisabled,
    }
  );
  const selectPlaceholder = classNames(
    [styles['a-trkclAppInputLabel']],

    {
      [styles['a-trkclAppInputLabel__float']]: focus || selectedOption || value,
    }
  );

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles['m-trkclApp-selectWrapper'])}
    >
      <div className={classNames(styles['.a-trkclAppInputFloatLabel'])}>
        {label ? <span className={selectPlaceholder}>{label}</span> : ''}
        <Select
          {...rest}
          value={value}
          dropdownAlign={{ offset: [0, 0] }}
          getPopupContainer={() => wrapperRef.current!}
          dropdownRender={(menu) => (
            <>
              <Divider style={{ margin: '0' }} />
              {menu}
            </>
          )}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={(e) => handleSelectChange(e)}
          disabled={isDisabled}
          className={selectBoxClasses}
          popupClassName={classNames(
            'text-body-regular',
            styles['m-trkclApp-selectWrapper__popupWrapper']
          )}
        />
      </div>

      {isError && errorMessage ? (
        <div
          className={classNames(
            'text-captions-regular',
            styles['m-trkclApp-selectWrapper__errorMessage']
          )}
        >
          {errorMessage}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default MoleculeSelectBox;
