import React from "react";
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const  Header = () => {
    return(
        <div className={styles.header}>
            <nav className={styles.menu}>
                <img src="./images/logo.png" className={styles.img1}></img>
                <Link to="/" className={styles.scan}>물건인식</Link>
                <Link to="/" className={styles.carbon}>현재탄소량</Link>
                <Link to="/" className={styles.guide}>가이드</Link>
                <Link to="/" className={styles.my}>MY</Link>
            <div className={styles.login}>
                <Link to="/" className={styles.sign}>Login</Link>
                <Link to="/" className={styles.sign}>Sign Up</Link>
            </div>
            </nav>
        </div>
    );
}