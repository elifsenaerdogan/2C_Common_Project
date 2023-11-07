import { useRef } from 'react';
import { AutoComplete, Input, InputRef } from 'antd';
import { IconsClose, IconsMic, IconsSearch } from '@others/icons';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { Children } from '@others/typeDeclarations/children';
import styles from './searchDropdown.module.scss';
interface PropTypes extends AutoCompleteProps {
  clearClick?: () => void;
  inputPlaceholder?: string;
  searchSubInfo?: string;
  inputClassName?: string;
  popupSubInfo?: string;
  hidePopupSubInfo?: boolean;
  children?: Children;
  micClick?: () => void;
  searchClick?: () => void;
}

const SearchDropdown = (props: PropTypes) => {
  const inputRef = useRef<InputRef>(null);
  const {
    options,
    inputPlaceholder,
    className = '',
    popupClassName = '',
    value,
    clearClick,
    searchSubInfo = '',
    onSelect,
    inputClassName = '',
    popupSubInfo = '',
    hidePopupSubInfo = false,
    children = null,
    micClick,
    searchClick,
    open,
  } = props;

  const handleClick = (fn?: () => void, blur = true) => {
    if (fn) {
      fn();
    }
    if (blur) {
      inputRef.current?.blur();
    }
  };
  return (
    <div
      className={`${styles.trkclAppSearchDropDownInputWrapper} ${className}`}
    >
      <AutoComplete
        dropdownAlign={{
          offset: [0],
        }}
        value={value}
        popupClassName={`${styles.trkclAppDropDownPopupClass} ${popupClassName} ${styles.customClass}`}
        dropdownRender={(menu) => {
          return (
            <>
              {menu}
              {hidePopupSubInfo || !popupSubInfo ? (
                <></>
              ) : (
                <div
                  className={`text-body-regular ${styles.trkclAppDropDownSubSection}`}
                >
                  {popupSubInfo}
                </div>
              )}
            </>
          );
        }}
        onSelect={onSelect}
        open={open}
        options={options}
        {...props}
      >
        {children ? (
          children
        ) : (
          <Input
            ref={inputRef}
            className={`text-body-large-regular ${styles.trkclAppSearchDropDownInput} ${inputClassName}`}
            style={{
              borderBottomLeftRadius: open ? 0 : '',
              borderBottomRightRadius: open ? 0 : '',
            }}
            suffix={
              <div className={`${styles.trkclAppSearchDropDownInputActions}`}>
                {value ? (
                  <IconsClose
                    className={styles.trkclAppSearchDropDownIcon}
                    width={20}
                    height={20}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleClick(clearClick);
                    }}
                  />
                ) : (
                  <></>
                )}
                <div>
                  <IconsMic
                    className={styles.trkclAppSearchDropDownIcon}
                    onClick={micClick}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            }
            placeholder={inputPlaceholder}
            prefix={
              <IconsSearch
                className={styles.trkclAppSearchDropDownIcon}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClick(searchClick);
                }}
                width={24}
                height={24}
                style={{ marginRight: '16px' }}
              />
            }
          />
        )}
      </AutoComplete>
      <div
        className={`text-legal-bold ${styles.trkclAppSearchDropDownInputSubInfo}`}
      >
        {searchSubInfo}
      </div>
    </div>
  );
};
export default SearchDropdown;
