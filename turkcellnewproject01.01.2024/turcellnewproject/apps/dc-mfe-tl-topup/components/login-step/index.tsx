import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import useMobile from '@others/hooks/useMobile';
import MoleculeCaptcha from 'libs/dc-mfe-ui/src/lib/molecules/captcha/captcha';
import { MoleculeModal } from '@molecules';
import { LoginProps } from './types/login-interface';
import { LoginEnums } from './types/login-enum';
import { useDispatch, useSelector } from 'react-redux';
import { goToNextStep, setCaptcha } from '../../store/app-slice';

const Login = (props: LoginProps) => {
  // const { captchaConclusion } = props;
  const captcha = useSelector((state) => state.tlTopupAppSlice.captcha);
  const displayCaptcha = useSelector(
    (state) => state.tlTopupAppSlice.displayCaptcha
  );

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const isCaptchaOk = (item: boolean) => {
    dispatch(setCaptcha(item)); //is ok a basılınca captcha nın valuesini manipüle eden fonk.
    // captchaConclusion(item);
    if (captcha == false) {
      setOpenModal(true); //captchanın valuesinin durumuna göre modal açtıran fonk.
    } else {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    captcha == true ? dispatch(goToNextStep()) : ''; // captcha her etkilendiğinde true anında next page e atan state.
  }, [captcha]);

  const loginStepClasses = classNames(styles['loginStep']);
  const loginStepContainerClasses = classNames(styles['loginStep__container']);
  const loginStepContentlasses = classNames(
    styles['loginStep__container--content']
  );
  const loginContentSecurityAreaClasses = classNames(
    styles['loginStep__container--content-securtiyArea']
  );
  const loginContentModalClasses = classNames(
    styles['loginStep__container--content-securtiyArea-modal']
  );
  const loginContentModalButtonClasses = classNames(
    styles['loginStep__container--content-securtiyArea-modalButton']
  );
  const loginContentModalBackgroundClasses = classNames(
    styles['loginStep__container--content-securtiyArea-background']
  );

  return (
    <div className={loginStepClasses}>
      <div className={loginStepContainerClasses}>
        <div className={loginStepContentlasses}>
          {displayCaptcha == true ? (
            <div className={loginContentSecurityAreaClasses}>
              <MoleculeCaptcha
                inputLabel={LoginEnums.CaptchaSecurityCodeLabel}
                isCaptchaOk={isCaptchaOk}
              />
              {captcha == false ? (
                <MoleculeModal
                  buttonText={LoginEnums.ModalButtonText}
                  type={LoginEnums.ModalType}
                  setVisibility={() => setOpenModal(false)}
                  isOpen={openModal}
                  bodyTitle={LoginEnums.ModalTitleError}
                  bodyText={LoginEnums.ModalBodyError}
                  onClick={() => setOpenModal(false)}
                  buttonVariant={LoginEnums.ModalButtonVariant}
                  contentClassName={loginContentModalClasses}
                  buttonClassName={loginContentModalButtonClasses}
                  backgroundClassName={loginContentModalBackgroundClasses}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
