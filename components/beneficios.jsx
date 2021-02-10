import React from 'react';
import styles from '../styles/beneficios.module.css';

export const Beneficios = () => {
    return (
        <section className={styles.contenedor}>
            <p className={styles.mensaje}>
                Disfruta de todos los beneficios de ahorrar con tu Cuenta de
                Ahorro Digital
            </p>
            {/* insertando las cajas de los beneficios */}
            <div className={styles.caja}>
                <img
                    className={styles.icono}
                    src="https://i.ibb.co/k9JjPwm/biometrico-1.png"
                />
                <p className={styles.parrafo}>
                    Actívala con tu <strong>huella digital</strong> y úsala al
                    instante
                </p>
            </div>

            <div className={styles.caja}>
                <img
                    className={styles.icono}
                    src="https://i.ibb.co/jgPCJfM/seguridad.png"
                />
                <p className={styles.parrafo}>
                    <strong>Seguro de Protección Digital</strong> por 3 meses
                    GRATIS
                </p>
            </div>
        </section>
    );
};
