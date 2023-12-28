import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs, PictogramsHaveFun} from "@others/icons";
import label from "../../shared/localization/locales/tr_TR.json";
import Link from 'next/link'
import menuApi from "../../../utils/menuApi";
import axios from "axios";

const Menus = ({currentPage}) => {

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
            <p className={`text-head-bold-xs ${styles.p}`}>{pageData.labelDTOList["helptools.yardimaraclari.title"]}</p>
          </div>
          <div className={styles.Rectangle2}>
            <div className={currentPage === "puk-kodu" ? styles.checkDiv : styles.Div}>
              <Link href="/puk-code" className={currentPage === "puk-kodu" ? styles.divspk : styles.div1}>
                <IconsApps className={styles.icon2}/>
                <p
                  className={currentPage === "puk-kodu" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>{pageData.labelDTOList["helptools.menu.pukquery.title"]}</p>
              </Link>
            </div>

            <div className={currentPage === "fatura-sorgulama" ? styles.checkDiv : styles.Div}>
              <Link href="/jk" className={currentPage === "fatura-sorgulama" ? styles.divsfs : styles.div1}>
              <IconsTechSpecs className={styles.icon2}/>
              <p
                className={currentPage === "fatura-sorgulama" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>{pageData.labelDTOList["helptools.menu.billdept.title"]} </p>
            </Link>
            </div>


            <div className={currentPage === "cihaz-gönderimi" ? styles.checkDiv : styles.Div}>
              <Link href="/sak" className={currentPage === "cihaz-gönderimi" ? styles.divscg : styles.div1}>
                <IconsSettings className={styles.icon2}/>
                <p
                  className={currentPage === "cihaz-gönderimi" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>{pageData.labelDTOList["helptools.menu.devicesetting.title"]}</p>
              </Link>
            </div>

            <div className={currentPage === "alacak-sorgulama" ? styles.checkDiv : styles.Div}>
              <Link href="/receivables-inquiry"
                    className={currentPage === "alacak-sorgulama" ? styles.divsas : styles.div1}>
                <IconsCompare className={styles.icon2}/>
                <p
                  className={currentPage === "alacak-sorgulama" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>{pageData.labelDTOList["helptools.menu.refundquery.title"]}</p>
              </Link>
            </div>

            <div className={currentPage === "hat-sorgulama" ? styles.checkDiv : styles.Div}>
              <Link href="/ssdggs" className={currentPage === "hat-sorgulama" ? styles.divshs : styles.div1}>
                <IconsSim className={styles.icon2}/>
                <p
                  className={currentPage === "hat-sorgulama" ? `text-body-bold ${styles.p2}` : `text-body-bold ${styles.p2}`}>{pageData.labelDTOList["helptools.menu.individuallineinquiry.title"]}</p>
              </Link>

            </div>

          </div>
        </div>
      )}
    </>
  )
}
export default Menus;


