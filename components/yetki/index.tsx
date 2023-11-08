import React, {useState} from 'react'
import styles from './yetki.module.scss'
import {MenuItem, Select} from "@mui/material";


interface PerProps {
    data: {
        id: number;
        username: string;
        password: number;
        name_surname: String;
        yetki: String;
    }[];
}
const Yetki = () => {



    const [log, setLog] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name_surname, setName_surname] = useState("");
    const [yetki, setYetki] = useState("");


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

    const handleGetirClick = () => {
        const data = {
            id: 100,
            username: username,
            password: password,
            name_surname: name_surname,
            yetki: yetki,
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
        </>
    )
}
export default Yetki;