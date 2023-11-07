import { useEffect, useState } from 'react';
import styles from './atom-terms-registrationCheckbox.module.scss';
import classNames from 'classnames';
import { RegistrationCheckboxItemProps } from './types/terms-registration-checkbox-interfaces';
import { AtomCheckbox, AtomImage } from '@atoms';
import { useMobile } from '@others/hooks';

export function AtomTermsRegistrationCheckbox(
  props: RegistrationCheckboxItemProps
) {
  const {
    name,
    label,
    message,
    disabled,
    checked,
    image,
    block,
    onChangeFunction,
    text,
    saveTermsText,
    approveText,
    onClickLink,
    saveToHide,
    className,
    inputRef,
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const isMobile = useMobile();
  const handleTermsRegistration = () => {
    onClickLink && onClickLink();
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const checkedClasses = classNames(
    'text-body-small',
    styles['a-trkclApp-checkbox__checkbox--registration-text']
  );

  return (
    <>
      <div className={classNames(styles['a-trkclApp-checkbox'], className)}>
        <AtomCheckbox
          disabled={disabled}
          checked={isChecked}
          {...rest}
        >
          {name ? name : ''}
        </AtomCheckbox>
        <div
          className={classNames(
            styles['a-trkclApp-checkbox__checkbox--registration']
          )}
        >
          {text ? (
            <span
              className={checkedClasses}
              dangerouslySetInnerHTML={{ __html: text ? text : '' }}
            />
          ) : (
            <></>
          )}
          {image ? (
            <AtomImage
              src={image}
              width={!isMobile ? 108 : 103}
              height={!isMobile ? 19 : 18}
              alt="masterpass"
              className={classNames(
                styles['a-trkclApp-checkbox__checkbox--registration-image']
              )}
            />
          ) : (
            <></>
          )}

          {saveToHide ? (
            <span className={checkedClasses}>{saveToHide}</span>
          ) : (
            <></>
          )}

          {saveTermsText ? (
            <span
              className={classNames(
                'text-body-small-bold',
                styles['a-trkclApp-checkbox__checkbox--registration-terms']
              )}
              onClick={() => handleTermsRegistration()}
            >
              &nbsp;{saveTermsText}&nbsp;
            </span>
          ) : (
            <></>
          )}

          {approveText ? (
            <span className={checkedClasses}>{approveText}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <span style={{ display: 'block' }}>{message}</span>
    </>
  );
}

export default AtomTermsRegistrationCheckbox;
