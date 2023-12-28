import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs, PictogramsHaveFun} from "@others/icons";
import label from "../../shared/localization/locales/tr_TR.json";
import Link from 'next/link'
import menuApi from "../../../utils/menuApi";
import axios from "axios";

const ConsumerComplaintsMenus = ({currentPage}) => {

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/content-service/v1/pagemanager/dc-help-service-sol-menu-pagemanager`);
        setPageData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {pageData && (
        <div className={styles.Rectangle}>
          <div className={styles.Rectangle1}>
            <PictogramsHaveFun className={styles.imageya}/>
            <p className={`text-head-bold-xs ${styles.p}`}>Tüketici Şikayetleri</p>
          </div>
          <div className={styles.Rectangle2}>
            <div className={currentPage === "create-complaint" ? styles.checkDiv : styles.Div}>
              <Link href="/create-complaint" className={currentPage === "create-complaint" ? styles.divspk : styles.div1}>
                <IconsApps className={styles.icon2}/>
                <p
                  className={currentPage === "create-complaint" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>Şikayet Talebi Oluşturma</p>
              </Link>
            </div>

            <div className={currentPage === "complaint-tracking" ? styles.checkDiv : styles.Div}>
              <Link href="/complaint-tracking" className={currentPage === "complaint-tracking" ? styles.divsfs : styles.div1}>
                <IconsTechSpecs className={styles.icon2}/>
                <p
                  className={currentPage === "complaint-tracking" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>Şikayet Takibi</p>
              </Link>
            </div>


            <div className={currentPage === "receivables-inquiry" ? styles.checkDiv : styles.Div}>
              <Link href="/receivables inquiry" className={currentPage === "receivables inquiry" ? styles.divscg : styles.div1}>
                <IconsSettings className={styles.icon2}/>
                <p
                  className={currentPage === "receivables inquiry" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>AlacaK Sorgulama,TL İade Talep</p>
              </Link>
            </div>

            <div className={currentPage === "btk-return" ? styles.checkDiv : styles.Div}>
              <Link href="/btk-return"
                    className={currentPage === "btk-return" ? styles.divsas : styles.div1}>
                <IconsCompare className={styles.icon2}/>
                <p
                  className={currentPage === "btk-return" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>BTK İade Duyurusu</p>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
export default ConsumerComplaintsMenus;


