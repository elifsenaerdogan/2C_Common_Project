import '@others/assets/styles/global.scss';
import '@others/assets/styles/variables.scss';
import styles from './index.module.scss';
import {AppButton, AtomButton} from "@dc-mfe-ui";
import {IconsApps, IconsCompare, IconsSettings, IconsSim, IconsTechSpecs, PictogramsHaveFun} from "@others/icons";
import label from "../src/shared/localization/locales/tr_TR.json";
import React, {useState} from "react";

import PukKoduSorgulama from './puk-code';
import AlacakSorgulama from "./receivables-inquiry";

export function Index() {
  const [selectedContent, setSelectedContent] = useState("puk-code");


  const navigateTo = (content) => {
    setSelectedContent(content);
    window.history.pushState({}, "", `/${content}`);
  };


  return (
    <div className={styles.page}>
      <div className={styles.menus}>
        <div className={styles.divdis}>
          <div className={styles.div}>
            <div className={styles.box}>
              <div className={styles.divbox}>
                <PictogramsHaveFun className={styles.imageya}/>
                <p className={styles.p}>{label["yardim-araclari"]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divdis2}>
          <div className={styles.div3}>
            <div className={styles.box2}>
              <div className={selectedContent === "puk-code" ? styles.selectedMenuItem : styles.div1} onClick={() => navigateTo("puk-code")}>
                <IconsApps className={styles.icon2}/>
                <p className={styles.p2}>{label["puk-kodu-ogrenme"]}</p>
              </div>

              <div onClick={() => navigateTo("")} className={styles.div1}>
                <IconsTechSpecs className={styles.icon2}/>
                <p className={styles.p2}>{label["fatura-sorgulama"]} </p>
              </div>

              <div className={styles.div1}>
                <IconsSettings className={styles.icon2} />
                <p className={styles.p2}>{label["cihaz"]}</p>
              </div>

              <div className={selectedContent === "alacak-sorgulama" ? styles.selectedMenuItem : styles.div1} onClick={() => navigateTo("alacak-sorgulama")} >
                <IconsCompare className={styles.icon2}/>
                <p className={styles.p2}>{label["alacak-sorgulama"]}</p>
              </div>

              <div className={styles.div1} >
                <IconsSim className={styles.icon2} />
                <p className={styles.p2}>{label["hat-sorgulama"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        {selectedContent === 'puk-code' && <PukKoduSorgulama/>}
        {selectedContent === 'alacak-sorgulama' && <AlacakSorgulama/>}
      </div>



    </div>
  );
}

export default Index;
