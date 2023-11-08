import React from "react";
import Link from "next/link";
import styles from "./anasayfa.module.scss";
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';






const Anasayfa = ({ children }) => {


    return (
        <>
            <div className={styles.dis}>

                <div className={styles.en1}>
                    <div className={styles.ikyaz1}>
                    <PersonIcon className={styles.ikon1}/>
                    <h1 className={styles.yazi1}>Kullanıcı İşlemleri</h1>
                    </div>
                    <div className={styles.altalt}>
                        <div className={styles.linkdiv1}>
                    <Link href= "/kullanicikaydi">
                        <ArrowRightIcon className={styles.ikon2}/>
                        <h1 className={styles.alt1} style={{ whiteSpace: 'nowrap' }}>Kullanıcı kaydı</h1>
                    </Link>
                        </div>
                        <div className={styles.linkdiv2}>
                    <Link href= "/yetkilendirme">
                        <ArrowRightIcon className={styles.ikon3}/>
                        <h1 className={styles.alt2} style={{ whiteSpace: 'nowrap' }}>Yetki İşlemleri</h1>
                    </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.en1}>
                    <div className={styles.ikyaz1}>
                        <OtherHousesIcon className={styles.ikon1}/>
                        <h1 className={styles.yazi1}>Depo İşlemleri</h1>
                    </div>
                    <div className={styles.altalt}>
                        <div className={styles.linkdiv1}>
                            <Link href= "/depo">
                                <ArrowRightIcon className={styles.ikon2}/>
                                <h1 className={styles.altdep} style={{ whiteSpace: 'nowrap' }}>Depo kaydı</h1>
                            </Link>
                        </div>
                        <div className={styles.linkdiv2}>
                            <Link href= "/depolistele">
                                <ArrowRightIcon className={styles.ikon3}/>
                                <h1 className={styles.alt2} style={{ whiteSpace: 'nowrap' }}>Depoları Listele</h1>
                            </Link>
                        </div>
                        <div className={styles.linkdiv3}>
                            <Link href= "/depoeklemes">
                                <ArrowRightIcon className={styles.ikon4}/>
                                <h1 className={styles.alt4} style={{ whiteSpace: 'nowrap' }}>Depoya Ürün Ekle</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.en1}>
                    <div className={styles.ikyaz1}>
                        <CategoryIcon className={styles.ikon1}/>
                        <h1 className={styles.yazi1}>Kategoriler</h1>
                    </div>
                    <div className={styles.altalt}>
                        <div className={styles.linkdiv1}>
                            <Link href= "/kategoriler">
                                <ArrowRightIcon className={styles.ikon2}/>
                                <h1 className={styles.alt1} style={{ whiteSpace: 'nowrap' }}>Kategori kaydı</h1>
                            </Link>
                        </div>
                        <div className={styles.linkdiv2}>
                            <Link href= "/kategorilistele">
                                <ArrowRightIcon className={styles.ikon3}/>
                                <h1 className={styles.alt2} style={{ whiteSpace: 'nowrap' }}>Kategori Listele</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.en1}>
                    <div className={styles.ikyaz1}>
                        <ShoppingCartCheckoutIcon className={styles.ikon1}/>
                        <h1 className={styles.yazi1}>Ürünler</h1>
                    </div>
                    <div className={styles.altalt}>
                        <div className={styles.linkdiv1}>
                            <Link href= "a">
                                <ArrowRightIcon className={styles.ikon2}/>
                                <h1 className={styles.altrn} style={{ whiteSpace: 'nowrap' }}>Ürün kaydı</h1>
                            </Link>
                        </div>
                        <div className={styles.linkdiv2}>
                            <Link href= "a">
                                <ArrowRightIcon className={styles.ikon3}/>
                                <h1 className={styles.alt2} style={{ whiteSpace: 'nowrap' }}>Ürünleri Listele</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.har1}>
                    <SwapHorizIcon className={styles.ikonhr}/>
                    <h1 className={styles.yazi1}>Ürün Hareketleri</h1>
                </div>

                <div className={styles.har1}>
                    <ShoppingCartIcon className={styles.ikonhr}/>
                    <h1 className={styles.yazi1}>Mal Kabul/Sevkiyat <br/> İşlemleri</h1>
                </div>


                <div className={styles.en1}>
                    <div className={styles.ikyaz1}>
                        <LocalShippingIcon className={styles.ikon1}/>
                        <h1 className={styles.yazi1}>Araç İşlemleri</h1>
                    </div>
                    <div className={styles.altalt}>
                        <div className={styles.linkdiv1}>
                            <Link href= "a">
                                <ArrowRightIcon className={styles.ikon2}/>
                                <h1 className={styles.altrn} style={{ whiteSpace: 'nowrap' }}>Araç kaydı</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Anasayfa;
