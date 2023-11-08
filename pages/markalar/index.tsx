import React from "react"
import styles from "./markalar.module.scss"

const Markalar = () => {
    return (
        <>
            <div className={styles.dis}>
                <h1 className={styles.yazi}>İş Birliği Yaptığımız Markalar!</h1>
                <div className={styles.marks}>
                    <div className={styles.marks1}>
                  <img src="/photos/marka1.png" className={styles.rsm1}/>
                    <img src="/photos/marka2.png" className={styles.rsm2}/>
                  <img src="/photos/marka3.png" className={styles.rsm3}/>
                    </div>
                    <div className={styles.marks2}>
                    <img src="/photos/marka4.png" className={styles.rsm4}/>
                   <img src="/photos/marka5.png" className={styles.rsm5}/>
                    <img src="/photos/marka6.png" className={styles.rsm6}/>
                    </div>
                    <div className={styles.marks3}>
                        <img src="/photos/marka7.png" className={styles.rsm7}/>
                    <img src="/photos/marka8.png" className={styles.rsm8}/>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Markalar;