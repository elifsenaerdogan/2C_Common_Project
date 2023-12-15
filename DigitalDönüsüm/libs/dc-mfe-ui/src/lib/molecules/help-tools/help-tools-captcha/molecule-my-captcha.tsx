import styles from './molecule-my-captcha.module.scss'
import { IconsReturn } from '@others/icons';
import React, { useEffect, useState } from 'react';
// import captchaData from '../../../others/dummy/';
import {MyCaptcha, MyCaptchaPropTypes, MyData} from './types/mycaptcha-interfaces';
import {  AtomInput } from '@atoms';
import classNames from 'classnames';

import VolumeUp from "@others/icons/VolumeUp";
import axios from "axios";

export function MyMoleculeCaptcha(props: MyCaptchaPropTypes) {
  const { fetchData,inputLabel,statusType, message,isCaptchaOk, text, value, onBlur, onChangee } = props;

  const [captchaImg, setCaptchaImg] = useState<MyData | null>(null);


  useEffect(() => {
    const getCaptchaa = async () => {
      try {
        setIsLoading(true)
        const response = await axios.post(
          `/api/gateway/captcha`,
          {},
          {
            withCredentials:false,
            headers: {
              'User-Msisdn': '5342747427',
              'User-SessionId': '20221228114048_3976B6DF6E44428DB5B861CA20F5C1C5',
              'Channel-Type':'WEB',
              'Language-Prefix':'tr',
              'User-ClientIp':'127.0.0.1',
              'User-ClientPort':'8080',
              'Content-Type':'application/json',
            },
          }
        );
        const data = response.data.image
        setCaptchaImg(data)
        console.log("bu sayfa yenilemesinden geldi")
      } catch (err) {
        //
      }
      finally {
        setIsLoading(false)
      }

    }
    getCaptchaa();

  }, [fetchData]);


  const captchaJson = {
    imageBase64:''}

  //const timestamp = Date.now()

  const [captcha, setCaptcha] = useState<MyCaptcha>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');


  const getCaptcha = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        `/api/gateway/captcha`,
        {},
        {
          withCredentials:false,
          headers: {
            'User-Msisdn': '5342747427',
            'User-SessionId': '20221228114048_3976B6DF6E44428DB5B861CA20F5C1C5',
            'Channel-Type':'WEB',
            'Language-Prefix':'tr',
            'User-ClientIp':'127.0.0.1',
            'User-ClientPort':'8080',
            'Content-Type':'application/json',
          },
        }
      );
      const data = response.data.image
      setCaptchaImg(data)
      console.log("hey elif")
    } catch (err) {
      //
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }


  const [focus, setFocus] = React.useState(false);

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

  const captchaLeft = classNames(
    styles['a-trkclAppCaptchaLeft']
  )


  return (
    <div className={captchaWrapperClasses}>
      <div className={captchaLeft}>
        <div className={captchaContainerClasses}>
          <div className={captchaClasses}>
            {captchaImg && <img src={`data:image/png;base64,${captchaImg}`} alt="Captcha Code" />}
          </div>
          <div onClick={getCaptcha} className={`${captchaIconClasses}`}>
            <IconsReturn />
          </div>
        </div>
        <div>
          <p className={`text-legal-regular-medium ${styles.p3}`}>{text}</p>
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
          value={value}
          message={message}
          statusType={statusType}
          onChange={onChangee}
          onBlur={onBlur}
        />

      </div>
    </div>
  );
}

export default MyMoleculeCaptcha;
