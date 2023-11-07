import React, {useContext, useState} from "react";
import styles from "./index.module.scss";
import {
  IconsAccountRegular,
  IconsSim,
  IconsTechSpecs,
} from "@others/icons";
import Menus from "../../src/components/Menus";
import label from "../../src/shared/localization/locales/tr_TR.json";
import {
  AtomButton,
  AtomInput,
  AtomRadioButton,
  AtomDatePicker,
  AtomTermsRegistrationCheckbox,
  AtomBadgeStatus
} from "@atoms";
import {MoleculeSelectBox, MyMoleculeCaptcha, MoleculeMySwitch} from "@molecules";
import {Radio, Select} from "antd";
import {BadgeStatusType} from "@others/enums/badgeStatusType";


interface AlacakSorgulamaProps {
  defaultChecked: boolean
}

const AlacakSorgulama = ({defaultChecked}: AlacakSorgulamaProps) => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibletc, setIsVisibletc] = useState(false);
  const [isVisible1, setIsVisible1] = useState(true)
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("isChecked1");
  const [selectedOption, setSelectedOption] = useState("Seçiniz");
  const [isCheckedTc, setIsCheckedTc] = useState(true);
  const [isCheckedNoTc, setIsCheckedNoTc] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };


  const options = [];

  for (let i = 1; i <= 20; i++) {
    const label = i;
    const value = i;
    options.push({label, value});

  }

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (event, setInputFunction) => {
    setInputFunction(event.target.value);
  };


  const handleCheckboxChange = (selectedCheckbox) => {
    if (selectedCheckbox === "isChecked1") {
      setIsChecked1(true);
      setIsChecked2(false);
      setSelectedRadio("isChecked1");
      setIsVisible(true);
      setIsVisibletc(false);
    } else if (selectedCheckbox === "isChecked2") {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio("isChecked2");
      setIsVisible(false);
      setIsVisibletc(true);
    }
  };

  const handleSelectChange = (value) => {
    console.log("Seçilen değer:", value);
    setSelectedOption(value);

    if (value !== 'Seçiniz' && !isSelected) {
      setIsSelected(true);
    }
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


  return (
    <>
      <div className={styles.puk}>
        <Menus currentPage="alacak-sorgulama"/>
        <div className={styles.div}>
          <div className={styles.divtitle}>
            <p className={styles.p1}>{label["alacakSorgulama-title1"]}</p>
            <p className={styles.p5}>{label["alacakSorgulama-title2"]}</p>
            <div className={styles.spandiv}>
              <p className={showFullText ? styles.full : styles.p10}>
                {label["alacakSorgulama-title3"]}
              </p>
              {!showFullText && (
                <span
                  className={styles.showMore}
                  onClick={toggleFullText}
                >
        Daha Fazlası
      </span>
              )}
            </div>
            <p className={showFullText ? styles.full : styles.p4}>{label["alacakSorgulama-title4"]}</p>
            <p className={showFullText ? styles.full : styles.p4}>{label["alacakSorgulama-title5"]}</p>
            <div className={styles.spandiv}>
              <p className={showFullText ? styles.full : styles.p4}>{label["alacakSorgulama-title6"]}</p>
              {showFullText && (
                <span
                  className={styles.showMore}
                  onClick={toggleFullText}
                >
        Daha Azı
      </span>
              )}
            </div>
          </div>


          <div className={styles.checkboxs}>
            <div className={styles.boxcheckbox}>
              <AtomRadioButton radioButtonName={""} element={<div className={styles.divradio}><IconsAccountRegular
                className={isChecked1 ? styles.pradioSelected : styles.pradio}/>
                <div className={styles.divr}><p
                  className={isChecked1 ? styles.pradioSelectedlabel : styles.pradiolabel}>{label["bireysel"]}</p><p
                  className={styles.pst}>{label["with-simcardno-info"]}</p></div>
              </div>}
                               value="isChecked1"
                               currentCheckedValue="isChecked1"
                               checked={selectedRadio === "isChecked1"}
                               onClickFn={() => handleCheckboxChange(
                                 "isChecked1")}
              />
            </div>
            <div className={styles.boxcheckbox}>
              <AtomRadioButton radioButtonName={""} element={<div className={styles.divradio}><IconsTechSpecs
                className={isChecked2 ? styles.pradioSelected : styles.pradio}/>
                <div className={styles.divr}>
                  <p className={isChecked2 ? styles.pradioSelectedlabel : styles.pradiolabel}>{label["kurumsal"]}</p><p
                  className={styles.pst}>{label["with-tcno-info"]}</p></div>
              </div>} value="isChecked2"
                               currentCheckedValue="isChecked2"
                               checked={selectedRadio === "isChecked2"}
                               onClickFn={() => handleCheckboxChange("isChecked2")}/>

            </div>
          </div>

          {isChecked1 && isCheckedTc ? (
            <div className={styles.simcontent}>
              <div className={styles.scrow1}>
                <div className={styles.switchdiv}>
                  <MoleculeMySwitch label="TC Vatandaşıyım" checked={isCheckedTc} onChange={handleChange}
                                    className={isCheckedTc ? styles.tcswitchstyle : styles.switchstyle}/>
                </div>

                <div></div>
              </div>
              <div className={styles.scrow1}>
                <div>
                  <div>
                    <AtomInput
                      label="Ad Soyad*"
                      name="iletisimno"
                      value={inputValue}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onChange={(event) => handleInputChange(event, setInputValue)}
                      className={styles.input}/>
                  </div>
                  <p className={styles.p3}>Ad Soyad Bilgisini Giriniz</p>
                </div>
                <div>
                  <div>
                    <AtomInput
                      label="TC Kimlik Numarası"
                      name="simcardno"
                      value={inputValue1}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onChange={(event) => handleInputChange(event, setInputValue1)}
                      className={styles.input}/>
                  </div>
                  <p className={styles.p6}>TC KİMLİK NUMARASINI ÖĞRENMEK İÇİN TIKLAYINIZ</p>
                </div>
              </div>
              <div className={styles.scrow2}>
                <MyMoleculeCaptcha inputLabel="Güvenlik Kodu" isCaptchaOk={(isCaptchaValid) => {
                  console.log("heyesfuys");
                  if (isCaptchaValid) {
                    console.log("Captcha doğru.");
                  } else {
                    console.log("Captcha yanlış.");
                  }
                }}/>
              </div>
              <div className={styles.scrow3}>
                <div></div>
                <AtomButton text="Sorgula" variant="secondary" className={styles.button}/>
              </div>
            </div>
          ) : (
            isVisibletc ? (
                <div className={styles.tccontent}>
                  <div className={styles.tcrow1}>
                    <div>
                      <AtomInput
                        label="Vergi Numaramız*"
                        name="vergino"
                        value={inputValue3}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChange={(event) => handleInputChange(event, setInputValue3)}
                        className={styles.input}/>
                    </div>
                    <div className={styles.selectBox}>
                      <MoleculeSelectBox label="Sorgulamak İstediğiniz Gsm Numarası Sayısı" value={selectedOption}
                                         onChange={handleSelectChange} options={options}/>
                    </div>
                  </div>

                  {isSelected ? (
                    <div className={styles.gsmrow}>
                      <div></div>
                      <div>
                        {Array.from({length: parseInt(selectedOption, 10)}).map((_, index) => (
                          <AtomInput
                            placeholder="5XXXXXXXXX"
                            key={index}
                            name={`gsmno${index}`}
                            value={inputValue3}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            onChange={(event) => handleInputChange(event, setInputValue3)}
                            className={styles.inputgsm}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className={styles.scrow2}>
                    <MyMoleculeCaptcha inputLabel="Güvenlik Kodu" isCaptchaOk={(isCaptchaValid) => {
                      console.log("heyesfuys");
                      if (isCaptchaValid) {
                        console.log("Captcha doğru.");
                      } else {
                        console.log("Captcha yanlış.");
                      }
                    }}/>
                  </div>
                  <div className={styles.tcrow4}>
                    <div></div>
                    <AtomButton text="Sorgula" variant="secondary" className={styles.button}/>
                  </div>
                </div>
              ) :
              (isChecked1 && isCheckedNoTc ? (
                  <div className={styles.tccontent}>
                    <div className={styles.scrow1}>
                      <div className={styles.switchdiv}>
                        <MoleculeMySwitch label="TC Vatandaşıyım" checked={isCheckedTc} onChange={handleChange}
                                          className={isCheckedTc ? styles.tcswitchstyle : styles.switchstyle}/>
                      </div>
                      <div></div>
                    </div>
                    <div className={styles.tcrow1}>
                      <div>
                        <AtomInput
                          label="Ad*"
                          name="name"
                          value={inputValue3}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                          onChange={(event) => handleInputChange(event, setInputValue3)}
                          className={styles.input}/>
                      </div>
                      <div>
                        <AtomInput
                          label="Soyad*"
                          name="surName"
                          value={inputValue3}
                          onBlur={handleBlur}
                          onFocus={handleFocus}
                          onChange={(event) => handleInputChange(event, setInputValue3)}
                          className={styles.input}/>
                      </div>
                    </div>
                    <div className={styles.scrow4}>
                      <AtomInput
                        label="GSM Numaranız* (başında 0 olmadan)"
                        name="gsm"
                        value={inputValue3}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChange={(event) => handleInputChange(event, setInputValue3)}
                        className={styles.input}/>
                      <AtomDatePicker label="Doğum Tarihi" className={styles.input} placeholder="Doğum Tarihi"/>
                    </div>
                    <div className={styles.scrow2}>
                      <MyMoleculeCaptcha inputLabel="Güvenlik Kodu" isCaptchaOk={(isCaptchaValid) => {
                        console.log("heyesfuys");
                        if (isCaptchaValid) {
                          console.log("Captcha doğru.");
                        } else {
                          console.log("Captcha yanlış.");
                        }
                      }}/>
                    </div>
                    <div className={styles.tcrow4}>
                      <div></div>
                      <AtomButton text="Sorgula" variant="secondary" className={styles.button}/>
                    </div>
                  </div>)
                : null)
          )}
        </div>
      </div>

    </>
  );
};

export default AlacakSorgulama;
