import React, {useState} from 'react'
import styles from './yetkilendirme.module.scss'
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {Card, MenuItem, Select} from "@mui/material";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Anasayfa1 from "../../components/anasayfa1";


interface PerProps {
    data: {
        id: number;
        username: string;
        password: number;
        name_surname: String;
        yetki: String;
        user_kodu: String;
        seflik: String;
    }[];
}

const Yetkilendirme = () => {

    const [log, setLog] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name_surname, setName_surname] = useState("");
    const [yetki, setYetki] = useState("");
    const [user_kodu, setUser_kodu] = useState("");
    const [seflik, setSeflik] = useState("");


    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);

    const handleShowHideClick = () => {};

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleName_surnameChange = (e) => {
        setName_surname(e.target.value);
    };

    const handleYetkiChange = (e) => {
        setYetki(e.target.value);
    };
    const handleUser_koduChange = (e) => {
        setUser_kodu(e.target.value);
    };
    const handleSeflikChange = (e) => {
        setSeflik(e.target.value);
    };

    const handleGetirClick = () => {
        const data = {
            id: 100,
            username: username,
            password: password,
            name_surname: name_surname,
            yetki: yetki,
            user_kodu: user_kodu,
            seflik: seflik
        };

        const url = "http://localhost:8090/user/userekle";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log("Sunucu yanıtı:", response);


            })
            .catch((error) => {
                console.error("Hata oluştu: ", error);
            });
    };


    return (
        <>
            <div className={styles.disdis}>

                <div className={styles.dis}>
                    <Anasayfa1 children=""/>
                </div>

                {!state1 &&

                <div className={styles.yetdis}>
                    <div className={styles.yetilk}>
                        <PersonIcon className={styles.yetikon01}/>
                        <h1 className={styles.yetilkyazisi01}>Yetkilendirme</h1>
                    </div>
                    <Card className={styles.cardyet}>
                        <div className={styles.card01}>
                            <div className={styles.card001}>
                                <h1 className={styles.kodyazisiyet}>Kullanıcı Kodu: </h1>
                                <input
                                    type="text"
                                    placeholder="Kullanıcı kodu "
                                    value={user_kodu}
                                    onChange={handleUser_koduChange}
                                    className={styles.yetkikulkod}
                                />

                            </div>
                            <div className={styles.card002}>
                                <h1 className={styles.sefyetyazi}>Şeflik:</h1>
                                <Select
                                    type="text"
                                    placeholder="Seflik"
                                    value={seflik}
                                    onChange={handleSeflikChange}
                                    className={styles.yetsef}
                                >
                                    <MenuItem value={0}>Birinci Derece</MenuItem>
                                    <MenuItem value={1}>İkinci Derece</MenuItem>
                                    <MenuItem value={2}>Üçüncü Derece</MenuItem>
                                </Select>
                            </div>
                        </div>


                        <div className={styles.card02}>
                            <div className={styles.card003}>
                                <h1 className={styles.yetkendiyazi}>Yetkisi:</h1>
                                <Select
                                    type="text"
                                    placeholder="Yetki"
                                    value={yetki}
                                    onChange={handleYetkiChange}
                                    className={styles.yetg}
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                </Select>
                            </div>
                            <div className={styles.card004}>
                                <h1 className={styles.yetsifre}>Şifre: </h1>
                                <input
                                    type="text"
                                    placeholder="Şifre "
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className={styles.yetsifresii}
                                />

                            </div>


                        </div>

                    </Card>

                    <div className={styles.yetbutton}>
                        <div className={styles.ortayuv} onClick={() => setState1((prevState1) => !prevState1)}>
                            <button style={{whiteSpace: 'nowrap'}} className={styles.yetbut} onClick={handleGetirClick}>Yetkiyi Ata</button>
                        </div>
                        <button className={styles.yetip}>İptal Et</button>
                    </div>

                </div>
                }

                {state1 &&
                    <div className={styles.perkayit}>
                        <div className={styles.katkayik} style={{whiteSpace: 'nowrap'}}><PersonIcon
                            className={styles.katkayitik0}/> <h1 className={styles.katkayityazi00}>Yetkilendirme</h1>
                        </div>
                        <div className={styles.perkayit001}>
                            <DownloadDoneIcon className={styles.okeyikon}/>
                            <h1 style={{whiteSpace: 'nowrap'}} className={styles.okeyyazi}>Yetkilendirme Başarı ile Oluşturuldu!</h1>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}
export default Yetkilendirme;