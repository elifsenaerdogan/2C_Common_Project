import React, {useEffect, useState} from 'react';
import styles from './index.module.scss'
import {AtomButton, AtomInput, AtomRadioButton} from "@atoms";
import Captcha, {MoleculeCaptcha} from "../../../../../libs/dc-mfe-ui/src/lib/molecules/captcha/captcha";
import PictogramsHaveFun from "@others/icons/PictogramsHaveFun";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs} from "@others/icons";
import Menus from "../../../src/components/Menus";
import * as Yup from 'yup';
import {DateInput} from "@molecules";

import {DatePicker} from "antd";
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import axios from 'axios';

import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";



const queryClient = new QueryClient()

type FormValues={
    gsmNo:string
    simNo:string
}

const Puk_Code = () => {
  const [isCheckedSimCard, setIsCheckedSimCard] = useState(true);
  const [isCheckedTCKN, setIsCheckedTCKN] = useState(false);
  const [gsmNo, setTelNo] = useState("");
  const [simNo, setSimNo] = useState("");
  const [data,setData]=useState({
    identifier:"",
    sound:"",
    image:''
  });
  const [pageManage,setPageManage]=useState("");

    const [pageData, setPageData] = useState(null);
  const [birthdate,setBirthDate]=useState("");
const day=birthdate.substring(0,2);
const mounth=birthdate.substring(5,8);
const year =birthdate.substring(10,15);


    const handleDateChange=(e)=>{
    setBirthDate(e);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager');
                setPageData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);





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


  const handleOnClickSimCard = () => {
    setIsCheckedTCKN(false)
    setIsCheckedSimCard(true)
  }
  const[tcknValidate,setTcknValidate]=useState({
    birthday:'',

  })

const form=useForm<FormValues>();
    const{register ,control,handleSubmit}=form;
 const onSubmit=(data:FormValues,inputValue)=>{
     console.log('Form Submitted',data,inputValue);
 }
  return (
    <>
    <QueryClientProvider client={queryClient}>
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
                             className={styles.radioButton}
                             checked={isCheckedSimCard}
                             onClick={handleOnClickSimCard}
                             element={<div className={styles.simCardRadioButton}>
                               <div className={styles.simCardRadioButtonIcon}>
                               <IconsSim/>
                               </div>
                               <div className={styles.simCardRadioButtonLabel}>
                                 <p>Sim Kart Numarası ile</p>
                                 <p>Sim kart numaranızı girerek sorgu yapabilirsiniz</p>
                               </div>

                             </div>}/>
            <AtomRadioButton radioButtonName={""} value="isCheckedTCKN" currentCheckedValue="isCheckedTCKN"
                             checked={isCheckedTCKN}
                             onClick={handleOnClickTCKN} element={<div className={styles.simCardRadioButton}>
              <div className={styles.simCardRadioButtonIcon}>
                <IconsTechSpecs/>
              </div>
              <div  className={styles.simCardRadioButtonLabel}>
                <p>TC Kimlik Numarası ile</p>
                <p>Tckn bilgileriniz ile sorgu yapabilirsiniz</p>
              </div>

            </div>}/>
          </div>
          {isCheckedSimCard &&

              <div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.simCardIndex}>
                    <AtomInput label='sadasdad'
                                   {...register('gsmNo',{required:'Gsm no is invalid'})}  />
                  <AtomInput label="Sim Kart No" {...register('simNo')}/>

                </div>

                <div className={styles.captcha}>

                  <MoleculeCaptcha inputLabel="Güvenlik Kodunu Giriniz"   />

                </div>
                </form>
                <DevTool control={control}/>
              </div>
            }
          {isCheckedTCKN &&
            <div>
              <form >
              <div>
           <AtomInput label=""/>
            <AtomInput label="TC Kimlik Numarası"/>
              </div>
              <div>
                <DateInput name="birthdate" onChange={handleDateChange} value={birthdate}/>
              </div>
                <div>

                 <Captcha inputLabel="Güvenlik Kodunu Giriniz" />

                </div>
              </form>
            </div>
          }
        </div>

      </div>
    </QueryClientProvider>
    </>
  )
}
export default Puk_Code;
function PageManager() {

  const {data, isLoading,error} = useQuery<any >({

    queryKey: ['pageDa'],
    queryFn: () => {
      return fetch('/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager').then((res) => res.json())
    }
  })

  if(isLoading) return 'Loading..'
  if(error) return 'Hataaa'+error.message
  return data;


}
