import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'
import {AtomButton, AtomInput, AtomRadioButton} from "@atoms";
import Captcha from "../../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import PictogramsHaveFun from "@others/icons/PictogramsHaveFun";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs} from "@others/icons";
import Menus from "../../../src/components/Menus";
import * as Yup from 'yup';
import {DateInput} from "@molecules";
import axios from "axios/index";
import {DatePicker} from "antd";


const Puk_Code = () => {
  const [isCheckedSimCard, setIsCheckedSimCard] = useState(true);
  const [isCheckedTCKN, setIsCheckedTCKN] = useState(false);
  const [telNo, setTelNo] = useState("");
  const [simNo, setSimNo] = useState("");
  const [data,setData]=useState({
    identifier:"",
    sound:"",
    image:''
  });
  const [birthdate,setBirthDate]=useState("");
const day=birthdate.substring(0,2);
const mounth=birthdate.substring(5,8);
const year =birthdate.substring(10,15);

  /*const requestCaptcha=async()=>{
    try {
      const responseCaptcha = await axios.post(
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
      setData(responseCaptcha.data);
    }
    catch (err) {
      console.error('Error fetching captcha', err);
    }
    /!*finally {
      setisLoading(false);
    }*!/
    }*/
    const handleDateChange=(e)=>{
    setBirthDate(e);
    }

  const onTelNo=(e)=>{
    setTelNo(e.target.value);
  }
  const onSimno=(e)=>{
    setSimNo(e.target.value);
  }
  const handleOnClickTCKN = () => {
    setIsCheckedTCKN(true)
    setIsCheckedSimCard(false)
  }
  const validationSchema = Yup.object({
    iletisimno: Yup.string().min(10).max(10).required("Zorunlu Alan"),
    simcardno: Yup.string().required("Zorunlu alan"),

  });

  const handleOnClickSimCard = () => {
    setIsCheckedTCKN(false)
    setIsCheckedSimCard(true)
  }
  const[tcknValidate,setTcknValidate]=useState({
    birthday:'',

  })
  const createPuk = (e) => {
    e.preventDefault()
    const formData = {
      telNo:telNo,
      simNo:simNo,

    };
    console.log(formData);
  }
  return (
    <>
      <div className={styles.pukCodepage}>
        <Menus currentPage="puk-kodu"/>
        <div className={styles.pukCode}>
          <div className={styles.pukCodeTitle}>
            <h1>Puk Kodu Öğrenme</h1>
          </div>
          <div>
            <h3>PUK kodu bilgilerinizi aşağıdaki adımları kullanarak anında öğrenebilirsiniz.</h3>
          </div>
          <div className={styles.pukCodeIndex}>
            <AtomRadioButton radioButtonName={""} value="isChecked" currentCheckedValue="isChecked"
                             checked={isCheckedSimCard}
                             onClick={handleOnClickSimCard}
                             element={<div className={styles.simCardNoRadioButton}>
                               <IconsSim/>
                               <div>
                                 <p>Sim Kart Numarası ile</p>
                                 <p>Sim kart numaranızı girerek sorgu yapabilirsiniz</p>
                               </div>

                             </div>}/>
            <AtomRadioButton radioButtonName={""} value="isCheckedTCKN" currentCheckedValue="isCheckedTCKN"
                             checked={isCheckedTCKN}
                             onClick={handleOnClickTCKN} element={<div className={styles.simCardNoRadioButton}>
              <div>
                <IconsTechSpecs/>
              </div>
              <div>
                <p>TC Kimlik Numarası ile</p>
                <p>Tckn bilgileriniz ile sorgu yapabilirsiniz</p>
              </div>

            </div>}/>
          </div>
          {isCheckedSimCard &&

              <div>
                <form onSubmit={createPuk}>
                <div className={styles.simCardIndex}>

                  <AtomInput label="İletişim No*(başında 0 olmadan)" value={telNo} onChange={(e)=> onTelNo(e)} />
                  <AtomInput label="Sim Kart No" value={simNo} onChange={onSimno} />


                </div>
                </form>
                <div className={styles.captcha}>
                  <Captcha inputLabel="Güvenlik Kodunu Giriniz"/>
                </div>
              </div>
            }
          {isCheckedTCKN &&
            <div>
              <div>
           <AtomInput label="İletişim No*( başında 0 olmadan)"/>
            <AtomInput label="TC Kimlik Numarası"/>
              </div>
              <div>
                <DateInput name="birthdate" onChange={handleDateChange} value={birthdate}/>
              </div>
            </div>
          }
        </div>

      </div>
    </>
  )
}
export default Puk_Code;
