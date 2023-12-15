import React, {useState, useEffect} from "react";
import styles from './index.module.scss';

import Menus from "../../src/components/Menus";
import {AtomButton, AtomInput, AtomRadioButton} from "@atoms";
import {MyMoleculeCaptcha, DateInput} from "@molecules";

import classNames from 'classnames';
import IconsTechSpecs from "@others/icons/IconsTechSpecs";
import IconsSim from "@others/icons/IconsSim";
import {useForm, useController} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import api from "../../utils/api";
import axios, {AxiosResponse} from "axios";
import {
  MyCaptcha, MyCaptchaPropTypes
} from "../../../../libs/dc-mfe-ui/src/lib/molecules/help-tools/help-tools-captcha/types/mycaptcha-interfaces";

import * as url from "url";
import Captcha from "../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";


const PukKoduSorgulama = () => {

  const [isLoading, setIsLoading] = useState(false);

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

      const data = responsee.data; //?
      setCaptchaResponse(data);
    } catch (err) {
      console.error('Error fetching captcha:', err);
    } finally {
      setIsLoading(false)
    }

  }

  const getPukWithTc = async (inputValue) => {
    try {
      const responsee = await axios.post(
        `/api/puk/by-tckn`,
        {
          gsmno: gsmno,
          tckn: tckn,
          birthDay: birthDay,
          birthMonth: birthMonth,
          birthYear: birthYear,
          identifier: captchaResponse.identifier,
        },

        {
          withCredentials: false,
          headers: {
            'User-Msisdn': '5342747425',
            'Language-Prefix': 'tr',
            'Channel-Type': 'WEB',
            'User-SessionId': '20221228114048_3976B6DF6E44428DB5B861CA20F5C1C5',
            'User-ClientIp': '127.0.0.1',
            'User-ClientPort': '8080',
          },
          params: {
            captcha: inputValue
          },
        }
      );
      console.log(responsee)
    } catch (err) {
      console.error('Error fetching captcha:', err);
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager`);
        setPageData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
    getCaptchaa();

  }, []);


  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [simNumber, setSimNumber] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValueCaptcha, setInputValueCaptcha] = useState('');
  const [inputValuecaptcha, setInputValuecaptcha] = useState('');
  const [gsmno, setgsmno] = useState('');
  const [tckn, setTckn] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [selectedRadio, setSelectedRadio] = useState("isChecked1");
  const [pageData, setPageData] = useState(null);
  const [image, setImage] = useState("")
  const [isVisiblePageResponse, setIsvisiblePageResponse] = useState(false
  );


  const birthDay = inputValue6.substring(0, 2);
  const birthMonth = inputValue6.substring(5, 8);
  const birthYear = inputValue6.substring(10, 15);

  console.log("day:", birthDay, "month:", birthMonth, "year:", birthYear)

  let validationSchemaWithTCNo;
  let validationSchemaWithSimCard;

  if (pageData) {
    validationSchemaWithSimCard = Yup.object().shape({
      gsmno: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      simNumber: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]),
      captcha: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
    });
  } else {
    validationSchemaWithSimCard = Yup.object().shape({
      gsmno: Yup.string().required('İletişim No zorunludur'),
      simNumber: Yup.string().required('Sim Kart No zorunludur'),
      captcha: Yup.string().required('Güvenlik Kodu Zorunludur'),
    });
  }

  if (pageData) {
    validationSchemaWithTCNo = Yup.object().shape({
      gsmno: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      tcno: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]),
      birthDate: Yup.string().required('Doğum Tarihi zorunludur').nullable(),
      captcha: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
    });
  }


  const {
    register, handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(validationSchemaWithSimCard),
  });


  const handleBlurGsm = () => {
    if (pageData) {
      if (gsmno.trim() === '') {
        setFormErrors({
          ...formErrors,
          gsmno: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]
        });
      } else if (gsmno.length < 10) {
        setFormErrors({...formErrors, gsmno: pageData.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"]});

      } else {
        setFormErrors({...formErrors, gsmno: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurScn = () => {
    if (pageData) {
      if (simNumber.trim() === '') {
        setFormErrors({
          ...formErrors,
          simNumber: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]
        });
      } else if (simNumber.length < 12) {
        setFormErrors({...formErrors, simNumber: 'Sim Card No Eksik Girdiniz'});
      } else {
        setFormErrors({...formErrors, simNumber: ''});
      }
      setIsFocused(false);
    }
  };


  const handleBlurCaptcha = () => {
    if (pageData) {
      if (inputValueCaptcha.trim() === '') {
        setFormErrors({
          ...formErrors,
          captcha: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]
        });
      } else if (inputValueCaptcha.length < 8) {
        setFormErrors({...formErrors, captcha: pageData.labelDTOList["helptools.pukcode.failmessage.input.captcha"]});
      } else {
        setFormErrors({...formErrors, captcha: ''});
      }

      setIsFocused(false);
    }
  };

  const handleBlurcaptcha = () => {
    if (pageData) {
      if (inputValuecaptcha.trim() === '') {
        setFormErrors({
          ...formErrors,
          captcha: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]
        });
      } else if (inputValuecaptcha.length < 8) {
        setFormErrors({...formErrors, captcha: pageData.labelDTOList["helptools.pukcode.failmessage.input.captcha"]});
      } else {
        setFormErrors({...formErrors, captcha: ''});
      }

      setIsFocused(false);
    }
  };

  const handleBlurGsmTc = () => {
    if (pageData) {
      if (gsmno.trim() === '') {
        setFormErrors({
          ...formErrors,
          gsmno: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]
        });
      } else if (gsmno.length < 10) {
        setFormErrors({
          ...formErrors,
          gsmno: pageData.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"]
        });
      } else {
        setFormErrors({...formErrors, gsmno: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurTc = () => {
    if (pageData) {
      if (tckn.trim() === '') {
        setFormErrors({
          ...formErrors,
          tcno: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });

      } else if (tckn.length < 11) {
        setFormErrors({...formErrors, tcno: pageData.labelDTOList["helptools.pukcode.failmessage.input.tckimlikno"]});
      } else {
        setFormErrors({...formErrors, tcno: ''});
      }
      setIsFocused(false);
    }
  };


  const handleFocus = () => {
    setIsFocused(true);
  };


  const [formErrors, setFormErrors] = useState({
    gsmno: '',
    simNumber: '',
    tcno: '',
    birthDate: '',
    captcha: '',
  });

  const [validationErrorsSC, setValidationErrorsSC] = useState({
    gsmno: '',
    simNumber: '',
    captcha: '',
  });

  const [validationErrorsTC, setValidationErrorsTC] = useState({
    gsmno: '',
    tcno: '',
    birthDate: '',
    captcha: '',
  });


  const handleInputChangeTel = (event, setInputFunction) => {
    const input = event.target.value;

    if (/^\d*$/.test(input) && input.length <= 10) {
      if (input.length === 1 && input[0] === '0') {
        setInputFunction('');
      } else {
        setInputFunction(input);
        setFormErrors({...formErrors, gsmno: ''});
      }
    }
  };

  const handleInputChangeSim = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 12) {
      setSimNumber(input);
      setFormErrors({...formErrors, simNumber: ''});
    }
  };

  const handleInputChangeTC = (event, setInputFunction) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setInputFunction(input);
    }
    console.log(input);
  };
  const handleInputChangeCaptcha = (event) => {
    const input = event.target.value;

    if (input.length <= 8) {
      setInputValueCaptcha(input);
    }
  };
  const handleInputChangecaptcha = (event) => {
    const input = event.target.value;

    if (input.length <= 8) {
      setInputValuecaptcha(input);
    }
  };
  const handleCheckboxChange = (selectedCheckbox) => {
    if (selectedCheckbox === 'isChecked1') {
      setIsChecked1(true);
      setIsChecked2(false);
      setSelectedRadio('isChecked1')
      getCaptchaa();
    } else if (selectedCheckbox === 'isChecked2') {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio('isChecked2')
      getCaptchaa();

    }
  };


  const SimCardLabel = classNames(
    'text-legal-regular-medium',
    styles.trkclAppPagePukContentWithSimCardLabel
  );

  const TCLabel = classNames(
    `text-legal-regular-medium`,
    styles.trkclAppPagePukContentWithTCNoLabel
  )
  const PukContentFirstLabel = classNames(
    'text-head-bold-l',
    styles.trkclAppPagePukContentFirstLabel
  );


  const PukContentSecondLabel = classNames(
    'text-body-regular-medium',
    styles.trkclAppPagePukContentSecondLabel
  );
  const RadioButtonSelectedSC = classNames(
    {
      [styles.trkclAppPagePukContentChoiceRadioButtonSelected]: isChecked1,
      [styles.trkclAppPagePukContentChoiceRadioButtonUnSelected]: !isChecked1,
    }
  );
  const RadioButtonSelectedTC = classNames(
    {
      [styles.trkclAppPagePukContentChoiceRadioButtonSelected]: isChecked2,
      [styles.trkclAppPagePukContentChoiceRadioButtonUnSelected]: !isChecked2,
    }
  );
  const LabelSelectedSC = classNames(
    'text-body-bold',
    styles.trkclAppPagePukContentLabelRadio,
    {[styles.trkclAppPagePukContentChoiceLabelSelected]: isChecked1}
  );
  const LabelSelectedTC = classNames(
    'text-body-bold',
    styles.trkclAppPagePukContentLabelRadio,
    {[styles.trkclAppPagePukContentChoiceLabelSelected]: isChecked2}
  );

  const LabelDetailSC = classNames(
    'text-legal-regular-medium',
  )
  const handleDateChange = (value: string) => {
    console.log('Selected Date:', value);
    setInputValue6(value);

  };
  const handleFormSubmitSC = async (inputValue) => {
    const selectedValidationSchema = validationSchemaWithSimCard

    if (selectedValidationSchema) {
      await selectedValidationSchema.validate({
        gsmno: gsmno,
        simNumber: simNumber,
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

  const handleFormSubmitTC = async (inputValue) => {



    if (validationSchemaWithTCNo) {
      await validationSchemaWithTCNo.validate({
        gsmno: gsmno,
        tcno: tckn,
        birthDate: inputValue6,
        captcha: inputValue,
      }, {abortEarly: false})
        .then(valid => {
          console.log('Form doğrulandı!', valid);
          setValidationErrorsTC({
            gsmno: '',
            tcno: '',
            birthDate: '',
            captcha: '',
          });
        })
        .then(getPukWithTc(inputValue))
        .catch(errors => {
          console.error('Form doğrulaması hatalı!', errors);
          console.log(errors);
          console.error('Form doğrulaması hatalı!', errors.errors);

          setValidationErrorsTC(errors.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
          }, {}));
          console.log(validationErrorsTC);
        });
    }
  };


  const [captchaResponse, setCaptchaResponse] = useState({
    identifier: '',
    sound: '',
    image: ''
  });


  return (
    <>
      <div className={styles.trkclAppPagePuk}>
        <Menus currentPage="puk-kodu"/>
        {!isVisiblePageResponse && pageData && (
          <div className={styles.trkclAppPagePukContent}>
            <div className={styles.trkclAppPagePukContentTitle}>
              <p className={PukContentFirstLabel}>{pageData.labelDTOList["helptools.pukcode.title.page"]}</p>
              <p className={PukContentSecondLabel}>
                {!isVisiblePageResponse
                  ? pageData.labelDTOList["helptools.pukcode.label.title"]
                  : pageData.labelDTOList["helptools.pukcode.response.label"]}
              </p>
            </div>
            <div>
              <div className={styles.trkclAppPagePukContentChoice}>
                <AtomRadioButton radioButtonName={""}
                                 element={<div className={styles.trkclAppPagePukContentChoiceRadioButton}><IconsSim
                                   className={RadioButtonSelectedSC}/>
                                   <div className={styles.trkclAppPagePukContentChoiceRadioButtonTitle}><p
                                     className={LabelSelectedSC}>{pageData.labelDTOList["helptools.pukcode.title.simcard"]}</p>
                                     <p
                                       className={LabelDetailSC}>{pageData.labelDTOList["helptools.pukcode.label.simcard"]}</p>
                                   </div>
                                 </div>}
                                 value="isChecked1"
                                 currentCheckedValue="isChecked1"
                                 checked={isChecked1}
                                 onClick={() => handleCheckboxChange('isChecked1')}
                />
                <AtomRadioButton radioButtonName={""}
                                 element={<div className={styles.trkclAppPagePukContentChoiceRadioButton}>
                                   <IconsTechSpecs
                                     className={RadioButtonSelectedTC}/>
                                   <div className={styles.trkclAppPagePukContentChoiceRadioButtonTitle}>
                                     <p
                                       className={LabelSelectedTC}>{pageData.labelDTOList["helptools.pukcode.title.tckimlikno"]}</p>
                                     <p
                                       className="text-legal-regular-medium">{pageData.labelDTOList["helptools.pukcode.label.withidnumber"]}</p>
                                   </div>
                                 </div>} value="isChecked2"
                                 currentCheckedValue="isChecked2"
                                 checked={isChecked2}
                                 onClick={() => handleCheckboxChange('isChecked2')}/>
              </div>
              {isChecked1 ? (
                <form onSubmit={handleSubmit(handleFormSubmitSC)}>
                  <div className={styles.trkclAppPagePukContentWithSimCard}>
                    <div className={styles.trkclAppPagePukContentWithSimCardFirstScrow}>
                      <div className={styles.trkclAppPagePukContentInput}>
                        <AtomInput
                          label={pageData.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
                          name="gsmno"
                          value={gsmno}
                          onBlur={handleBlurGsm}
                          onFocus={handleFocus}
                          message={formErrors.gsmno || validationErrorsSC.gsmno}
                          onChange={(event) => handleInputChangeTel(event, setgsmno)}
                          statusType={(formErrors.gsmno || validationErrorsSC.gsmno) ? 'error' : undefined}/>
                      </div>
                      <div>
                        <div className={styles.trkclAppPagePukContentWithSimCardInputSimCard}>
                          <AtomInput
                            label={pageData.labelDTOList["helptools.pukcode.withsim.input.simcard"]}
                            name="simNumber"
                            value={simNumber}
                            onBlur={handleBlurScn}
                            onFocus={handleFocus}
                            message={formErrors.simNumber || validationErrorsSC.simNumber}
                            onChange={(event) => handleInputChangeSim(event)}
                            statusType={(formErrors.simNumber || validationErrorsSC.simNumber) ? 'error' : undefined}/>
                          <img className={styles.trkclAppPagePukContentWithSimCardImage}
                               src='/photos/simcard.png'></img>
                        </div>
                        <p
                          className={SimCardLabel}>{pageData.labelDTOList["helptools.pukcode.withsim.label.simcard"]}</p>

                      </div>
                    </div>
                    <div className={styles.trkclAppPagePukContentWithSimCardSecondScrow}>
                      <Captcha inputLabel="Güvenlik Kodu"
                               isLoading={isLoading}
                               refreshCaptcha={() => {
                                 console.log('Captcha yenilendi');
                                 getCaptchaa();
                               }}
                               onClick={handleFormSubmitSC}
                               style={{border: '2px solid red'}}
                               captcha={{
                                 identifier: captchaResponse.identifier,
                                 sound: captchaResponse.sound,
                                 image: captchaResponse.image
                               }}/>
                    </div>
                  </div>
                </form>
              ) : (
                isChecked2 ? (
                  <div className={styles.trkclAppPagePukContentWithTCNo}>
                    <form onSubmit={handleSubmit(handleFormSubmitTC)}>
                      <div className={styles.trkclAppPagePukContentWithTCNoFirstRow}>
                        <div className={styles.trkclAppPagePukContentInput}>
                          <AtomInput
                            label={pageData.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
                            name="gsmno"
                            value={gsmno}
                            message={formErrors.gsmno || validationErrorsTC.gsmno}
                            onBlur={handleBlurGsmTc}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChangeTel(event, setgsmno)}
                            statusType={(formErrors.gsmno || validationErrorsTC.gsmno) ? 'error' : undefined}/>

                        </div>
                        <div className={styles.trkclAppPagePukContentInput}>
                          <AtomInput
                            label={pageData.labelDTOList["helptools.pukcode.withidnumber.input.idnumber"]}
                            name="tcno"
                            value={tckn}
                            message={formErrors.tcno || validationErrorsTC.tcno}
                            onBlur={handleBlurTc}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChangeTC(event, setTckn)}
                            statusType={(formErrors.tcno || validationErrorsTC.tcno) ? 'error' : undefined}/>
                          <p
                            className={TCLabel}>{pageData.labelDTOList["helptools.pukcode.withidnumber.label.idnumber"]}</p>
                        </div>
                      </div>
                      <div className={styles.trkclAppPagePukContentWithTCNoSecondRow}>
                        <div className={styles.trkclAppPagePukContentInput}>
                          <DateInput value={inputValue6} onChange={handleDateChange}
                                     message={formErrors.birthDate || validationErrorsTC.birthDate}
                                     statusType={(formErrors.birthDate || validationErrorsTC.birthDate) ? 'error' : undefined}
                                     label={pageData.labelDTOList["helptools.pukcode.withidnumber.birdhdate"]}
                                     name="birthDate"
                          />
                          <p
                            className={TCLabel}>{pageData.labelDTOList["helptools.pukcode.withidnumber.label.birdhdate"]}</p>
                        </div>

                      </div>
                      <div className={styles.trkclAppPagePukContentWithTCNoThirdRow}>
                        <Captcha inputLabel="Güvenlik Kodu"
                                 isLoading={isLoading}
                                 refreshCaptcha={() => {
                                   console.log('Captcha yenilendi');
                                   getCaptchaa();
                                 }}
                                 style={{border: '2px solid red'}}
                                 captcha={{
                                   identifier: captchaResponse.identifier,
                                   sound: captchaResponse.sound,
                                   image: captchaResponse.image
                                 }}
                                 onClick={handleFormSubmitTC}/>
                      </div>
                    </form>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
        {isVisiblePageResponse && pageData && (
          <div>
            <div className={styles.trkclAppPagePukContentTitle}>
              <p className={PukContentFirstLabel}>{pageData.labelDTOList["helptools.pukcode.title.page"]}</p>
              <p className={PukContentSecondLabel}>
                {!isVisiblePageResponse
                  ? pageData.labelDTOList["helptools.pukcode.label.title"]
                  : pageData.labelDTOList["helptools.pukcode.response.label"]}
              </p>
            </div>
            <div className={styles.trkclAppPagePukContentResponse}>
              <p className={PukContentFirstLabel}>{pageData.labelDTOList["helptools.pukcode.response.puk1"]}</p>
              <p className={PukContentFirstLabel}>34453636</p>
            </div>
            <div className={styles.trkclAppPagePukResponseTitle}>
              <p className={PukContentSecondLabel}>{pageData.labelDTOList["helptools.pukcode.response.puk1.label"]}</p>
            </div>
            <div className={styles.trkclAppPagePukContentResponse}>
              <p className={PukContentFirstLabel}>{pageData.labelDTOList["helptools.pukcode.response.puk2"]}</p>
              <p className={PukContentFirstLabel}>34453636</p>
            </div>
            <div className={styles.trkclAppPagePukResponseTitle}>
              <p className={PukContentSecondLabel}>{pageData.labelDTOList["helptools.pukcode.response.puk2.label"]}</p>
            </div>
            <div className={styles.trkclAppPagePukContentWithTCNoFourthRow}>
              <div></div>
              <AtomButton text={pageData.labelDTOList["helptools.pukcode.response.button"]} variant="secondary"
                          className={styles.trkclAppPagePukContentWithTCNoButton}
              />
            </div>


          </div>
        )}
      </div>
    </>
  )
}

export default PukKoduSorgulama;
