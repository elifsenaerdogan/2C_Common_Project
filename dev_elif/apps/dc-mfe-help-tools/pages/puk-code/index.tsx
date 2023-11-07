import React, {useState} from "react";
import styles from './index.module.scss';
import {
  IconsSim,
  IconsTechSpecs,
} from "@others/icons";
import Menus from "../../src/components/Menus";
import label from "../../src/shared/localization/locales/tr_TR.json"
import {AtomButton, AtomInput, AtomRadioButton, AtomDatePicker} from "@atoms";
import {MyMoleculeCaptcha} from "@molecules";



const PukKoduSorgulama = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [isVisibletc, setIsVisibletc] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [selectedRadio, setSelectedRadio] = useState("isChecked1");

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
    if (selectedCheckbox === 'isChecked1') {
      setIsChecked1(true);
      setIsChecked2(false);
      setSelectedRadio('isChecked1')
      setIsVisible(true);
      setIsVisibletc(false);
    } else if (selectedCheckbox === 'isChecked2') {
      setIsChecked1(false);
      setIsChecked2(true);
      setSelectedRadio('isChecked2')
      setIsVisible(false);
      setIsVisibletc(true);
    }
  };


  return (
    <>
      <div className={styles.puk}>
        <Menus currentPage="puk-kodu"/>
        <div className={styles.div}>
          <div className={styles.divtitle}>
            <p className={styles.p1}>{label["puk-kodu-ogrenme"]}</p>
            <p className={styles.p4}>{label["puk-kodu-ogrenme-metin"]}</p>
          </div>
          <div className={styles.checkboxs}>
            <div className={styles.boxcheckbox}>
              <AtomRadioButton radioButtonName={""} element={<div className={styles.divradio}><IconsSim className={isChecked1 ? styles.pradioSelected : styles.pradio}/>
                <div className={styles.divr}><p className={isChecked1 ? styles.pradioSelectedlabel : styles.pradiolabel}>{label["with-simcardno"]}</p><p className={styles.pst}>{label["with-simcardno-info"]}</p></div></div>}
                               value="isChecked1"
                               currentCheckedValue="isChecked1"
                               checked={isChecked1}
                               onClickFn={() => handleCheckboxChange(
                                 'isChecked1')}
                                />
            </div>
            <div className={styles.boxcheckbox}>
              <AtomRadioButton radioButtonName={""} element={<div className={styles.divradio}><IconsTechSpecs
                className={isChecked2 ? styles.pradioSelected : styles.pradio}/>
                <div className={styles.divr}>
                  <p className={isChecked2 ? styles.pradioSelectedlabel : styles.pradiolabel}>{label["with-tcno"]}</p><p
                  className={styles.pst}>{label["with-tcno-info"]}</p></div>
              </div>}  value="isChecked2"
                               currentCheckedValue="isChecked2"
                               checked={isChecked2}
                               onClickFn={() => handleCheckboxChange('isChecked2')}/>

            </div>
          </div>


          {isVisible ? (
            <div className={styles.simcontent}>
              <div className={styles.scrow1}>
                <div>
                  <AtomInput
                    label="İletişim No*(Başında 0 olmadan)"
                    name="iletisimno"
                    value={inputValue}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={(event) => handleInputChange(event, setInputValue)}
                    className={styles.input}/>
                </div>
                <div>
                  <div className={styles.simcard}>
                    <AtomInput
                      label="Sim Kart No"
                      name="simcardno"
                      value={inputValue1}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onChange={(event) => handleInputChange(event, setInputValue1)}
                      className={styles.input}/>
                    <img className={styles.image} src='/photos/simcard.png'></img>
                  </div>
                  <p className={styles.p3}>Sim kartınız üzerinde yandaki resimde gösterilen numarayı girmelisiniz.</p>
                </div>
              </div>
              <div className={styles.scrow22}>
                <MyMoleculeCaptcha text="*Güvenlik kodundaki harf ve rakamları giriniz." inputLabel="Güvenlik Kodu" isCaptchaOk={(isCaptchaValid) => {
                  console.log("heyesfuys")
                  if (isCaptchaValid) {
                    console.log('Captcha doğru.');
                  } else {
                    console.log('Captcha yanlış.');
                  }
                }}/>


              </div>
              <div className={styles.scrow3}>
                <div></div>
                <AtomButton text="Gönder" variant="secondary" className={styles.button}/>
              </div>
            </div>
          ) : (
            isVisibletc ? (
              <div className={styles.tccontent}>
                <div className={styles.tcrow1}>
                  <div>
                    <AtomInput
                      label="İletişim No"
                      name="iletisimno"
                      value={inputValue3}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onChange={(event) => handleInputChange(event, setInputValue3)}
                      className={styles.input}/>
                  </div>
                  <div>
                    <AtomInput
                      label="TC Kimlik Numarası"
                      name="tcno"
                      value={inputValue4}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      onChange={(event) => handleInputChange(event, setInputValue4)}
                      className={styles.input}/>
                    <p className={styles.p3}>Hat sahibinin TC Kimlik Numarasının girilmesi gerekiyor.</p>
                  </div>
                </div>
                <div className={styles.tcrow22}>
                    <AtomDatePicker
                      label="Doğum Tarihi"
                      name="dogumtarihi"
                      onChange={(event) => handleInputChange(event, setInputValue5)}
                      className={styles.inputs}
                      placeholder="Doğum Tarihi"
                    />
                </div>
                <div className={styles.scrow2}>
                  <MyMoleculeCaptcha text="*Güvenlik kodundaki harf ve rakamları giriniz." inputLabel="Güvenlik Kodu" isCaptchaOk={(isCaptchaValid) => {
                    console.log("heyesfuys")
                    if (isCaptchaValid) {
                      console.log('Captcha doğru.');
                    } else {
                      console.log('Captcha yanlış.');
                    }
                  }}/>
                </div>
                <div className={styles.tcrow4}>
                  <div></div>
                  <AtomButton text="Gönder" variant="secondary" className={styles.button}/>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

    </>
  )
}

export default PukKoduSorgulama;
