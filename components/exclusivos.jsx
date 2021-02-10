import React from 'react';
import styles from '../styles/exclusivos.module.css';
import data from '../data/beneficiosExclusivos.json';

export const Exclusivos = () => {
    return (
        <>
            <h1 className={styles.titulo}>Beneficios Exclusivos:</h1>
            <section className={styles.contenedor}>
                {data.map((elemento, index) => (
                    <div
                        className={styles.beneficio}
                        key={`beneficio-${index}`}
                    >
                        <img src={elemento.slug} />
                        <p>{elemento.beneficio}</p>
                    </div>
                ))}
            </section>
            <h3 className={styles.titulo2}>Y mucho más...</h3>
            <p className={styles.textoLlamada}>
                Abre tu Cuenta de Ahorro Digital en{' '}
                <strong className="text-principal">HOLAbank</strong>, la Banca
                Digital de BanBif.
            </p>
        </>
    );
};
