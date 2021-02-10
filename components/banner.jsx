import React from 'react';
import styles from '../styles/banner.module.css';
export const Banner = () => {
    return (
        <section className={styles.contenedor}>
            <div className="pl-5">
                <p className={styles.mensajeAlt}>
                    “Solo quería decirte que no eres tú, soy yo...
                </p>
                <p className={styles.mensaje}>
                    Quiero un banco que me dé más por mi dinero”.
                </p>
            </div>
            <img
                className={styles.imagen}
                src="https://i.ibb.co/ZmbHCnc/girlfromright.png"
            />
        </section>
    );
};
