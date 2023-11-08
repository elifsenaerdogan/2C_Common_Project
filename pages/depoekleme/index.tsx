import React from 'react'
import styles from './depoekleme.module.scss'
import Anasayfa1 from "../../components/anasayfa1";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import {Card, MenuItem, Select} from "@mui/material";
const Depoekleme = () => {
    return(
        <>
            <div className={styles.disdis}>
                <div>
                    <Anasayfa1 children=""/>
                </div>
                <div className={styles.yandis}>
                    <div className={styles.ilk}>
                        <OtherHousesIcon className={styles.ikon1}/>
                        <h1 className={styles.ikon1yazi} style={{whiteSpace: 'nowrap'}}> Depoya Ürün Ekle</h1>
                    </div>
                    <Card className={styles.card}>
                        <h1 className={styles.yazicard}>Depo Adı:</h1>
                        <Select
                            type="text"
                            className={styles.selectcard}
                        >
                            <MenuItem value={0}>Depo Bir</MenuItem>
                            <MenuItem value={1}>Depo İki</MenuItem>
                            <MenuItem value={2}>Depo Üç</MenuItem>
                        </Select>
                        <button className={styles.sec}>Seç</button>

                    </Card>
                </div>
            </div>
        </>
    )
}
export default Depoekleme;