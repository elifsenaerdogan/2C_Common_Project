import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import Menus from '../../src/components/Menus';
import {AtomInput, AtomRadioButton} from '@atoms';
import IconsSim from '@others/icons/IconsSim';
import IconsTechSpecs from "@others/icons/IconsTechSpecs";
import classNames from 'classnames';
import {DateInput} from "@molecules";
import Captcha from "../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import axios, {AxiosResponse} from "axios";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useQuery} from "@tanstack/react-query";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {getPukWithTc, useByTcNumberService} from "../../services/api/byTcNumberServices";
import {useCaptchaService, getCaptcha} from "../../services/api/captchaServices";
import {useBySimNumberService, getPukWithSim} from "../../services/api/bySimNumberServices";


const PukCodePagesPrivate = () => {
  const queryClient = new QueryClient();

  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('isChecked1');
  const [tcno, settcno] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [tckn, setTckn] = useState('');
  const [gsmno, setgsmno] = useState('');
  const [simno, setSimno] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [inputValueCaptcha, setInputValueCaptcha] = useState('');
  const [inputValuecaptcha, setInputValuecaptcha] = useState('');
  const [isVisiblePageResponse, setIsvisiblePageResponse] = useState(false);

  const [formErrors, setFormErrors] = useState({
    gsmno: '',
    simno: '',
    tcno: '',
    birthDate: '',
    captcha: '',
  });

  const [validationErrorsSC, setValidationErrorsSC] = useState({
    gsmno: '',
    simno: '',
    captcha: '',
  });

  const [validationErrorsTC, setValidationErrorsTC] = useState({
    gsmno: '',
    tcno: '',
    birthDate: '',
    captcha: '',
  });
  const [captchaResponse, setCaptchaResponse] = useState({
    identifier: '',
    sound: '',
    image: ''
  });
    const birthDay = inputValue1.substring(0, 2);
    const birthMonth = inputValue1.substring(5, 8);
    const birthYear = inputValue1.substring(10, 15);

    const { data: captchaData, isLoading: captchaIsLoading, refetch: captchaRefetch } = useCaptchaService();
    const { data: byTcNumberData, isLoading: byTcNumberIsLoading, refetch: byTcNumberRefetch } = useByTcNumberService(gsmno, tcno, birthDay, birthMonth, birthYear, captchaData?.identifier,inputValue);
    const { data: bySimNumberData, isLoading: bySimNumberIsLoading, refetch: bySimNumberRefetch } = useBySimNumberService(gsmno, simno, captchaData?.identifier,inputValue);





    const {  error: pageError } = useQuery({
        queryKey: ['fetchPageData'],
        queryFn: async () => {
            try {
                const response = await axios.get('/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager');
                console.log('API Response:', response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        },
    });

    useEffect(() => {
        console.log('useEffect triggered');
        console.log('pageData:', pageData);
        console.log('pageError:', pageError);

        if (pageData) {
            console.log('Setting page data:', pageData);
            setPageData(pageData);
        }
        if (pageError) {
            console.error('Error fetching page data:', pageError);
        }
    }, [pageData, pageError]);






  let validationSchemaWithTCNo;
  let validationSchemaWithSimCard;

  if (pageData) {
    validationSchemaWithSimCard = Yup.object().shape({
      gsmno: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      simno: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simno"]),
      captcha: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
    });
  } else {
    validationSchemaWithSimCard = Yup.object().shape({
      gsmno: Yup.string().required('İletişim No zorunludur'),
      simno: Yup.string().required('Sim Kart No zorunludur'),
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
  const handleInputChangeTel = (event, setInputFunction) => {
    const input = event.target.value;

    if (/^\d*$/.test(input) && input.length <= 10) {
      if (input.length === 1 && input[0] === '0') {
        setInputFunction('');
      } else {
        setgsmno(input)
        setInputFunction(input);
        setFormErrors({...formErrors, gsmno: ''});
      }
    }
  };

  const handleInputChangeSim = (event, setInputFunction) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 12) {
      setSimno(input);
      setInputFunction(input);
      setFormErrors({...formErrors, simno: ''});
    }
  };

  const handleInputChangeTC = (event, setInputFunction) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setTckn(input);
      setInputFunction(input);
      setFormErrors({...formErrors, tcno: ''});

    }
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
      setSelectedRadio('isChecked1');
        captchaRefetch();
    } else if (selectedCheckbox === 'isChecked2') {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio('isChecked2');
        captchaRefetch();
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
    setInputValue1(value);

  };

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
  }

  const handleBlurSim = () => {
    if (pageData) {
      if (simno.trim() === '') {
        setFormErrors({
          ...formErrors,
          simno: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]
        });
      } else if (simno.length < 12) {
        setFormErrors({...formErrors, simno: 'Sim Card No Eksik Girdiniz'});
      } else {
        setFormErrors({...formErrors, simno: ''});
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

    const onSubmit = (data, inputValue) => {
        if(isChecked1){
            getPukWithSim(inputValue, data);
        }else if(isChecked2){
            getPukWithTc(inputValue, data)
        }
    };

    const handleButtonClick = (inputValue) => {
        handleSubmit(onSubmit)(inputValue);
    };





    const handleFormSubmitSC = async (formData) => {
        try {
            await validationSchemaWithSimCard.validate(formData, { abortEarly: false });
            setValidationErrorsSC({
                gsmno: '',
                simno: '',
                captcha: '',
            });
            handleCaptchaSubmit(formData);
        } catch (errors) {
            console.error('Form doğrulaması hatalı!', errors);
            console.error('Form doğrulaması hatalı!', errors.errors);
            setValidationErrorsSC(errors.inner.reduce((acc, error) => {
                acc[error.path] = error.message;
                return acc;
            }, {}));
        }
    };
  const handleCaptchaSubmit = (formData) => {
    console.log('Captcha submitted:', formData.captcha);
  };




  const { handleSubmit, register, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchemaWithSimCard),
  });

  const pukCodePageWriteII = classNames(
    'text-body-regular-medium',
    styles.pukCodePageWriteII
  );
  const pukCodePageWriteI = classNames(
    'text-body-regular-medium',
    styles.pukCodePageWriteI
  );

  return (
    <>

      <div className={styles.pukCodePage}>
          <Menus currentPage="puk-kodu"/>
        {!isVisiblePageResponse && pageData && (
        <div className={styles.pukCodePageP}>
          <div>
          <div className={styles.pukCodePageWritesIII}>
            <p className={pukCodePageWriteI}>{pageData.labelDTOList["helptools.pukcode.title.page"]}</p>
            <p className={pukCodePageWriteII}> {!isVisiblePageResponse
              ? pageData.labelDTOList["helptools.pukcode.label.title"]
              : pageData.labelDTOList["helptools.pukcode.response.label"]}</p>
          </div>
          </div>
          <div>
            <div className={styles.pukCodePageAtomRadioButtons}>
              <AtomRadioButton
                radioButtonName={" "}
                element={<div className={styles.pukCodePageSimIconText}>
                <IconsSim className={RadioButtonSim}/>
                  <div className={styles.pukCodePageSim}>
                    <p className={pukCodePageSimI}>{pageData.labelDTOList["helptools.pukcode.title.simcard"]}</p>
                    <p className={pukCodePageSimII} style={{ whiteSpace: 'nowrap' }}>{pageData.labelDTOList["helptools.pukcode.label.simcard"]}</p>
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
                    <p className={pukCodePageTcI}>{pageData.labelDTOList["helptools.pukcode.title.tcno"]}</p>
                    <p className={pukCodePageTcII} style={{ whiteSpace: 'nowrap' }}>{pageData.labelDTOList["helptools.pukcode.label.withidnumber"]}</p>
                  </div>
                </div>}
                value="isChecked2"
                currentCheckedValue="isChecked2"
                checked={isChecked2}
                onClick={() => handleCheckboxChange('isChecked2')}
              />
            </div>
            {isChecked1 ? (
              <form>
              <div>
                <div className={styles.pukCodePageContentSim}>
                  <div className={styles.pukCodeContentInputs}>
                    <div className={styles.pukCodePageSimAtomInput}>
                      <Controller
                        name="gsmno"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Gsmno is required"}}
                        render={({ field }) => (
                          <div>
                            <AtomInput
                              {...field}
                              label={pageData.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
                              value={field.value}
                              onBlur={handleBlurGsm}
                              onFocus={handleFocus}
                              message={(formErrors.gsmno || errors.gsmno?.message) as string}
                              onChange={(event) => handleInputChangeTel(event, field.onChange)}
                              statusType={(formErrors.gsmno || errors.gsmno) ? 'error' : undefined}/>
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <div className={styles.pukCodeContentInputsSimCardPhoto}>
                        <Controller
                          name="simno"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Simno is required"}}
                          render={({ field }) => (
                            <div>
                        <AtomInput
                          {...field}
                          label= {pageData.labelDTOList["helptools.pukcode.withsim.input.simcard"]}
                          type="text"
                          value={field.value}
                          onBlur={handleBlurSim}
                          onFocus={handleFocus}
                          message={(formErrors.simno || errors.simno?.message) as string}
                          onChange={(event) => handleInputChangeSim(event, field.onChange)}
                          statusType={(formErrors.simno || errors.simno) ? 'error' : undefined}/>
                            </div>
                          )}
                          />
                        <img src='/./sim.png' />
                      </div>
                      <p className={SimCardWriteLabel}>{pageData.labelDTOList["helptools.pukcode.withsim.label.simcard"]}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.pukCodePageSimCaptchaForm}>
                  <Captcha
                    inputLabel="Güvenlik kodu"
                    isLoading={isLoading}
                    refreshCaptcha={() => {
                      captchaRefetch();
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
              </form>
            ) : (
              isChecked2 ? (
                <div>
                  <form>
                  <div className={styles.pukCodePageTcForm}>
                    <div className={styles.pukCodePageTcAtomInput}>
                      <Controller
                        name="gsmno"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Gsmno is required"}}
                        render={({ field }) => (
                          <div>
                            <AtomInput
                              {...field}
                              label={pageData.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
                              value={field.value}
                              onBlur={handleBlurGsm}
                              onFocus={handleFocus}
                              message={(formErrors.gsmno || errors.gsmno?.message) as string}
                              onChange={(event) => handleInputChangeTel(event, field.onChange)}
                              statusType={(formErrors.gsmno || errors.gsmno) ? 'error' : undefined}/>
                          </div>
                        )}
                      />
                    </div>
                    <div className={styles.pukCodePageTcAtomInput}>
                      <div>
                        <Controller
                          name="tcno"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Tcno is required"}}
                          render={({ field }) => (
                            <div>
                              <AtomInput
                                {...field}
                          label={pageData.labelDTOList["helptools.pukcode.withidnumber.input.idnumber"]}
                          type="text"
                          value={field.value}
                          onBlur={handleBlurTc}
                          onFocus={handleFocus}
                                message={(formErrors.tcno || errors.tcno?.message) as string}
                                onChange={(event) => handleInputChangeTC(event, field.onChange)}
                                statusType={(formErrors.tcno || errors.tcno) ? 'error' : undefined}/>

                        <p className={pukCodeTcLabel}>{pageData.labelDTOList["helptools.pukcode.withidnumber.label.idnumber"]}</p>
                            </div>
                          )}
                        />
                            </div>
                    </div>
                    <div className={styles.pukCodePageTcDate}>
                      <div className={styles.pukCodePageTcDateInput}>
                        <Controller
                          name="birthDate"
                          control={control}
                          defaultValue=""
                          rules={{ required: "birthDate is required"}}
                          render={({ field }) => (
                            <div>
                        <DateInput
                          {...field}
                          value= {field.value}
                          onChange={handleDateChange}
                          message={(formErrors.birthDate || errors.birthDate?.message) as string}
                          statusType={(formErrors.birthDate || errors.birthDate) ? 'error' : undefined}
                          label={pageData.labelDTOList["helptools.pukcode.withidnumber.birdhdate"]}
                        />



                        <p className={pukCodeTcLabel}>
                          {pageData.labelDTOList["helptools.pukcode.withidnumber.label.birdhdate"]}
                        </p>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.pukCodePageTcCaptchaForm}>
                    <Captcha
                      inputLabel="Güvenlik kodu"
                      isLoading={isLoading}
                      refreshCaptcha={() => {
                        captchaRefetch();
                      }}
                      style={{border: '2px solid red'}}
                      captcha={{
                        identifier: captchaResponse.identifier,
                        sound: captchaResponse.sound,
                        image: captchaResponse.image
                      }}
                      onClick={handleButtonClick}
                    />
                  </div>
                  </form>
                </div>
              ) : null
              )}
          </div>
        </div>
          )}
      </div>

    </>
  );
};

export default PukCodePagesPrivate;
