import React, { lazy, useEffect, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { MoleculeBasketAmountBar, MoleculeNonLogin } from '@molecules';
import { AtomInput, AtomRadioButton } from '@atoms';
// import { HomePageTypes } from '../pages/home/types/index-enums';
import { PageTypes } from '@others/enums/pageTypes';
import { generateMaskedNumberRegex } from '@others/utils/mask';
import PageTypeRadioButtons from '../components/current-page-radioButtons';
import { HomePageEnums } from './types/index-enums';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayCaptcha } from '../store';

const AppLayout = ({ children }) => {
  //const formRef = useRef(); // payment submit için gerekli olan ref
  const currentType = useSelector((state) => state.tlTopupAppSlice.currentType);
  const currentAmount = useSelector(
    (state) => state.tlTopupAppSlice.currentAmount
  );
  const dispatch = useDispatch();

  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const [inputPhoneNumber, setInputPhoneNumber] =
    React.useState('0505 134 15 70');
  const isLogin = false;

  const changeInputClick = () => {
    setIsInputDisabled(false); //değiştir butonu
  };
  const isInputFull = (e) => {
    setInputPhoneNumber(e.target.value); //input val. set etme
  };

  useEffect(() => {
    if (inputPhoneNumber.length == 14) {
      // telefon numarasına göre inputun disabled veya olmama özelliğini ayarlama. ve captchanın kaybolma durumunu ayarlama.
      setIsInputDisabled(true);
      dispatch(setDisplayCaptcha(true)); //backenden veri geldiğinde 14 kontrolu değişecek.
    } else {
      dispatch(setDisplayCaptcha(false));
      setIsInputDisabled(false);
    }
  }, [inputPhoneNumber]);

  useEffect(() => {
    if (inputPhoneNumber.length == 14) {
      dispatch(setDisplayCaptcha(true));
    } else {
      dispatch(setDisplayCaptcha(false));
    }
  }, []);

  const pageData = [
    {
      radioButtonName: 'Paket Yükle',
      value: 'Paket Yükle',
    },
    {
      radioButtonName: 'TL Yükle',
      value: 'TL Yükle',
    },
  ];

  //classes
  const isLogintWrapperClasses = classNames(styles['layout__isLoginContent']);
  const isLoginContentClasses = classNames(
    styles['layout__isLoginContent--content']
  );
  const layoutContainerClasses = classNames(styles['layout__container']);
  const layoutContentClasses = classNames(styles['layout__container--content']);

  const layoutInputContentClasses = classNames(
    styles['layout__container--content-inputContent']
  );
  const layoutInputContentTitleClasses = classNames(
    'text-body-regular',
    styles['layout__container--content-inputContent-title']
  );
  const layoutInputContentWrapperClasses = classNames(
    'text-body-regular',
    styles['layout__container--content-inputContent-wrapper']
  );
  const layoutInputContentChangeButtonClasses = classNames(
    'text-body-regular',
    styles['layout__container--content-inputContent-wrapper-changeButton']
  );
  const layoutInputChildClasses = classNames(
    styles['layout__container--content-inputContent-input']
  );
  const basketWrapperClasses = classNames(styles['layout__basketAmountBar']);
  const basketContainerClasses =
    currentType == HomePageEnums.TL // eşitlik kontrolleri === ile
      ? classNames(styles['layout__basketAmountBar--basketForTlSection'])
      : classNames(styles['layout__basketAmountBar--basketForpackageSection']);
  console.log('pd', pageData);

  return (
    <>
      {!isLogin ? (
        <div className={isLogintWrapperClasses}>
          <MoleculeNonLogin className={isLoginContentClasses} />
        </div>
      ) : (
        ''
      )}

      <div className={layoutContainerClasses}>
        <div className={layoutContentClasses}>
          <PageTypeRadioButtons pageData={pageData} />

          <div className={layoutInputContentClasses}>
            <span className={layoutInputContentTitleClasses}>
              {HomePageEnums.PHONE_NUMBER_TO_UPLOAD}
            </span>
            <div className={layoutInputContentWrapperClasses}>
              <AtomInput
                label={HomePageEnums.InputLabelText}
                value={generateMaskedNumberRegex(inputPhoneNumber, 'phone')}
                disabled={isInputDisabled}
                onChange={(e) => isInputFull(e)}
                className={layoutInputChildClasses}
              />

              <span
                className={layoutInputContentChangeButtonClasses}
                onClick={changeInputClick}
              >
                {HomePageEnums.ChangeText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {children}

      <div className={basketWrapperClasses}>
        <MoleculeBasketAmountBar
          type={
            currentType == HomePageEnums.TL ? PageTypes.TL : PageTypes.PACKAGE
          }
          desc={HomePageEnums.BASKET_DESC}
          paymentTotal={currentAmount}
          balance={50}
          basketContainerClasses={basketContainerClasses}
        />
      </div>
    </>
  );
};

export default AppLayout;
