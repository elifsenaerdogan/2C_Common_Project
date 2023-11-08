import React, { useState } from "react";
import styles from "./login.module.scss";
import { Card, MenuItem, Select } from "@mui/material";


interface PerProps {
    data: {
        id: number;
        username: string;
        password: number;
        name_surname: String;
        yetki: String;
        user_kodu: String;
    }[];
}

const Login = () => {
    const [log, setLog] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name_surname, setName_surname] = useState("");
    const [yetki, setYetki] = useState("");
    const [user_kodu, setUser_kodu] = useState("");


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

    const handleGetirClick = () => {
        const data = {
            id: 100,
            username: username,
            password: password,
            name_surname: name_surname,
            yetki: yetki,
            user_kodu: user_kodu
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

    return(
        <>
            {!state1 &&
            <Card className={styles.card}>
                <div className={styles.ilk01}>
                    <img src="/photos/login.png" className={styles.rsm}/>
                    <h1 className={styles.yazirsm}>BİLGİ TEKNOLOJİLERİ</h1>
                </div>
                <h1 className={styles.girisyazi}>Giriş Yap</h1>
                <div className={styles.disdis}>
                    <div className={styles.dis1}>
                        <h1 className={styles.username}>Kullanıcı Adı:</h1>
                        <input
                            type="text"
                            placeholder="kullanıcı adı "
                            value={username}
                            onChange={handleUsernameChange}
                            className={styles.ikulad}
                        />

                    </div>

                    <div className={styles.dis2}>
                        <h1 className={styles.username}>Şifre</h1>
                        <input
                            type="text"
                            placeholder="Şifre"
                            value={password}
                            onChange={handlePasswordChange}
                            className={styles.ikulsif}
                        />

                    </div>

                    <div className={styles.dis3}>
                        <h1 className={styles.username}>Ad-Soyad</h1>
                        <input
                            type="text"
                            placeholder="Ad-Soyad "
                            value={name_surname}
                            onChange={handleName_surnameChange}
                            className={styles.ikulassoyad}
                        />

                    </div>

                    <div className={styles.dis4}>
                        <h1 className={styles.username}>Yetki</h1>
                        <Select
                            type="text"
                            placeholder="Yetki"
                            value={yetki}
                            onChange={handleYetkiChange}
                            className={styles.ikulyetki}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                        </Select>

                    </div>

                </div>
                <div className={styles.ortayuv} onClick={() => setState1((prevState1) => !prevState1)}>
                    <button style={{whiteSpace: 'nowrap'}} className={styles.girisbtn} onClick={handleGetirClick}>Giriş Yap</button>
                </div>
            </Card>
            }
        </>
    );
}

export default Login;