import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from 'firebase/database'
import styles from './main.module.css';

export const  Main = () => {
    // const [state, setState] = useState({});

    // useEffect(() => {
    //     const db = getDatabase();
    //     const tableRef = ref(db, "test");

    //     onValue(tableRef, snapshot => {
    //         const val = snapshot.val();
    //         setState(val)
    //     })
    // }, [])


    return(
        <div className={styles.container}>
            {/* {JSON.stringify(state)} */}
            <div className={styles.main}>
                <img src="./images/1354860_20201112142649_570_0001.jpg"></img>
            </div>
            <div className={styles.text}>
                <p>당신이 먹는 음식엔</p>
                <p>환경을 오염시키는 <b><span className={styles.fontC}>탄소</span></b>가 있습니다.</p>
            </div>
        </div>
    );
}