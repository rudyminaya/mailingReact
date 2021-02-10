import React from 'react';
import styles from '../styles/action.module.css';

export const Action = () => {
    return (
        <section className={styles.contenedor}>
            <h3 className={styles.hash}>#Nombre,</h3>
            <h1 className={styles.mensaje}>
                Abre tu Cuenta de Ahorro Digital con una tasa promocional y
                recibe más por tu dinero.
            </h1>
            <div className={styles.cajaAnuncio}>
                <img
                    className={styles.imagen}
                    src="https://i.ibb.co/djKRBcB/girlsmile.png"
                />
                <div className={styles.textoContenedor}>
                    <p className={styles.capital}>3%</p>
                    <p className={styles.parrafo}>
                        TREA en soles por los primeros
                    </p>
                    <p className={styles.abono}>S/20,000</p>
                    <p className={styles.vigencia}>
                        Vigencia: Del 23/01/21 al 06/02/21
                    </p>
                </div>
            </div>
            <button className={styles.boton}>Ábrela aquí</button>
        </section>
    );
};
