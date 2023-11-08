


import React from "react"
import {useState} from "react"
import styles from "./kategoriler.module.css"
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import {Card} from "@mui/material";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Anasayfa1 from "../../components/anasayfa1";


interface KatProps {
    data: {
        id: number;
        category_ad: string;
        category_kodu: string;
    }[];
}

const Kategoriler = (props: KatProps) => {

    const [kat, setKat] = useState([]);
    const [category_ad, setCategoryAd] = useState(""); // Kategori Adı için state
    const [category_kodu, setCategoryKodu] = useState(""); // Kategori Kodu için state

    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)

    const handleShowHideClick = () => {

    };
    const handleCategoryAdChange = (e) => {
        setCategoryAd(e.target.value);
    };

    const handleCategoryKoduChange = (e) => {
        setCategoryKodu(e.target.value);
    };

    const handleGetirClick = () => {
        const data = {
            id: 100,
            category_ad: category_ad,
            category_kodu: category_kodu
        };

        const url = "http://localhost:8090/kategori/kategori_ekle";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                setKat(response);
            })
            .catch((error) => {
                console.error('Hata oluştu: ', error);
            });
    };


    return (
        <>
            <div className={styles.sss}>

                <div className={styles.dis}>
                    <Anasayfa1 children=""/>
                </div>

                {!state1 &&


                    <div className={styles.mmm}>

                        <div className={styles.ikyazz}>
                            <AutoAwesomeMosaicIcon className={styles.ikon1}/>
                            <h1 className={styles.divyazi1}>Kategori Kaydı</h1>
                        </div>
                        <Card className={styles.card}>
                            <div className={styles.katad}>
                                <h1 className={styles.ad}>Kategori Adı:</h1>
                                <input
                                    type="text"
                                    placeholder="kategori adı"
                                    value={category_ad}
                                    onChange={handleCategoryAdChange}
                                    className={styles.iad}
                                />
                            </div>
                            <div className={styles.katkod}>
                                <h1 className={styles.kod}>Kategori Kodu:</h1>
                                <input
                                    type="text"
                                    placeholder="kategori kodu"
                                    value={category_kodu}
                                    onChange={handleCategoryKoduChange}
                                    className={styles.ikod}
                                />
                            </div>
                        </Card>

                        <div className={styles.buttons}>
                            <button className={styles.button1}> İptal Et</button>
                            <div className={styles.ortayuv} onClick={() => setState1((prevState1) => !prevState1)}>
                                <button className={styles.button2} onClick={handleGetirClick}>Kaydet</button>


                            </div>
                        </div>
                    </div>

                }
            </div>



                {state1 &&
                    <div className={styles.kayits}>
                        <div className={styles.div1} style={{whiteSpace: 'nowrap'}}><AutoAwesomeMosaicIcon
                            className={styles.ikon1}/> <h1 className={styles.divyazi1}>Kategori Kaydı</h1>
                        </div>
                        <div className={styles.yan}>
                            <DownloadDoneIcon className={styles.ikon}/>
                            <h1 style={{whiteSpace: 'nowrap'}} className={styles.yazi}>Kategori başarı ile kaydedildi!</h1>
                        </div>
                    </div>
                }






        </>

    );

}


export default Kategoriler;