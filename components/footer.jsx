import React from 'react';
import styles from '../styles/footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.contenedor}>
            <img
                className={styles.icono}
                src="https://i.ibb.co/q0gJMj8/mail-Security.png"
            />
            <p className={styles.parrafo}>
                <span className={styles.capital}>Hola, </span>BanBif nunca te
                solicitará, por correo electrónico, que envíes o informes tus
                datos financieros que pudieran vulnerar tu seguridad, como: 
                <strong>
                    claves de acceso, datos de tus tarjetas de débito o crédito
                    (como el número, fecha de vencimiento, CVV), número de
                    cuentas.
                </strong>
            </p>
        </footer>
    );
};
