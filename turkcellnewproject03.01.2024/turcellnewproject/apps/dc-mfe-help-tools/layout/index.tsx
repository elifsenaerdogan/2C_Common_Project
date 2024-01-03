import React, {useState} from 'react';
import styles from './index.module.scss';
import Menus from '../src/components/Menus';
import {AtomButton, AtomInput, AtomRadioButton} from '@atoms';
import IconsSim from '@others/icons/IconsSim';
import IconsTechSpecs from "@others/icons/IconsTechSpecs";
import classNames from 'classnames';
import {DateInput} from "@molecules";
import Captcha from "../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import axios, {AxiosResponse} from "axios";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useQuery} from "@tanstack/react-query";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {useGetPukWithTc} from "../services/api/byTcNumberServices";
import {useCaptchaService, getCaptcha} from "../services/api/captchaServices";
import {useGetPukWithSc} from "../services/api/bySimNumberServices";
import {usePageManagerService} from "../services/api/pageManagerServices";


const Layout = () => {
    const queryClient = new QueryClient();

    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState('isChecked1');
    const [tcno, settcno] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [tckn, setTckn] = useState('');
    const [gsmno, setgsmno] = useState('');
    const [simNumber, setsimNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValueCaptcha, setInputValueCaptcha] = useState('');
    const [inputValuecaptcha, setInputValuecaptcha] = useState('');
    const [isVisiblePageResponse, setIsvisiblePageResponse] = useState(false);
    const [responsePukScPuk1, setResponsePukScPuk1] = useState('');
    const [responsePukScPuk2, setResponsePukScPuk2] = useState('');
    const [responsePukTcPuk1, setResponsePukTcPuk1] = useState('');
    const [responsePukTcPuk2, setResponsePukTcPuk2] = useState('');
    const [isVisiblePageResponseWithTc, setIsvisiblePageResponseWithTc] = useState(false);
    const [isVisiblePageResponseWithSc, setIsvisiblePageResponseWithSc] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('');
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
    const [captchaResponse, setCaptchaResponse] = useState({
        identifier: '',
        sound: '',
        image: ''
    });
    const birthDay = inputValue1.substring(0, 2);
    const birthMonth = inputValue1.substring(5, 8);
    const birthYear = inputValue1.substring(10, 15);

    const {data: captchaData, isLoading: captchaIsLoading, refetch: captchaRefetch} = useCaptchaService();
    const {data: pageManagerData, isLoading: pageIsLoading, refetch: pageRefetch} = usePageManagerService();

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
            setsimNumber(input);
            setInputFunction(input);
            setFormErrors({...formErrors, simNumber: ''});
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
        if (pageManagerData) {
            if (gsmno.trim() === '') {
                setFormErrors({
                    ...formErrors,
                    gsmno: pageManagerData?.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]
                });
            } else if (gsmno.length < 10) {
                setFormErrors({...formErrors, gsmno: pageManagerData?.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"]});

            } else {
                setFormErrors({...formErrors, gsmno: ''});
            }
            setIsFocused(false);
        }
    }

    const handleBlurSim = () => {
        if (pageManagerData) {
            if (simNumber.trim() === '') {
                setFormErrors({
                    ...formErrors,
                    simNumber: pageManagerData?.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]
                });
            } else if (simNumber.length < 12) {
                setFormErrors({...formErrors, simNumber: 'Sim Card No Eksik Girdiniz'});
            } else {
                setFormErrors({...formErrors, simNumber: ''});
            }
            setIsFocused(false);
        }
    };
    const handleBlurGsmTc = () => {
        if (pageManagerData) {
            if (gsmno.trim() === '') {
                setFormErrors({
                    ...formErrors,
                    gsmno: pageManagerData?.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]
                });
            } else if (gsmno.length < 10) {
                setFormErrors({
                    ...formErrors,
                    gsmno: pageManagerData?.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"]
                });
            } else {
                setFormErrors({...formErrors, gsmno: ''});
            }
            setIsFocused(false);
        }
    };

    const handleBlurTc = () => {
        if (pageManagerData) {
            if (tckn.trim() === '') {
                setFormErrors({
                    ...formErrors,
                    tcno: pageManagerData?.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
                });

            } else if (tckn.length < 11) {
                setFormErrors({...formErrors, tcno: pageManagerData?.labelDTOList["helptools.pukcode.failmessage.input.tckimlikno"]});
            } else {
                setFormErrors({...formErrors, tcno: ''});
            }
            setIsFocused(false);
        }
    };


    const handleFocus = () => {
        setIsFocused(true);
    };

    const {control, handleSubmit, register, formState: {errors}} = useForm();


    const getPukSimData = useGetPukWithSc(gsmno, simNumber, captchaData?.identifier, captchaValue);
    const getPukTcData = useGetPukWithTc(gsmno, tckn, birthDay, birthMonth, birthYear, captchaData?.identifier, captchaValue);

    const getPukDataSim = async () => {
        try {
            const res = await getPukSimData.mutateAsync()
            setResponsePukScPuk1(res.data.pukNumber);
            setResponsePukScPuk2(res.data.puk2Number);
            setIsvisiblePageResponseWithSc(false);
            return res;
        } catch (error) {
            setIsvisiblePageResponseWithSc(true);
            captchaRefetch();

        }
    }
    const getPukDataTc = async () => {
        try {
            const res = await getPukTcData.mutateAsync()
            setResponsePukTcPuk1(res?.data.pukNumber);
            setResponsePukTcPuk2(res?.data.puk2Number);
            setIsvisiblePageResponseWithTc(false);
            return res;
        } catch (error) {
            setIsvisiblePageResponseWithTc(true);
            captchaRefetch();
        }
    }

    const onSubmit = async () => {
        if (isChecked1) {
            await getPukDataSim()
        } else if (isChecked2) {
            await getPukDataTc()
        }
    }
    const handleButtonClick = async (inputValue) => {
        await onSubmit();
        setCaptchaValue(inputValue);
    }


    const pukCodePageTitleWriteSecond = classNames(
        'text-body-regular-medium',
        styles.trkcellpukCodePageTitleWriteSecond
    );
    const pukCodePageTitleWriteFirst = classNames(
        'text-head-bold-l',
        styles.trkcellpukCodePageTitleWriteFirst
    );

  const handleButtonReloadPage = () => {
    window.location.reload();
  };

    return (
        <>

            <div className={styles.pukCodePage}>
                <Menus currentPage="puk-kodu"/>
                {!isVisiblePageResponseWithTc && !isVisiblePageResponseWithSc && (
                    <div className={styles.pukCodePageP}>
                        <div>
                            <div className={styles.pukCodePageTitleWrite}>
                                <p className={pukCodePageTitleWriteFirst}>{pageManagerData?.labelDTOList["helptools.pukcode.title.page"]}</p>
                                <p className={pukCodePageTitleWriteSecond}>
                                    {!isVisiblePageResponseWithTc && !isVisiblePageResponseWithSc
                                        ? pageManagerData?.labelDTOList["helptools.pukcode.label.title"]
                                        : pageManagerData?.labelDTOList["helptools.pukcode.response.label"]}</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.pukCodePageAtomRadioButtons}>
                                <AtomRadioButton
                                    radioButtonName={" "}
                                    element={<div className={styles.pukCodePageSimIconText}>
                                        <IconsSim className={RadioButtonSim}/>
                                        <div className={styles.pukCodePageSim}>
                                            <p className={pukCodePageSimI}>{pageManagerData?.labelDTOList["helptools.pukcode.title.simcard"]}</p>
                                            <p className={pukCodePageSimII}
                                               style={{whiteSpace: 'nowrap'}}>{pageManagerData?.labelDTOList["helptools.pukcode.label.simcard"]}</p>
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
                                            <p className={pukCodePageTcI}>{pageManagerData?.labelDTOList["helptools.pukcode.title.tcno"]}</p>
                                            <p className={pukCodePageTcII}
                                               style={{whiteSpace: 'nowrap'}}>{pageManagerData?.labelDTOList["helptools.pukcode.label.withidnumber"]}</p>
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
                                                        rules={{required: "Gsmno is required"}}
                                                        render={({field}) => (
                                                            <div>
                                                                <AtomInput
                                                                    {...field}
                                                                    label={pageManagerData?.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
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
                                                            name="simNumber"
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{required: "simNumber is required"}}
                                                            render={({field}) => (
                                                                <div>
                                                                    <AtomInput
                                                                        {...field}
                                                                        label={pageManagerData?.labelDTOList["helptools.pukcode.withsim.input.simcard"]}
                                                                        type="text"
                                                                        value={field.value}
                                                                        onBlur={handleBlurSim}
                                                                        onFocus={handleFocus}
                                                                        message={(formErrors.simNumber || errors.simNumber?.message) as string}
                                                                        onChange={(event) => handleInputChangeSim(event, field.onChange)}
                                                                        statusType={(formErrors.simNumber || errors.simNumber) ? 'error' : undefined}/>
                                                                </div>
                                                            )}
                                                        />
                                                        <img src='/./sim.png'/>
                                                    </div>
                                                    <p className={SimCardWriteLabel} >{pageManagerData?.labelDTOList["helptools.pukcode.withsim.label.simcard"]}</p>
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
                                                onClick={handleButtonClick}
                                                style={{border: '2px solid red'}}
                                                captcha={{
                                                    identifier: captchaData?.identifier,
                                                    sound: captchaData?.sound,
                                                    image: captchaData?.image
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
                                                        rules={{required: "Gsmno is required"}}
                                                        render={({field}) => (
                                                            <div>
                                                                <AtomInput
                                                                    {...field}
                                                                    label={pageManagerData?.labelDTOList["helptools.pukcode.withsim.input.phonenumber"]}
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
                                                            rules={{required: "Tcno is required"}}
                                                            render={({field}) => (
                                                                <div>
                                                                    <AtomInput
                                                                        {...field}
                                                                        label={pageManagerData?.labelDTOList["helptools.pukcode.withidnumber.input.idnumber"]}
                                                                        type="text"
                                                                        value={field.value}
                                                                        onBlur={handleBlurTc}
                                                                        onFocus={handleFocus}
                                                                        message={(formErrors.tcno || errors.tcno?.message) as string}
                                                                        onChange={(event) => handleInputChangeTC(event, field.onChange)}
                                                                        statusType={(formErrors.tcno || errors.tcno) ? 'error' : undefined}/>

                                                                    <p className={pukCodeTcLabel}>{pageManagerData?.labelDTOList["helptools.pukcode.withidnumber.label.idnumber"]}</p>
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
                                                            rules={{required: "birthDate is required"}}
                                                            render={({field}) => (
                                                                <div>
                                                                    <DateInput
                                                                        {...field}
                                                                        value={field.value}
                                                                        onChange={handleDateChange}
                                                                        message={(formErrors.birthDate || errors.birthDate?.message) as string}
                                                                        statusType={(formErrors.birthDate || errors.birthDate) ? 'error' : undefined}
                                                                        label={pageManagerData?.labelDTOList["helptools.pukcode.withidnumber.birdhdate"]}
                                                                    />


                                                                    <p className={pukCodeTcLabel}>
                                                                        {pageManagerData?.labelDTOList["helptools.pukcode.withidnumber.label.birdhdate"]}
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
                                                        identifier: captchaData?.identifier,
                                                        sound: captchaData?.sound,
                                                        image: captchaData?.image
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
                {(isVisiblePageResponseWithTc || isVisiblePageResponseWithSc) && (
                  <>
                    <div>
                        <div className={styles.pukCodePageTitleWrite}>
                            <p className={pukCodePageTitleWriteFirst}>{pageManagerData?.labelDTOList["helptools.pukcode.title.page"]}</p>
                            <p className={pukCodePageTitleWriteSecond}>
                                {!isVisiblePageResponseWithTc && !isVisiblePageResponseWithSc
                                ? pageManagerData?.labelDTOList["helptools.pukcode.label.title"]
                                : pageManagerData?.labelDTOList["helptools.pukcode.response.label"]}</p>
                        </div>

                        <div className={styles.PukPageResponse}>
                            <div>
                                <p className={pukCodePageTitleWriteFirst}>{pageManagerData?.labelDTOList["helptools.pukcode.response.puk1"]}</p>
                              <p className={pukCodePageTitleWriteFirst}>34453636</p>
                            </div>
                            <div>
                                <p className={pukCodePageTitleWriteSecond}>{pageManagerData?.labelDTOList["helptools.pukcode.response.puk1.label"]}</p>
                            </div>
                            <div>
                                <p className={pukCodePageTitleWriteFirst}>{pageManagerData?.labelDTOList["helptools.pukcode.response.puk2"]}</p>
                              <p className={pukCodePageTitleWriteFirst}>34453636</p>
                            </div>
                            <div>
                                <p className={pukCodePageTitleWriteSecond}>{pageManagerData?.labelDTOList["helptools.pukcode.response.puk2.label"]}</p>
                            </div>

                        </div>
                      <AtomButton text={pageManagerData.labelDTOList["helptools.pukcode.response.button"]} variant={"secondary"} className={styles.pukCodePageResponseButton} onClick={handleButtonReloadPage}>

                      </AtomButton>


                    </div>
                  </>

                )}
            </div>


        </>
    );
};

export default Layout;
