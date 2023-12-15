import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {
  IconsAccountRegular,
  IconsTechSpecs,
} from "@others/icons";
import Menus from "../../src/components/Menus";
import label from "../../src/shared/localization/locales/tr_TR.json";
import {
  AtomButton,
  AtomInput,
  AtomRadioButton,
} from "@atoms";
import {MoleculeSelectBox, MyMoleculeCaptcha, MoleculeSwitch, DateInput} from "@molecules";
import "@others/assets/styles/fonts.scss";
import classNames from "classnames";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  MyCaptcha
} from "../../../../libs/dc-mfe-ui/src/lib/molecules/help-tools/help-tools-captcha/types/mycaptcha-interfaces";
import axios from "axios";
import api from "../../utils/api";
import {useForm} from "react-hook-form";

interface AlacakSorgulamaProps {
  defaultChecked: boolean
}
const AlacakSorgulama = ({defaultChecked}: AlacakSorgulamaProps) => {

  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputGsmIndividual, setInputGsmIndividual] = useState("");
  const [inputGsmInstitutional, setInputGsmInstitutional] = useState({});
  const [inputValueTc, setInputValueTc] = useState("");
  const [inputValueNameSurname, setInputValueNameSurname] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueSurname, setInputValueSurname] = useState("");
  const [inputValueBirthDate, setInputValueBirthDate] = useState("");
  const [inputValueTaxNo, setInputValueTaxNo] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("isChecked1");
  const [selectedOption, setSelectedOption] = useState("Seçiniz");
  const [isCheckedTc, setIsCheckedTc] = useState(true);
  const [isCheckedNoTc, setIsCheckedNoTc] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [inputValueCaptchaIndividualWithTc, setInputValueCaptchaIndividualWithTc] = useState('');
  const [inputValueCaptchaIndividualNoTc, setInputValueCaptchaIndividualNoTc] = useState('');
  const [inputValueCaptchaInstitutional, setInputValueCaptchaInstitutional] = useState('');


  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('');
        setPageData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  let validationSchemaIndividualWithTc;
  let validationSchemaIndividualNoTc;
  let validationSchemaInstitutional;

  if (pageData) {
    validationSchemaIndividualWithTc = Yup.object().shape({
      nameSurname: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      tcNo: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]),
      captchaIndividualWithTc: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
    });
  }

  if (pageData) {
    validationSchemaIndividualNoTc = Yup.object().shape({
      name: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      surname: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.simcard"]),
      gsmNoIndividual: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
      birthDate: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
      captchaIndividualNoTc: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),

    });
  }

  if (pageData) {
    const gsmValidation = {};

    const optionCount = Number(selectedOption);

    for (let rowIndex =1; rowIndex <= optionCount; rowIndex++) {
      const fieldName = `gsmNo${rowIndex}`;
      gsmValidation[fieldName] = Yup.string().required(`Lütfen ${fieldName} alanını doldurun`);
    }

    validationSchemaInstitutional = Yup.object().shape({
      taxNo: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]),
      captchaInstitutional: Yup.string().required(pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]),
      gsmNoInstitutional: Yup.object().shape(gsmValidation),
    });
  }

  const {
    register, handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(validationSchemaIndividualWithTc),
  });


  const handleBlurCaptchaIndividualWithTc = () => {
    if (pageData) {
      if (inputValueCaptchaIndividualWithTc.trim() === '') {
        setFormErrors({
          ...formErrors,
          captchaIndividualWithTc: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]
        });
      } else if (inputValueCaptchaIndividualWithTc.length < 8) {
        setFormErrors({
          ...formErrors,
          captchaIndividualWithTc: pageData.labelDTOList["helptools.pukcode.failmessage.input.captcha"]
        });
      } else {
        setFormErrors({...formErrors, captchaIndividualWithTc: ''});
      }

      setIsFocused(false);
    }
  };

  const handleBlurCaptchaIndividualNoTc = () => {
    if (pageData) {
      if (inputValueCaptchaIndividualNoTc.trim() === '') {
        setFormErrors({
          ...formErrors,
          captchaIndividualNoTc: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]
        });
      } else if (inputValueCaptchaIndividualNoTc.length < 8) {
        setFormErrors({
          ...formErrors,
          captchaIndividualNoTc: pageData.labelDTOList["helptools.pukcode.failmessage.input.captcha"]
        });
      } else {
        setFormErrors({...formErrors, captchaIndividualNoTc: ''});
      }

      setIsFocused(false);
    }
  };

  const handleBlurCaptchaInstitutional = () => {
    if (pageData) {
      if (inputValueCaptchaInstitutional.trim() === '') {
        setFormErrors({
          ...formErrors,
          captchaInstitutional: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.captcha"]
        });
      } else if (inputValueCaptchaInstitutional.length < 8) {
        setFormErrors({
          ...formErrors,
          captchaInstitutional: pageData.labelDTOList["helptools.pukcode.failmessage.input.captcha"]
        });
      } else {
        setFormErrors({...formErrors, captchaInstitutional: ''});
      }

      setIsFocused(false);
    }
  };

  const handleBlurGsmIndividual = () => {
    if (pageData) {
      if (inputGsmIndividual.trim() === '') {
        setFormErrors({
          ...formErrors,
          gsmNoIndividual: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"]
        });
      } else if (inputGsmIndividual.length < 10) {
        setFormErrors({
          ...formErrors,
          gsmNoIndividual: pageData.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"]
        });

      } else {
        setFormErrors({...formErrors, gsmNoIndividual: ''});
      }
      setIsFocused(false);
    }
  };


  const handleBlurTc = () => {
    if (pageData) {
      if (inputValueTc.trim() === '') {
        setFormErrors({
          ...formErrors,
          tcNo: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });
      } else if (inputValueTc.length < 11) {
        setFormErrors({...formErrors, tcNo: pageData.labelDTOList["helptools.pukcode.failmessage.input.tckimlikno"]});
      } else {
        setFormErrors({...formErrors, tcNo: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurNameSurname = () => {
    if (pageData) {
      if (inputValueNameSurname.trim() === '') {
        setFormErrors({
          ...formErrors,
          nameSurname: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });
      } else {
        setFormErrors({...formErrors, nameSurname: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurName = () => {
    if (pageData) {
      if (inputValueName.trim() === '') {
        setFormErrors({
          ...formErrors,
          name: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });
      } else {
        setFormErrors({...formErrors, name: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurSurname = () => {
    if (pageData) {
      if (inputValueSurname.trim() === '') {
        setFormErrors({
          ...formErrors,
          surname: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });
      } else {
        setFormErrors({...formErrors, surname: ''});
      }
      setIsFocused(false);
    }
  };

  const handleBlurTaxNo = () => {
    if (pageData) {
      if (inputValueTaxNo.trim() === '') {
        setFormErrors({
          ...formErrors,
          taxNo: pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.tckimlikno"]
        });
      } else {
        setFormErrors({...formErrors, taxNo: ''});
      }
      setIsFocused(false);
    }
  };


  const [formErrors, setFormErrors] = useState({
    tcNo: '',
    name: '',
    surname: '',
    nameSurname: '',
    birthDate: '',
    captchaIndividualWithTc: '',
    captchaIndividualNoTc: '',
    captchaInstitutional: '',
    gsmNoIndividual: '',
    gsmNoInstitutional: '',
    taxNo: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    nameSurname: '',
    name: '',
    surname: '',
    tcNo: '',
    birthDate: '',
    captchaIndividualWithTc: '',
    captchaIndividualNoTc: '',
    captchaInstitutional: '',
    gsmNoIndividual: '',
    gsmNoInstitutional: {},
    taxNo: ''
  });


  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };


  const options = [];

  for (let i = 1; i <= 20; i++) {
    const label = i;
    const value = i;
    options.push({label, value});

  }

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleBlurGsmInstitutional = (event, name) => {
    const inputGsmInstitutional = event.target.value;
    const fieldName = name || event.target.name;

    if (pageData) {
      let error = '';

      if (inputGsmInstitutional.trim() === '') {
        error = pageData.labelDTOList["helptools.pukcode.erroremptymessage.input.phonenumber"];
      } else if (inputGsmInstitutional.length < 10) {
        error = pageData.labelDTOList["helptools.pukcode.failmessage.input.phonenumber"];
      }

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error,
      }));

      setIsFocused(false);
    }
  };


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (event, setInputFunction) => {
    setInputFunction(event.target.value);
  };


  const handleInputChangeTC = (event, setInputFunction) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setInputFunction(input);
    }
    console.log(input);
  };

  const handleInputChangeTaxNo = (event, setInputFunction) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setInputFunction(input);
    }
    console.log(input);
  };


  const handleInputChangeCaptchaIndividualWithTc = (event) => {
    const input = event.target.value;
    if (input.length <= 8) {
      setInputValueCaptchaIndividualWithTc(input);
    }
  };

  const handleInputChangeCaptchaIndividualNoTc = (event) => {
    const input = event.target.value;

    if (input.length <= 8) {
      setInputValueCaptchaIndividualNoTc(input);
    }
  };

  const handleInputChangeCaptchaInstitutional = (event) => {
    const input = event.target.value;

    if (input.length <= 8) {
      setInputValueCaptchaInstitutional(input);
    }
  };


  const handleCheckboxChange = (selectedCheckbox) => {
    if (selectedCheckbox === "isChecked1") {
      setIsChecked1(true);
      setIsChecked2(false);
      setSelectedRadio("isChecked1");
    } else if (selectedCheckbox === "isChecked2") {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio("isChecked2");
    }
  };

  const handleSelectChange = (value) => {
    console.log("Seçilen değer:", value);
    setSelectedOption(value);

    if (value !== 'Seçiniz' && !isSelected) {
      setIsSelected(true);
    }
  };

  const handleDateChange = (value: string) => {
    console.log('Selected Date:', value);
    setInputValueBirthDate(value);

  };


  const handleChange = () => {
    if (isCheckedTc === true) {
      setIsCheckedTc(false);
      setIsCheckedNoTc(true);
    } else if (isCheckedNoTc === true) {
      setIsCheckedNoTc(false);
      setIsCheckedTc(true);
    }
  };

  const FirstLabel = classNames(
    'text-head-bold-l',
    styles.trkclAppPageReceivableContentFirstLabel
  );

  const SecondLabel = classNames(
    'text-body-regular-medium',
    styles.trkclAppPageReceivableContentSecondLabel
  );


  const ThirdLabel = classNames(
    showFullText && styles.trkclAppPageReceivableContentFullLabel,
    !showFullText && 'text-body-regular-medium',
    !showFullText && styles.trkclAppPageReceivableContentThirdLabel
  );

  const FourthLabel = classNames(
    showFullText && styles.trkclAppPageReceivableContentFullLabel,
    !showFullText && `text-body-regular-medium`,
    !showFullText && styles.trkclAppPageReceivableContentFourthLabel
  );


  const RadioButtonSelectedSC = classNames(
    {
      [styles.trkclAppPageReceivableContentChoiceRadioButtonSelected]: isChecked1,
      [styles.trkclAppPageReceivableContentChoiceRadioButtonUnSelected]: !isChecked1,
    }
  );

  const RadioButtonSelectedTC = classNames(
    {
      [styles.trkclAppPageReceivableContentChoiceRadioButtonSelected]: isChecked2,
      [styles.trkclAppPageReceivableContentChoiceRadioButtonUnSelected]: !isChecked2,
    }
  );


  const LabelSelectedSC = classNames(
    'text-body-bold',
    {[styles.trkclAppPagePukContentChoiceLabelSelected]: isChecked1}
  );

  const LabelSelectedTC = classNames(
    'text-body-bold',
    {[styles.trkclAppPagePukContentChoiceLabelSelected]: isChecked2}
  );

  const SwitchLabel = classNames(
    {
      [styles.trkclAppPageReceivableContentInvidualSwitchUnSelectedLabel]: isCheckedTc,
      [styles.trkclAppPageReceivableContentInvidualSwitchSelectedLabel]: !isCheckedTc
    },
  );


  const NameLabel = classNames(
    'text-legal-regular-medium',
    styles.trkclAppPageReceivableContentNameLabel
  );

  const TCLabel = classNames(
    'text-legal-regular-medium',
    styles.trkclAppPageReceivableContentTCLabel
  );


  const handleFormSubmit = async () => {
    let selectedValidationSchema;

    if (isChecked1 && isCheckedTc) {
      selectedValidationSchema = validationSchemaIndividualWithTc;
    } else if (isChecked1 && isCheckedNoTc) {
      selectedValidationSchema = validationSchemaIndividualNoTc;
    } else if(isChecked2){
      selectedValidationSchema = validationSchemaInstitutional;
    }else{
      selectedValidationSchema=null;
    }

    if (selectedValidationSchema) {
      await selectedValidationSchema.validate({
        gsmNoIndividual: inputGsmIndividual,
        gsmNoInstitutional: inputGsmInstitutional,
        captchaIndividualNoTc: inputValueCaptchaIndividualNoTc,
        captchaIndividualWithTc: inputValueCaptchaIndividualWithTc,
        captchaInstitutional: inputValueCaptchaInstitutional,
        nameSurname: inputValueNameSurname,
        name: inputValueName,
        surname: inputValueSurname,
        tcNo: inputValueTc,
        birthDate: inputValueBirthDate,
        taxNo: inputValueTaxNo
      }, {abortEarly: false})
        .then(valid => {
          console.log('Form doğrulandı!', valid);
          setValidationErrors({
            gsmNoIndividual: '',
            gsmNoInstitutional: {},
            captchaIndividualNoTc: '',
            captchaIndividualWithTc: '',
            captchaInstitutional: '',
            nameSurname: '',
            name: '',
            surname: '',
            tcNo: '',
            birthDate: '',
            taxNo: '',
          });
        })
        .catch(errors => {
          console.error('Form doğrulaması hatalı!', errors);
          console.log(errors);
          console.error('Form doğrulaması hatalı!', errors.errors);

          setValidationErrors(errors.inner.reduce((acc, error) => {
            if (error.path.startsWith('gsmNoInstitutional')) {
              const index = error.path.replace('gsmNoInstitutional[', '').replace(']', '');
              acc.gsmNoInstitutional = { ...acc.gsmNoInstitutional, [index]: error.message };
            } else {
              acc[error.path] = error.message;
            }

            console.log(acc)
            return acc;
          }, {}));




        });
    }
  };


  return (
    <>
      <div className={styles.trkclAppPageReceivable}>
        <Menus currentPage="alacak-sorgulama"/>
        {pageData && (
          <div className={styles.trkclAppPageReceivableContent}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={styles.trkclAppPageReceivableContentTitle}>
              <p className={FirstLabel}>{label["alacakSorgulama-title1"]}</p>
              <p className={SecondLabel}>{label["alacakSorgulama-title2"]}</p>
              <div className={styles.trkclAppPageReceivableContentSpan}>
                <p className={ThirdLabel}>
                  {label["alacakSorgulama-title3"]}
                </p>
                {!showFullText && (
                  <span
                    className={styles.trkclAppPageReceivableContentSpanShowMore}
                    onClick={toggleFullText}
                  >
        Daha Fazlası
       </span>
                )}
              </div>
              <p
                className={FourthLabel}>{label["alacakSorgulama-title4"]}</p>
              <p
                className={FourthLabel}>{label["alacakSorgulama-title5"]}</p>
              <div className={styles.trkclAppPageReceivableContentSpan}>
                <p
                  className={FourthLabel}>{label["alacakSorgulama-title6"]}</p>

              </div>
            </div>


            <div className={styles.trkclAppPageReceivableContentChoice}>
              <AtomRadioButton radioButtonName={""}
                               element={<div className={styles.trkclAppPageReceivableContentChoiceRadioButton}>
                                 <IconsAccountRegular
                                   className={RadioButtonSelectedSC}/>
                                 <div className={styles.trkclAppPageReceivableContentChoiceRadioButtonTitle}><p
                                   className={LabelSelectedSC}>{label["bireysel"]}</p>
                                   <p
                                     className="text-legal-regular-medium">{label["with-simcardno-info"]}</p></div>
                               </div>}
                               value="isChecked1"
                               currentCheckedValue="isChecked1"
                               checked={selectedRadio === "isChecked1"}
                               onClick={() => handleCheckboxChange(
                                 "isChecked1")}
              />
              <AtomRadioButton radioButtonName={""}
                               element={<div className={styles.trkclAppPageReceivableContentChoiceRadioButton}>
                                 <IconsTechSpecs
                                   className={RadioButtonSelectedTC}/>
                                 <div className={styles.trkclAppPageReceivableContentChoiceRadioButtonTitle}><p
                                   className={LabelSelectedTC}>{label["kurumsal"]}</p>
                                   <p
                                     className="text-legal-regular-medium">{label["with-tcno-info"]}</p></div>
                               </div>}
                               value="isChecked2"
                               currentCheckedValue="isChecked2"
                               checked={selectedRadio === "isChecked2"}
                               onClick={() => handleCheckboxChange(
                                 "isChecked2")}
              />
            </div>


            {isChecked1 && isCheckedTc ? (
              <div className={styles.trkclAppPageReceivableContentInvidual}>
                <div className={styles.trkclAppPageReceivableContentInvidualFirstScrow}>
                  <div className={styles.trkclAppPageReceivableContentInvidualSwitch}>
                    <MoleculeSwitch label="TC Vatandaşıyım" checked={isCheckedTc} onChange={handleChange}
                                      className={SwitchLabel}/>
                  </div>

                  <div></div>
                </div>
                <div className={styles.trkclAppPageReceivableContentInvidualFirstScrow}>
                  <div>
                    <div className={styles.trkclAppPageReceivableContentInput}>
                      <AtomInput
                        label="Ad Soyad*"
                        name="nameSurname"
                        value={inputValueNameSurname}
                        onBlur={handleBlurNameSurname}
                        onFocus={handleFocus}
                        onChange={(event) => handleInputChange(event, setInputValueNameSurname)}
                        message={formErrors.nameSurname || validationErrors.nameSurname}
                        statusType={(formErrors.nameSurname || validationErrors.nameSurname) ? 'error' : undefined}/>
                    </div>
                    <p className={NameLabel}>Ad Soyad Bilgisini Giriniz</p>
                  </div>
                  <div>
                    <div className={styles.trkclAppPageReceivableContentInput}>
                      <AtomInput
                        label="TC Kimlik Numarası"
                        name="tcNo"
                        value={inputValueTc}
                        onBlur={handleBlurTc}
                        onFocus={handleFocus}
                        onChange={(event) => handleInputChangeTC(event, setInputValueTc)}
                        message={formErrors.tcNo || validationErrors.tcNo}
                        statusType={(formErrors.tcNo || validationErrors.tcNo) ? 'error' : undefined}
                      />
                    </div>
                    <p className={TCLabel}>TC KİMLİK NUMARASINI ÖĞRENMEK İÇİN
                      TIKLAYINIZ</p>
                  </div>
                </div>
                <div className={styles.trkclAppPageReceivableContentInvidualSecondScrow}>
                  <MyMoleculeCaptcha value={inputValueCaptchaIndividualWithTc}
                                     onBlur={handleBlurCaptchaIndividualWithTc}
                                     onChangee={handleInputChangeCaptchaIndividualWithTc}
                                     text={pageData.labelDTOList["helptools.pukcode.withsim.label.captcha"]}
                                     inputLabel={pageData.labelDTOList["helptools.pukcode.withidnumber.label.securitycode"]}
                                     isCaptchaOk={(isCaptchaValid) => {

                                       console.log("heyesfuys")
                                       if (isCaptchaValid) {
                                         console.log('Captcha doğru.');
                                       } else {
                                         console.log('Captcha yanlış.');
                                       }
                                     }}
                                     message={formErrors.captchaIndividualWithTc || validationErrors.captchaIndividualWithTc}
                                     statusType={(formErrors.captchaIndividualWithTc || validationErrors.captchaIndividualWithTc) ? 'error' : undefined}/>
                </div>
                <div className={styles.trkclAppPageReceivableContentInvidualThirdScrow}>
                  <div></div>
                  <AtomButton text="Sorgula" variant="secondary"
                              className={styles.trkclAppPageReceivableContentInvidualButton} onClick={handleFormSubmit}/>
                </div>
              </div>
            ) : (
              isChecked2 ? (
                  <div className={styles.trkclAppPageReceivableContentInstitutional}>
                    <div className={styles.trkclAppPageReceivableContentInstitutionalFirstRow}>
                      <div  className={styles.trkclAppPageReceivableContentInput}>
                        <AtomInput
                          label="Vergi Numaramız*"
                          name="taxNo"
                          value={inputValueTaxNo}
                          onBlur={handleBlurTaxNo}
                          onFocus={handleFocus}
                          onChange={(event) => handleInputChangeTaxNo(event, setInputValueTaxNo)}
                          message={formErrors.taxNo || validationErrors.taxNo}
                          statusType={(formErrors.taxNo || validationErrors.taxNo) ? 'error' : undefined}
                        />
                      </div>
                      <div className={styles.trkclAppPageReceivableContentInstitutionalSelectBox}>
                        <MoleculeSelectBox label="Sorgulamak İstediğiniz Gsm Numarası Sayısı" value={selectedOption}
                                           onChange={handleSelectChange} options={options}/>
                      </div>
                    </div>

                    {isSelected ? (
                      <div>
                        {Array.from({length: Math.ceil(parseInt(selectedOption) / 2)}).map((_, rowIndex) => (
                          <div key={rowIndex} className={styles.trkclAppPageReceivableContentInstitutionalGsm}>
                            {rowIndex === Math.floor(parseInt(selectedOption) / 2) && parseInt(selectedOption) % 2 !== 0 ? (
                              <div className={styles.trkclAppPageReceivableContentInstitutionalGsmRow}>
                                <div className={styles.trkclAppPageReceivableContentInput}>
                                  <AtomInput
                                    label={`GSM Numarası ${rowIndex * 2 + 1} * (başında 0 olmadan)`}
                                    name={`gsmNo${rowIndex * 2 + 1}`}
                                    value={inputGsmInstitutional[`gsmNo${rowIndex * 2 + 1}`] || ''}
                                    onBlur={(event) => handleBlurGsmInstitutional(event, `gsmNo${rowIndex * 2 + 1}`)}
                                    onFocus={handleFocus}
                                    onChange={(event) => handleInputChange(event, (value) => setInputGsmInstitutional((prevValues) => ({
                                      ...prevValues,
                                      [`gsmNo${rowIndex * 2 + 1}`]: value,
                                    })))}
                                    message={formErrors[`gsmNo${rowIndex * 2 + 1}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 1}`]}
                                    statusType={(formErrors[`gsmNo${rowIndex * 2 + 1}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 1}`]) ? 'error' : undefined}                             />
                                </div>

                              </div>
                            ) : (
                              <>
                                <div className={styles.trkclAppPageReceivableContentInstitutionalGsmRow}>
                                  <div  className={styles.trkclAppPageReceivableContentInput}>
                                    <AtomInput
                                      label={`GSM Numarası ${rowIndex * 2 + 1} * (başında 0 olmadan)`}
                                      name={`gsmNo${rowIndex * 2 + 1}`}
                                      value={inputGsmInstitutional[`gsmNo${rowIndex * 2 + 1}`] || ''}
                                      onBlur={(event) => handleBlurGsmInstitutional(event, `gsmNo${rowIndex * 2 + 1}`)}
                                      onFocus={handleFocus}
                                      onChange={(event) => handleInputChange(event, (value) => setInputGsmInstitutional((prevValues) => ({
                                        ...prevValues,
                                        [`gsmNo${rowIndex * 2 + 1}`]: value,
                                      })))}
                                      message={formErrors[`gsmNo${rowIndex * 2 + 1}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 1}`]}
                                      statusType={(formErrors[`gsmNo${rowIndex * 2 + 1}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 1}`]) ? 'error' : undefined}                                    />
                                  </div>
                                  <div className={styles.trkclAppPageReceivableContentInput}>
                                    <AtomInput
                                      label={`GSM Numarası ${rowIndex * 2 + 2} * (başında 0 olmadan)`}
                                      name={`gsmNo${rowIndex * 2 + 2}`}
                                      value={inputGsmInstitutional[`gsmNo${rowIndex * 2 + 2}`] || ''}
                                      onBlur={(event) => handleBlurGsmInstitutional(event, `gsmNo${rowIndex * 2 + 2}`)}
                                      onFocus={handleFocus}
                                      onChange={(event) => handleInputChange(event, (value) => setInputGsmInstitutional((prevValues) => ({
                                        ...prevValues,
                                        [`gsmNo${rowIndex * 2 + 2}`]: value,
                                      })))}
                                      message={formErrors[`gsmNo${rowIndex * 2 + 2}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 2}`]}
                                      statusType={(formErrors[`gsmNo${rowIndex * 2 + 2}`] || validationErrors.gsmNoInstitutional[`gsmNoInstitutional.gsmNo${rowIndex * 2 + 2}`]) ? 'error' : undefined}
                                    />
                                  </div>

                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}


                    <div className={styles.trkclAppPageReceivableContentInstitutionalSecondRow}>
                      <MyMoleculeCaptcha value={inputValueCaptchaInstitutional} onBlur={handleBlurCaptchaInstitutional}
                                         onChangee={handleInputChangeCaptchaInstitutional}
                                         text={pageData.labelDTOList["helptools.pukcode.withsim.label.captcha"]}
                                         inputLabel={pageData.labelDTOList["helptools.pukcode.withidnumber.label.securitycode"]}
                                         isCaptchaOk={(isCaptchaValid) => {

                                           console.log("heyesfuys")
                                           if (isCaptchaValid) {
                                             console.log('Captcha doğru.');
                                           } else {
                                             console.log('Captcha yanlış.');
                                           }
                                         }}
                                         message={formErrors.captchaInstitutional || validationErrors.captchaInstitutional}
                                         statusType={(formErrors.captchaInstitutional || validationErrors.captchaInstitutional) ? 'error' : undefined}/>
                    </div>
                    <div className={styles.trkclAppPageReceivableContentInstitutionalThirdRow}>
                      <div></div>
                      <AtomButton text="Sorgula" variant="secondary"
                                  className={styles.trkclAppPageReceivableContentInvidualButton} onClick={handleFormSubmit}/>
                    </div>
                  </div>
                ) :
                (isChecked1 && isCheckedNoTc ? (
                    <div className={styles.trkclAppPageReceivableContentInvidual}>
                      <div className={styles.trkclAppPageReceivableContentInvidualFirstScrow}>
                        <div className={styles.trkclAppPageReceivableContentInvidualSwitch}>
                          <MoleculeSwitch label="TC Vatandaşıyım" checked={isCheckedTc} onChange={handleChange}
                                            className={SwitchLabel}/>
                        </div>
                        <div></div>
                      </div>
                      <div className={styles.trkclAppPageReceivableContentInvidualFirstRowNoTc}>
                        <div  className={styles.trkclAppPageReceivableContentInput}>
                          <AtomInput
                            label="Ad*"
                            name="name"
                            value={inputValueName}
                            onBlur={handleBlurName}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChange(event, setInputValueName)}
                            message={formErrors.name || validationErrors.name}
                            statusType={(formErrors.name || validationErrors.name) ? 'error' : undefined}
                          />
                        </div>
                        <div  className={styles.trkclAppPageReceivableContentInput}>
                          <AtomInput
                            label="Soyad*"
                            name="surname"
                            value={inputValueSurname}
                            onBlur={handleBlurSurname}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChange(event, setInputValueSurname)}
                            message={formErrors.surname || validationErrors.surname}
                            statusType={(formErrors.surname || validationErrors.surname) ? 'error' : undefined}
                          />
                        </div>
                      </div>
                      <div className={styles.trkclAppPageReceivableContentInvidualSecondRowNoTc}>
                        <div  className={styles.trkclAppPageReceivableContentInput}>
                          <AtomInput
                            label="GSM Numaranız* (başında 0 olmadan)"
                            name="gsmNo"
                            value={inputValueCaptchaIndividualNoTc}
                            onBlur={handleBlurGsmIndividual}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChange(event, setInputGsmIndividual)}
                            message={formErrors.gsmNoIndividual || validationErrors.gsmNoIndividual}
                            statusType={(formErrors.gsmNoIndividual || validationErrors.gsmNoIndividual) ? 'error' : undefined}
                          />
                        </div>
                        <div className={styles.trkclAppPageReceivableContentDateInput}>
                          <DateInput value={inputValueBirthDate} onChange={handleDateChange}
                                     message={formErrors.birthDate || validationErrors.birthDate}
                                     statusType={(formErrors.birthDate || validationErrors.birthDate) ? 'error' : undefined}
                                     label={pageData.labelDTOList["helptools.pukcode.withidnumber.birdhdate"]}
                                     name="birthDate"
                          />
                          <p className={NameLabel}>Hat sahibinin doğum tarihinin girilmesi
                            gerekiyor.</p>

                        </div>
                      </div>
                      <div className={styles.trkclAppPageReceivableContentInvidualSecondScrow}>
                        <MyMoleculeCaptcha value={inputValueCaptchaIndividualNoTc}
                                           onBlur={handleBlurCaptchaIndividualNoTc}
                                           onChangee={handleInputChangeCaptchaIndividualNoTc}
                                           text={pageData.labelDTOList["helptools.pukcode.withsim.label.captcha"]}
                                           inputLabel={pageData.labelDTOList["helptools.pukcode.withidnumber.label.securitycode"]}
                                           isCaptchaOk={(isCaptchaValid) => {

                                             console.log("heyesfuys")
                                             if (isCaptchaValid) {
                                               console.log('Captcha doğru.');
                                             } else {
                                               console.log('Captcha yanlış.');
                                             }
                                           }}
                                           message={formErrors.captchaIndividualNoTc || validationErrors.captchaIndividualNoTc}
                                           statusType={(formErrors.captchaIndividualNoTc || validationErrors.captchaIndividualNoTc) ? 'error' : undefined}/>
                      </div>
                      <div className={styles.trkclAppPageReceivableContentInvidualRowNoTc}>
                        <div></div>
                        <AtomButton text="Sorgula" variant="secondary"
                                    className={styles.trkclAppPageReceivableContentInvidualButton} onClick={handleFormSubmit}/>
                      </div>
                    </div>)
                  : null)
            )}
            </form>
          </div>
        )}
      </div>

    </>
  );
};

export default AlacakSorgulama;
