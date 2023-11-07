import React from "react";
import styles from "./index.module.scss";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs, PictogramsHaveFun} from "@others/icons";
import label from "../../shared/localization/locales/tr_TR.json";

const Menus = ({currentPage}) => {
  return (
    <>
      <div className={styles.Rectangle}>
        <div className={styles.Rectangle1}>
          <PictogramsHaveFun className={styles.imageya}/>
          <p className={styles.p}>{label["yardim-araclari"]}</p>
        </div>
        <div className={styles.Rectangle2}>
          <a href="/puk-code" className={currentPage === "puk-kodu" ? styles.divspk : styles.div1}>
              <IconsApps className={styles.icon2}/>
              <p className={styles.p2}>{label["puk-kodu-ogrenme"]}</p>
          </a>

          <a className={currentPage === "fatura-sorgulama" ? styles.divsfs :styles.div1}>
            <IconsTechSpecs className={styles.icon2}/>
            <p className={styles.p2}>{label["fatura-sorgulama"]} </p>
          </a>

          <a className={currentPage === "cihaz-gönderimi" ? styles.divscg :styles.div1}>
            <IconsSettings className={styles.icon2}/>
            <p className={styles.p2}>{label["cihaz"]}</p>
          </a>

          <a href="/receivables-inquiry" className={currentPage === "alacak-sorgulama" ? styles.divsas :styles.div1}>
            <IconsCompare className={styles.icon2}/>
            <p className={styles.p2}>{label["alacak-sorgulama"]}</p>
          </a>

          <a className={currentPage === "hat-sorgulama" ? styles.divshs :styles.div1}>
            <IconsSim className={styles.icon2}/>
            <p className={styles.p2}>{label["hat-sorgulama"]}</p>
          </a>
        </div>
      </div>
    </>
  )
}
export default Menus;


