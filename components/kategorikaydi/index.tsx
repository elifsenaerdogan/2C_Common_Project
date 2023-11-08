import React from "react"
import styles from "./kategorikaydı.module.scss"
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

const Kategorikaydi = () => {
    return(
        <>
            <div className={styles.div1} style={{whiteSpace: 'nowrap'}}><AutoAwesomeMosaicIcon
                className={styles.ikon1}/> <h1 className={styles.divyazi1}>Kategori Kaydı</h1>
            </div>
            <div className={styles.yan}>
                <DownloadDoneIcon className={styles.ikon}/>
                <h1 className={styles.yazi}>Kategori başarı ile kaydedildi!</h1>
            </div>
        </>
    );
}
export default Kategorikaydi;