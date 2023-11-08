import React from "react";
import styles from "./index.module.scss";
import {useState, useEffect} from "react";
import {Card, CardContent} from "@mui/material";
import {Carousel} from 'antd';
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";


interface KatProps {
    data: {
        id: number;
        category_ad: string;
        category_kodu: number;
        category_rsm: string;
    }[];
}

const Deneme = (props: KatProps) => {
    const [kat, setKat] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8090/kategori/allkategori")
            .then((response) => response.json())
            .then((response) => setKat(response));
    }, []);


    return (
        <>
            <div className={styles.dis}>
                <div className={styles.a001}>
                    <h1 className={styles.endisyazi}>Kategoriler Sayfası</h1>
                    <Carousel>
                        <img src="/photos/katfoto5.png" className={styles.ilkfoto}/>
                        <img src="/photos/katfoto6.png" className={styles.ilkfoto}/>
                        <img src="/photos/katfoto4.png" className={styles.ilkfoto}/>
                    </Carousel>
                </div>
                <div>
                    <Card className={styles.card}>
                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.yazi1}> Ürünlere ait bilgiler aşagıda
                            verılmıstır</h1>
                        <table className={styles.table}>
                            {kat.map(({category_ad, category_kodu, id, category_rsm}) => (
                                <div key={id}>
                                    <Card className={styles.adyanyana} elevation={0}>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.yazikod}>Kategori Kodu: <span
                                            style={{whiteSpace: 'nowrap'}} className={styles.kod}>{category_kodu}</span>
                                        </h1>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.yaziad}>Kategori Adı: <span
                                            style={{whiteSpace: 'nowrap'}} className={styles.ad}>{category_ad}</span>
                                        </h1>
                                        <h1 style={{whiteSpace: 'nowrap'}} className={styles.yazikod}>Kategori'ye Ait
                                            Resim: </h1>
                                        <img src={category_rsm} alt={`Resim-${id}`} className={styles.resim}/>
                                    </Card>
                                </div>
                            ))}

                        </table>
                    </Card>
                </div>
                <div className={styles.iletbil}>
                    <h1 className={styles.biz}>Aşağıdaki Bulunan Bilgilerimizden Bizlere Ulaşabilirsiniz!</h1>
                    <button className={styles.sabut}><LocalPostOfficeIcon className={styles.ikon5}/><h1
                        className={styles.epostayaz}>e-posta: stokprogramı01@gmail.com</h1></button>
                    <button className={styles.sabut1}><CallIcon className={styles.ikon6}/><h1
                        className={styles.numyaz}>İletişim numarası: 05010101010101</h1></button>
                    <button className={styles.sosbut}>
                        <h1 className={styles.sosyaz}>Sosyal Medya Hesaplarımız:</h1>
                        <h1 className={styles.ins}><InstagramIcon className={styles.ikon7}/><h1
                            className={styles.instayaz}> stoktakip01</h1></h1>
                        <h1 className={styles.fac}><FacebookIcon className={styles.ikon7}/><h1
                            className={styles.instayaz}> stoktakip01</h1></h1>
                        <h1 className={styles.tiv}><TwitterIcon className={styles.ikon7}/><h1
                            className={styles.instayaz}> stoktakip01</h1></h1>

                    </button>
                </div>
            </div>
        </>
    );
}

export default Deneme;