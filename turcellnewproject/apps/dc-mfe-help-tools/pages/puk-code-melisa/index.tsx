import React, {useState} from 'react';
import styles from './index.module.scss';
import Menus from '../../src/components/Menus';
import {AtomInput, AtomRadioButton} from '@atoms';
import IconsSim from '@others/icons/IconsSim';
import IconsTechSpecs from "@others/icons/IconsTechSpecs";
import classNames from 'classnames';
import Captcha from "../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import {DateInput} from "@molecules";

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
      [styles.RadioButtonSimSelected]: !isChecked2,
    }
  );
  const RadioButtonTc = classNames(
    {
      [styles.RadioButtonSimSelected]: isChecked2,
      [styles.RadioButtonSimSelected]: !isChecked1,
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
    'text-body-bold',
    {
      [styles.pukCodePageSimIISelected]: isChecked1
    }
  );
  const pukCodePageTcII = classNames(
    'text-body-bold',
    {
      [styles.pukCodePageTcIISelected]: isChecked2
    }
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


  return (
    <>
      <div className={styles.pukCodePage}>
        <div className={styles.pukCodePageMenu}>
          <Menus currentPage="puk-kodu"/>
        </div>
        <div className={styles.pukCodePageP}>
          <div className={styles.pukCodePageWritesIII}>
            <h1 className={styles.pukCodePageWriteI}>Puk Kodu Öğrenme</h1>
            <h3 className={styles.pukCodePageWriteII}>Puk Kodu bilgilerinizi aşağıdaki adımları kullanarak anında
              öğrenebilirsiniz.</h3>
          </div>
          <div>
            <div className={styles.pukCodePageAtomRadioButtons}>
              <AtomRadioButton
                radioButtonName={" "}
                element={<div className={styles.pukCodePageSimIconText}>
                  <div className={styles.pukCodePageIcon}><IconsSim className={RadioButtonSim}/></div>
                  <div className={styles.pukCodePageSim}>
                    <p className={pukCodePageSimI}> Sim kart Numarası ile </p>
                    <p className={pukCodePageSimII}> Sim kart numaranızı girerek sorgu yapabilirsiniz</p>
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
                  <div className={styles.pukCodePageIcon}><IconsTechSpecs className={RadioButtonTc}/></div>
                  <div className={styles.pukCodePageTc}>
                    <p className={pukCodePageTcI}>TC kimlik Numarası ile </p>
                    <p className={pukCodePageTcII}>Tckn bilgileriniz ile sorgu yapabilirsiniz.</p>
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
                  <Captcha inputLabel="Güvenlik kodu"/>
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
                    <Captcha inputLabel="Güvenlik kodu"/>
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
