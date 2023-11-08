import React, {useEffect, useState} from 'react'
import styles from './depolistele.module.scss'
import Anasayfa1 from "../../components/anasayfa1";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Card from "@mui/material/Card";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

const Depolistele = () => {
    const [deplis, setDeplis] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8090/depo/alldepo")
            .then((response) => response.json())
            .then((response) => setDeplis(response));
    }, []);




    return(
        <>
            <div className={styles.disdis}>
                <div>
                    <Anasayfa1 children=""/>
                </div>
                <div className={styles.yandiv}>
                    <div className={styles.depilk} style={{whiteSpace: 'nowrap'}}><OtherHousesIcon
                        className={styles.depikonilk}/> <h1 className={styles.depyazi00}>Depo Kaydı</h1>
                    </div>
                    <Card className={styles.cardyan}>
                        <Card className={styles.body}>
                            <Card className={styles.myTable}>

                                    <h1 style={{whiteSpace: 'nowrap'}} className={styles.depoadiya}>Depo Adı</h1>
                                    <h1 style={{whiteSpace: 'nowrap'}} className={styles.yetkiliadis}>Yetkili Adı-Soyadı</h1>
                                    <h1 style={{whiteSpace: 'nowrap'}} className={styles.yetkiliadis} >Yetkili Telefon</h1>
                                    <h1 style={{whiteSpace: 'nowrap'}} className={styles.yetkiliadis} >Açıklama 1</h1>
                                    <h1 style={{whiteSpace: 'nowrap'}} className={styles.yetkiliadis} >Açıklama 2</h1>
                            </Card>
                                <Card className={styles.geldi}>
                                {deplis.map(({ depo_ad, yetkili_ad_soyad, id, yetkili_telefon, aciklama1, aciklama2 }) => (
                                    <h1  className={styles.bla} key={id}>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.adad}>{depo_ad}</h1>
                                         <h1 style={{whiteSpace: 'nowrap'}} className={styles.adsoyad}>{yetkili_ad_soyad}</h1>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.yetkilitel}>{yetkili_telefon}</h1>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.aciklamagel}>{aciklama1}</h1>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.aciklama2gel}>{aciklama2}</h1>
                                    </h1>


                                ))}

                                </Card>

                        </Card>
                    </Card>
                    <button className={styles.disaributton}>Listeyi Dışarı Aktar</button>

                </div>
            </div>
        </>
    )
}
export default Depolistele;
