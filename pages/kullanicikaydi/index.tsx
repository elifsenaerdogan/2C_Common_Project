import React from "react"
import styles from "./kullanicikaydi.module.scss"
import PersonIcon from '@mui/icons-material/Person';
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Card from "@mui/material/Card";
import {useState} from "react"
import {InputLabel, Select} from "@mui/material";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Anasayfa1 from "../../components/anasayfa1";


interface PerProps {
    data: {
        id: number;
        personel_ad_soyad: string;
        personel_kodu: number;
        personel_sifre: String;
    }[];
}

const Kullanicikaydi = (props:PerProps) => {


    const [per, setPer] = useState([]);
    const [personel_ad_soyad, setPersonel_ad_soyad] = useState("");
    const [personel_kodu, setPersonel_kodu] = useState("");
    const [personel_sifre, setPersonel_sifre] = useState("");

    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)

    const handleShowHideClick = () => {

    };
    const handlePersonelAdChange = (e) => {
        setPersonel_ad_soyad(e.target.value);
    };

    const handlePersonelKoduChange = (e) => {
        setPersonel_kodu(e.target.value);
    };
    const handlePersonelSifreChange = (e) => {
        setPersonel_sifre(e.target.value);
    };

    const handleGetirClick = () => {
        const data = {
            id: 100,
            personel_ad_soyad: personel_ad_soyad,
            personel_kodu: personel_kodu,
            personel_sifre: personel_sifre
        };

        const url = "http://localhost:8090/personel/personel_ekle";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                setPer(response);
            })
            .catch((error) => {
                console.error('Hata oluştu: ', error);
            });
    };

    return(
        <>
            <div className={styles.enenen}>
            <div className={styles.dis}>
                <Anasayfa1 children=""/>
            </div>


                {!state1 &&
            <div className={styles.diskul}>
                <div className={styles.dis1}>
                    <PersonIcon className={styles.kulikon}/>
                    <h1 className={styles.yazi1} style={{ whiteSpace: 'nowrap' }}> Kullanıcı Kaydı</h1>

                </div>
                <Card className={styles.kulcard}>
                    <div className={styles.kulkod}>
                        <h1 className={styles.yazisikodun}>Kullanıcı Kodu:</h1>
                        <input
                            type="text"
                            placeholder="Personel Kodu"
                            value={personel_kodu}
                            onChange={handlePersonelKoduChange}
                            className={styles.ikod}
                        />

                    </div>

                    <div className={styles.kulads}>
                        <h1 className={styles.yazisiadin}>Ad-Soyad:</h1>
                        <input
                            type="text"
                            placeholder="Personel Ad-Soyad"
                            value={personel_ad_soyad}
                            onChange={handlePersonelAdChange}
                            className={styles.iads}
                        />

                    </div>

                    <div className={styles.kulsef}>
                        <h1 className={styles.yazisisef}>Şeflik:</h1>
                        <Select
                            placeholder=""
                            value={personel_ad_soyad}
                            onChange={handlePersonelAdChange}
                            className={styles.isef}
                        />

                    </div>

                    <div className={styles.kulsif}>
                        <h1 className={styles.yazisisif}>Şifre:</h1>
                        <input
                            type="text"
                            placeholder="Personel Şifre"
                            value={personel_sifre}
                            onChange={handlePersonelSifreChange}
                            className={styles.isif}
                        />

                    </div>

                </Card>

                <div className={styles.buttons}>
                    <button className={styles.button1} style={{whiteSpace: 'nowrap'}}> İptal Et</button>
                    <div className={styles.ortayuv} onClick={() => setState1((prevState1) => !prevState1)}>
                        <button style={{whiteSpace: 'nowrap'}} className={styles.button2} onClick={handleGetirClick}>Kaydet</button>
                    </div>
                </div>
            </div>
                }
                {state1 &&
                    <div className={styles.perkayit}>
                        <div className={styles.katkayik} style={{whiteSpace: 'nowrap'}}><AutoAwesomeMosaicIcon
                            className={styles.katkayitik0}/> <h1 className={styles.katkayityazi00}>Kategori Kaydı</h1>
                        </div>
                        <div className={styles.perkayit001}>
                            <DownloadDoneIcon className={styles.okeyikon}/>
                            <h1 style={{whiteSpace: 'nowrap'}} className={styles.okeyyazi}>Kategori başarı ile kaydedildi!</h1>
                        </div>
                    </div>
                }



            </div>
        </>
    );
}
export default Kullanicikaydi;