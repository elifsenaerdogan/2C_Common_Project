import React, {useState, useEffect} from "react";
import styles from './index.module.scss';

import classNames from 'classnames';

import ConsumerComplaintsMenus from "../../src/components/ConsumerComplaintsMenus";
import {AtomButton, AtomInput} from "@atoms";
import MoleculeInfoCard from "../../../../libs/dc-mfe-ui/src/lib/molecules/shared/info-card/molecule-info-card";
import PictogramsHaveFun from "@others/icons/PictogramsHaveFun";


const ConsumerComplaints = () => {

  const [isVisibleLogin,setIsvisibleLogin]=useState(true);

  const PukContentFirstLabel = classNames(
    'text-head-bold-l',
    styles.trkclAppPagePukContentFirstLabel
  );

  const PukContentSecondLabel = classNames(
    'text-body-regular-medium',
    styles.trkclAppPagePukContentSecondLabel
  );

  const ConsumerComplaintsLabelLogin = classNames(
    'text-body-bold-n',
    styles.trkclAppPageConsumerComplaintsContentLabelLogin
  );




  return (
    <>
      <div className={styles.trkclAppPagePuk}>
        <ConsumerComplaintsMenus currentPage="create-complaint"/>
        <div className={styles.trkclAppPagePukContent}>
          <div className={styles.trkclAppPagePukContentTitle}>
            <p className={PukContentFirstLabel}>Şikayet Talebi Oluşturma</p>
            <p className={PukContentSecondLabel}>Bu formda hat sahipleri istedikleri kategorilerle şikayetlerini
              iletebilir.</p>
          </div>


          {isVisibleLogin ? (
            // Buraya kullanıcı giriş yaptıysa görünecek ekranı tasarlıyorum
            <div className={styles.trkclAppPagePukContentChoice}>
              <MoleculeInfoCard text="05303002020 GSM No ve 1111111111111 TCKN ile giriş yaptınız. "/>


              <p className={ConsumerComplaintsLabelLogin}>Şikayetiniz</p>
              <p className={PukContentSecondLabel}>Şikayetinizi iletebilmeniz için hattın yasal sahibi olmanız ve ihtiyaç duyulması halinde size ulaşabileceğimiz irtibat numarasını iletmeniz gerekmektedir. İnceleme sonuçlarını Hesabım altından takip edebilirsiniz.</p>


              <div className={styles.trkclAppPagePukContentWithTCNoFirstRow}>

                <div className={styles.trkclAppPagePukContentInput}>
                  <p>
                    TC Kimlik No
                  </p>
                  <AtomInput label="TC Kimlik Numaran"/>
                </div>

                <div className={styles.trkclAppPagePukContentInput}>
                  <p>
                    TC Kimlik No
                  </p>
                  <AtomInput label="E-Posta Adresin"/>

                </div>
              </div>

            </div>
          ) : (
            //Burada ise kullanıcı giriş yapmadıysa göreceği sayfayı tasarlıyorum
            <div className={styles.trkclAppPagePukContentChoice}>
              <p className={ConsumerComplaintsLabelLogin}>Giriş Yapın</p>
              <p className={PukContentSecondLabel}>Yeni şikayet talebi iletebilmeniz ve ilettiğiniz şikayetlerin durumunu görebilmeniz için Turkcell.com.tr’ye giriş yapmanız gerekmektedir.</p>

              <div >
                <AtomButton text="Giriş Yapın" variant="secondary" className={styles.trkclAppPageConsumerComplaintsContentButtonLogin} />
              </div>

              <p className={ConsumerComplaintsLabelLogin}>Diğer Operatör Kullanıcıları Şikayetleri</p>
              <p className={PukContentSecondLabel}>Turkcell ve Turkcell Superonline müşterisi değilseniz, şikayet talebinizi iletebilmeniz için TCKN ve GSM numaranız ile aşağıdaki linkten giriş yapabilirsiniz.</p>

              <div style={{width:"290px"}}>
                <AtomButton text="Diğer Operatör Sahibi Şikayetleri" variant="secondary"  className={styles.trkclAppPageConsumerComplaintsContentButtonComplaints}/>
              </div>
            </div>
          )}


        </div>



      </div>
    </>
  )
}

export default ConsumerComplaints;

