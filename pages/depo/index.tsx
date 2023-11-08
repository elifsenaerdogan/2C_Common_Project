import React, {useState} from 'react'
import styles from './depo.module.scss'
import Anasayfa1 from "../../components/anasayfa1";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import {Card, MenuItem, Select} from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PersonIcon from "@mui/icons-material/Person";


interface PerProps {
    data: {
        id: number;
        depo_ad: string;
        yetkili_ad_soyad: string;
        yetkili_telefon: string;
        aciklama1: string;
        aciklama2: string;
        seflik1: string;
    }[];
}
const Depo = () => {
    const [depo, setDepo] = useState([]);
    const [depo_ad, setDepo_ad] = useState("");
    const [yetkili_ad_soyad, setYetkili_ad_soyad] = useState("");
    const [yetkili_telefon, setYetkili_telefon] = useState("");
    const [aciklama1, setAciklama1] = useState("");
    const [aciklama2, setAciklama2] = useState("");
    const [seflik1, setSeflik1] = useState("");

    const [state1, setState1] = useState(false)
    const [state2, setState2] = useState(false)

    const handleShowHideClick = () => {

    };
    const handleDepoadChange = (e) => {
        setDepo_ad(e.target.value);
    };

    const handleYetkiliadsoyadChange = (e) => {
        setYetkili_ad_soyad(e.target.value);
    };
    const handleYetkilitelefonChange = (e) => {
        setYetkili_telefon(e.target.value);
    };
    const handleAciklama1Change = (e) => {
        setAciklama1(e.target.value);
    };
    const handleAciklama2Change = (e) => {
        setAciklama2(e.target.value);
    };
    const handleSeflik1Change = (e) => {
        setSeflik1(e.target.value);
    };

    const handleGetirClick = () => {
        const data = {
            id: 100,
            depo_ad: depo_ad,
            yetkili_ad_soyad: yetkili_ad_soyad,
            yetkili_telefon: yetkili_telefon,
            aciklama1: aciklama1,
            aciklama2: aciklama2,
            seflik1: seflik1
        };

        const url = "http://localhost:8090/depo/depo_ekle";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((response) => {
                setDepo(response);
            })
            .catch((error) => {
                console.error('Hata oluştu: ', error);
            });
    };
    return(
        <>
            <div className={styles.disdis}>
                <div>
                 <Anasayfa1 children=""/>
                </div>
                {!state1 &&
                <div className={styles.divdepo}>
                    <div className={styles.depoilk}>
                            <AutoAwesomeMosaicIcon className={styles.ikon1} />
                            <h1 style={{ whiteSpace: 'nowrap' }} className={styles.divyazi1}>Depo Kaydı</h1>
                    </div>
                    <Card className={styles.carddep}>
                        <div className={styles.carden1}>
                            <div className={styles.depadi0}>
                            <h1 style={{ whiteSpace: 'nowrap' }} className={styles.depoadiyazi}>Depo Adı:</h1>
                            <input
                                type="text"
                                placeholder="Depo Adı "
                                value={depo_ad}
                                onChange={handleDepoadChange}
                                className={styles.idepokuladi}
                            />
                            </div>
                            <div className={styles.depsef}>
                                <h1 style={{ whiteSpace: 'nowrap' }} className={styles.sefbilyazi}>Şeflik Bilgisi:</h1>
                                <Select
                                    type="text"
                                    placeholder="Seflik"
                                    value={seflik1}
                                    onChange={handleSeflik1Change}
                                    className={styles.ideposefbil}
                                >
                                    <MenuItem value={0}>Birinci Derece</MenuItem>
                                    <MenuItem value={1}>İkinci Derece</MenuItem>
                                    <MenuItem value={2}>Üçüncü Derece</MenuItem>
                                </Select>
                            </div>
                            <div className={styles.depyetkiliad}>
                                <h1 style={{ whiteSpace: 'nowrap' }} className={styles.depyetkiliadi}>Yetkili Adı:</h1>
                                <input
                                    type="text"
                                    placeholder="Yetkili Adı "
                                    value={yetkili_ad_soyad}
                                    onChange={handleYetkiliadsoyadChange}
                                    className={styles.idepoyetkadi}
                                />
                            </div>

                            <div className={styles.depyetbilgi}>
                                <h1 style={{ whiteSpace: 'nowrap' }} className={styles.depyetbilgi}>Yetkili İletişim Bilgileri:</h1>
                                <input
                                    type="text"
                                    placeholder="Yetkili İletişim Bilgileri "
                                    value={yetkili_telefon}
                                    onChange={handleYetkilitelefonChange}
                                    className={styles.idepoyetbilgi}
                                />
                            </div>

                        </div>
                        <div className={styles.cardsa}>
                        <div className={styles.depacik1}>
                            <h1 style={{ whiteSpace: 'nowrap' }} className={styles.depacik1yazi}>Açıklama 1:</h1>
                            <input
                                type="text"
                                placeholder=" "
                                value={aciklama1}
                                onChange={handleAciklama1Change}
                                className={styles.idepacik1}
                            />
                        </div>

                            <div className={styles.depacik2}>
                                <h1 style={{ whiteSpace: 'nowrap' }} className={styles.depacik1yazi}>Açıklama 2:</h1>
                                <input
                                    type="text"
                                    placeholder=" "
                                    value={aciklama2}
                                    onChange={handleAciklama2Change}
                                    className={styles.idepacik1}
                                />
                            </div>
                        </div>


                    </Card>
                    <div className={styles.yetbutton}>
                        <div className={styles.ortayuv} onClick={() => setState1((prevState1) => !prevState1)}>
                            <button style={{whiteSpace: 'nowrap'}} className={styles.yetbut} onClick={handleGetirClick}>Kaydet</button>
                        </div>
                        <button className={styles.yetip}>İptal Et</button>
                    </div>
                </div>
                }
            </div>
            {state1 &&
                <div className={styles.depkayit}>
                    <div className={styles.depilk} style={{whiteSpace: 'nowrap'}}><OtherHousesIcon
                        className={styles.depikonilk}/> <h1 className={styles.depyazi00}>Depo Kaydı</h1>
                    </div>
                    <div className={styles.depkayittam}>
                        <DownloadDoneIcon className={styles.okeyikon}/>
                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.okeyyazi}>Depo Başarı ile Kaydedildi!</h1>
                    </div>
                </div>
            }

        </>
    )
}
export default Depo;