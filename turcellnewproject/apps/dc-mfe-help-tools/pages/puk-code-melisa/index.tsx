import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import Menus from '../../src/components/Menus';
import {AtomInput, AtomRadioButton} from '@atoms';
import IconsSim from '@others/icons/IconsSim';
import IconsTechSpecs from "@others/icons/IconsTechSpecs";
import classNames from 'classnames';
import {DateInput} from "@molecules";
import Captcha from "../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const PukCodePagesPrivate = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('isChecked1');
  const [tcno, setTcno] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [gsmno, setGsmno] = useState('');
  const [simno, setSimno] = useState('');
  const [formErrors, setFormErrors] = useState({ gsmno: '' , simno: '', tcno: ''});
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaResponse, setCaptchaResponse] = useState({
    identifier: '',
    sound: '',
    image: ''
  });
  const [validationErrorsSC, setValidationErrorsSC] = useState({
    gsmno: '',
    simNumber: '',
    captcha: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      await getCaptchaa();
    };
    fetchData();
  }, []);

  let validationSchemaWithTCNo;
  let validationSchemaWithSimCard;
  const handleCheckboxChange = (selectedCheckbox) => {
    if (selectedCheckbox === 'isChecked1') {
      setIsChecked1(true);
      setIsChecked2(false);
      setSelectedRadio('isChecked1');
    } else if (selectedCheckbox === 'isChecked2') {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio('isChecked2');
    }
  };

  const RadioButtonSim = classNames(
    {
      [styles.RadioButtonSimSelected]: isChecked1,
      [styles.RadioButtonSimUnSelected]: !isChecked1,
    }
  );
  const RadioButtonTc = classNames(
    {
      [styles.RadioButtonSimSelected]: isChecked2,
      [styles.RadioButtonSimUnSelected]: !isChecked2,
    }
  );
  const pukCodePageSimI = classNames(
    'text-body-bold',
    styles.trkclAppPagePukContentLabelRadio,
    {
      [styles.pukCodePageSimISelected]: isChecked1
    }
  );
  const pukCodePageTcI = classNames(
    'text-body-bold',
    styles.trkclAppPagePukContentLabelRadio,
    {
      [styles.pukCodePageTcISelected]: isChecked2
    }
  );
  const pukCodePageSimII = classNames(
    'text-legal-regular-medium',

      styles.pukCodePageSimIISelected

  );
  const pukCodePageTcII = classNames(
    'text-legal-regular-medium',

      styles.pukCodePageTcIISelected

  );
  const SimCardWriteLabel = classNames(
    'text-legal-regular-medium',

    styles.pukCodeContentInputsSimCardWrite
  );
  const pukCodeTcLabel = classNames(
    `text-legal-regular-medium`,
    styles.pukCodePageTcFormLabel
  );
  const handleDateChange = (value: string) => {
    console.log('Selected Date:', value);
    setInputValue(value);

  };

  const handleBlurGsm = () => {


    if (gsmno.trim() === '') {
      setFormErrors({
        ...formErrors,
        gsmno: "Telefon numarası boş bırakılamaz."
      });
    } else if (gsmno.length !== 10 || gsmno.startsWith('0')) {
      setFormErrors({
        ...formErrors,
        gsmno: "Telefon numarası en az 10 karakter olmalıdır ve 0 ile başlamamalıdır.",
        simno: '',
        tcno: ''
      });
    } else {

      setFormErrors({
        ...formErrors,
        gsmno: '',
        simno: '',
        tcno: ''
      });
    }

    setIsFocused(false);
  };
  const handleBlurSim = () => {

    if (simno.trim() === '') {
      setFormErrors({
        ...formErrors,
        simno: "Sim kart numarası boş bırakılamaz."
      });
    }else if (simno.length !== 12) {
      setFormErrors({
        ...formErrors,
        simno: "Sim kart numarası en az 12 karakter olmalıdır.",
        gsmno: ''
      });
    } else {
      setFormErrors({
        ...formErrors,
        simno: '',
        gsmno: ''
      });
    }

    setIsFocused(false);
  };
  const handleBlurTc = () => {

    if (tcno.trim() === '') {
      setFormErrors({
        ...formErrors,
        tcno: "Tc kimlik numarası boş bırakılamaz."
      });
    }else if (tcno.length !== 11) {
      setFormErrors({
        ...formErrors,
        tcno: "Tc kimlik numarası en az 11 karakter olmalıdır.",
        gsmno: ''
      });
    } else {
      setFormErrors({
        ...formErrors,
        tcno: '',
        gsmno: ''
      });
    }

    setIsFocused(false);
  };

  const handleChange = (e) => {
    setGsmno(e.target.value);
    setIsFocused(true);
  };

  const handleChangeSim = (e) => {
    setSimno(e.target.value);
    setIsFocused(true);
  };

  const handleChangeTc = (e) => {
    setTcno(e.target.value);
    setIsFocused(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const getCaptchaa = async () => {
    try {
      setIsLoading(true)
      const responsee = await axios.post(
        `/api/gateway/captcha`,
        {},
        {
          withCredentials: false,
          headers: {
            'User-Msisdn': '5342747427',
            'User-SessionId': '20221228114048_3976B6DF6E44428DB5B861CA20F5C1C5',
            'Channel-Type': 'WEB',
            'Language-Prefix': 'tr',
            'Content-Type': 'application/json',
            'Cookie': '866f82bb67e9dc9390b0ae797eab002d=a7e8cf6f57913f7d0e75c01e5b0b3dd1',
          },
        }
      );

      const data = responsee.data;
      setCaptchaResponse(data);
    } catch (err) {
      console.error('Error fetching captcha:', err);
    } finally {
      setIsLoading(false)
    }

  }

  const handleFormSubmitSC = async (inputValue) => {
    const selectedValidationSchema = validationSchemaWithSimCard

    if (selectedValidationSchema) {
      await selectedValidationSchema.validate({
        gsmno: gsmno,
        simno: simno,
        captcha: inputValue,
      }, {abortEarly: false})
        .then(valid => {
          console.log('Form doğrulandı!', valid);
          setValidationErrorsSC({
            gsmno: '',
            simNumber: '',
            captcha: '',
          });
        })
        .then()
        .catch(errors => {
          console.error('Form doğrulaması hatalı!', errors);
          console.log(errors);
          console.error('Form doğrulaması hatalı!', errors.errors);

          setValidationErrorsSC(errors.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
          }, {}));
          console.log(validationErrorsSC);
        });
    }
  };
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchemaWithSimCard),
  });




  return (
    <>
      <div className={styles.pukCodePage}>
        <div className={styles.pukCodePageMenu}>
          <Menus currentPage="puk-kodu"/>
        </div>
        <div className={styles.pukCodePageP}>
          <div>
          <div className={styles.pukCodePageWritesIII}>
            <h1 className={styles.pukCodePageWriteI}>Puk Kodu Öğrenme</h1>
            <h3 className={styles.pukCodePageWriteII}>Puk Kodu bilgilerinizi aşağıdaki adımları kullanarak anında
              öğrenebilirsiniz.</h3>
          </div>
          </div>
          <div>
            <div className={styles.pukCodePageAtomRadioButtons}>
              <AtomRadioButton
                radioButtonName={" "}
                element={<div className={styles.pukCodePageSimIconText}>
                <IconsSim className={RadioButtonSim}/>
                  <div className={styles.pukCodePageSim}>
                    <p className={pukCodePageSimI}> Sim kart Numarası ile </p>
                    <p className={pukCodePageSimII} style={{ whiteSpace: 'nowrap' }}> Sim kart numaranızı girerek sorgu yapabilirsiniz</p>
                  </div>
                </div>}
                value="isChecked1"
                currentCheckedValue="isChecked1"
                checked={isChecked1}
                onClick={() => handleCheckboxChange('isChecked1')}
              />
              <AtomRadioButton
                radioButtonName={" "}
                element={<div className={styles.pukCodePageTcIconText}>
                  <IconsTechSpecs className={RadioButtonTc}/>
                  <div className={styles.pukCodePageTc}>
                    <p className={pukCodePageTcI}>TC kimlik Numarası ile </p>
                    <p className={pukCodePageTcII} style={{ whiteSpace: 'nowrap' }}>Tckn bilgileriniz ile sorgu yapabilirsiniz.</p>
                  </div>
                </div>}
                value="isChecked2"
                currentCheckedValue="isChecked2"
                checked={isChecked2}
                onClick={() => handleCheckboxChange('isChecked2')}
              />
            </div>
            {isChecked1 ? (
              <div>
                <div className={styles.pukCodePageContentSim}>
                  <div className={styles.pukCodeContentInputs}>
                    <div>
                      <AtomInput
                        label="İletşim No* (başında 0 olmadan)"
                        type="text"
                        value={gsmno}
                        onBlur={handleBlurGsm}
                        onChange={handleChange}
                        onFocus={handleFocus}
                      />
                      {isFocused && formErrors.gsmno && (
                        <div style={{ color: 'red' }}>{formErrors.gsmno}</div>
                      )}
                    </div>
                    <div>
                      <div className={styles.pukCodeContentInputsSimCardPhoto}>
                        <AtomInput
                          label=" Sim kart no"
                          type="text"
                          value={simno}
                          onBlur={handleBlurSim}
                          onChange={handleChangeSim}
                          onFocus={handleFocus}
                        />

                        <img src='/./sim.png' />
                        {isFocused && formErrors.simno && (
                          <div style={{ color: 'red' }}>{formErrors.simno}</div>
                        )}
                      </div>
                      <p className={SimCardWriteLabel}>Sim kartınız üzerinde yandaki resimde gösterilen numarayı
                        girmelisiniz. </p>
                    </div>
                  </div>
                </div>
                <div className={styles.pukCodePageSimCaptchaForm}>
                  <Captcha
                    inputLabel="Güvenlik kodu"
                    isLoading={isLoading}
                    refreshCaptcha={() => {
                      getCaptchaa();
                    }}
                    onClick={handleFormSubmitSC}
                    style={{border: '2px solid red'}}
                    captcha={{
                      identifier: captchaResponse.identifier,
                      sound: captchaResponse.sound,
                      image: captchaResponse.image
                    }}
                  />

                </div>
              </div>
            ) : (
              isChecked2 ? (
                <div>
                  <div className={styles.pukCodePageTcForm}>
                    <div>
                      <AtomInput
                        label="İletşim No* (başında 0 olmadan)"
                        type="text"
                        value={gsmno}
                        onBlur={handleBlurGsm}
                        onChange={handleChange}
                        onFocus={handleFocus}
                      />
                      {isFocused && formErrors.gsmno && (
                        <div style={{ color: 'red' }}>{formErrors.gsmno}</div>
                      )}
                    </div>
                    <div>
                      <div>
                        <AtomInput
                          label="Tc kimlik Numarası"
                          type="text"
                          value={tcno}
                          onBlur={handleBlurTc}
                          onChange={handleChangeTc}
                          onFocus={handleFocus}
                        />
                        {isFocused && formErrors.tcno && (
                          <div style={{ color: 'red' }}>{formErrors.tcno}</div>
                        )}
                        <p className={pukCodeTcLabel}>Hat sahibinin TC Kimlik Numarasının girilmesi gerekiyor</p>
                      </div>
                    </div>
                    <div className={styles.pukCodePageTcDate}>
                      <div className={styles.pukCodePageTcDateInput}>
                        <DateInput
                          value=""
                          onChange={handleDateChange}
                        label=" Doğum Tarihi"

                        />
                        <p className={pukCodeTcLabel}>
                          Hat sahibinin doğum tarihinin girilmesi gerekiyor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pukCodePageTcCaptchaForm}>
                    <Captcha
                      inputLabel="Güvenlik kodu"
                      isLoading={isLoading}
                      refreshCaptcha={() => {
                        getCaptchaa();
                      }}
                      style={{border: '2px solid red'}}
                      captcha={{
                        identifier: captchaResponse.identifier,
                        sound: captchaResponse.sound,
                        image: captchaResponse.image
                      }}
                    />
                  </div>

                </div>
              ) : null
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PukCodePagesPrivate;
