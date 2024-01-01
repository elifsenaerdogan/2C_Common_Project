import styles from './captcha.module.scss';
import { IconsReturn } from '@others/icons';
import { useState } from 'react';
import { CaptchaPropTypes } from './types/captcha-interfaces';
import { AtomButton, AtomInput } from '@atoms';
import classNames from 'classnames';

export function MoleculeCaptcha(props: CaptchaPropTypes) {
  const { inputLabel, onClick, isLoading, refreshCaptcha, captcha } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value;
    setInputValue(trimmedValue.trim());
  };

  const handleOnClick = () => {
    onClick && onClick(inputValue);
    setInputValue('');
  };

  const captchaWrapperClasses = classNames(styles['a-trkclAppCaptchaWrapper']);
  const captchaContainerClasses = classNames(
    styles['a-trkclAppCaptchaWrapper__captchaContainer']
  );
  const captchaClasses = classNames(
    styles['a-trkclAppCaptchaWrapper__captchaContainer--captcha']
  );
  const captchaIconClasses = classNames(
    styles['a-trkclAppCaptchaWrapper__captchaContainer--captchaIcon'],
    {
      [styles[
        'a-trkclAppCaptchaWrapper__captchaContainer--captchaIcon-rotate'
      ]]: isLoading,
    }
  );
  const captchaInputClasses = classNames(
    styles['a-trkclAppCaptchaWrapper__captchaControl--captchaInput']
  );

  return (
    <div className={captchaWrapperClasses}>
      <div className={captchaContainerClasses}>
        <div className={captchaClasses}>
          <img
            src={`data:image/jpeg; base64,${captcha?.image}`}
            alt="captcha"
          />
        </div>
        <div onClick={refreshCaptcha} className={`${captchaIconClasses}`}>
          <IconsReturn />
        </div>
      </div>
      <div
        className={classNames(
          styles['a-trkclAppCaptchaWrapper__captchaControl']
        )}
      >
        <AtomInput
          wrapperClassName={captchaInputClasses}
          label={inputLabel}
          value={inputValue}
          onChange={handleChange}
        />
        <AtomButton
          className={classNames(
            styles['a-trkclAppCaptchaWrapper__captchaControl--captchaButton']
          )}
          text="Devam Et"
          variant="secondary"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
}

export default MoleculeCaptcha;
