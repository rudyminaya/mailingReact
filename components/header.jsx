import React from 'react';
import styles from '../styles/header.module.css';
export const Header = () => {
    return (
        <header className={styles.contenedor}>
            <h1 className={styles.titulo}>Cuenta de Ahorro Digital</h1>
            <img
                className={styles.logo}
                src="https://i.ibb.co/p3Zxrdb/logo-Ban-Bif.png"
            />
        </header>
    );
};
