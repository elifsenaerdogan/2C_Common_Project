import React, {useEffect, useState} from "react";
import styles from "./kategorilistele.module.scss";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import SearchIcon from '@mui/icons-material/Search';
import Card from "@mui/material/Card";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Anasayfa1 from "../../components/anasayfa1";

const Kategorilistele = () => {
    const [kat, setKat] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8090/kategori/allkategori")
            .then((response) => response.json())
            .then((response) => setKat(response));
    }, []);


    const handleListeleClick = () => {
        setShowResults(true);
    };

    return (
        <>
            <div className={styles.eses00}>
                <div className={styles.dis}>
                    <Anasayfa1 children=""/>

                </div>


                <div className={styles.altalt000}>

                    <div className={styles.ilk}>
                        <div className={styles.div1} style={{whiteSpace: 'nowrap'}}>
                            <AutoAwesomeMosaicIcon className={styles.ikon000}/> <h1 className={styles.divyazi1}>Kategori
                            Kaydı</h1>
                        </div>
                        <div className={styles.divara}>
                            <input type="text" className={styles.ara}/>
                            <SearchIcon className={styles.ikonara}/>
                        </div>
                    </div>
                    <Card className={styles.card}>
                        <h1 className={styles.yazi000}> Filtrele </h1>
                        <div className={styles.cardic}>
                            <div className={styles.cardic1}>
                                <h1 className={styles.icyazi1}>Kategori Adı: </h1>
                                <input type="text" className={styles.in1}/>
                            </div>
                            <div className={styles.cardic2}>
                                <h1 className={styles.icyazi2}>Kategori Kodu: </h1>
                                <input type="text" className={styles.in2}/>
                            </div>
                        </div>
                    </Card>

                    <button className={styles.lis} onClick={handleListeleClick}>Listele</button>
                    {showResults && (
                        <Card className={styles.cardalt}>
                            <TableContainer component={Paper} className={styles.aa01}>
                                <Table>
                                    <TableHead>
                                        <TableRow>

                                            <tr className={styles.iiii01}>
                                                <TableCell align="right" className={styles.katad}>
                                                    Kategori Ad
                                                </TableCell>
                                                <TableCell align="right" className={styles.katkod}>
                                                    Kategori Kodu
                                                </TableCell>
                                                <TableCell align="right" className={styles.katsay}>
                                                    Toplam Ürün Sayısı
                                                </TableCell>
                                                <TableCell align="right" className={styles.katmal}>
                                                    Toplam Maliyet
                                                </TableCell>

                                            </tr>
                                            <TableBody className={styles.body}>

                                                {kat.map(({category_ad, category_kodu, id, top_say, top_maliyet}) => (
                                                    <React.Fragment key={id}>
                                                        <tr className={styles.bodys01}>
                                                            <td className={styles.katad1}>{category_ad}</td>
                                                            <td className={styles.katkod1}>{category_kodu}</td>
                                                            <td className={styles.katsay1}>{top_say}</td>
                                                            <td className={styles.katmal1}>{top_maliyet}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="10">&nbsp;</td>
                                                            {/* 4 sütunlu boş bir satır */}
                                                        </tr>
                                                    </React.Fragment>
                                                ))}
                                            </TableBody>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Card>

                    )}
                </div>
            </div>
        </>
    );
};

export default Kategorilistele;
