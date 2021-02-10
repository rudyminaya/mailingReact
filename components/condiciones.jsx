import React from 'react';
import styles from '../styles/condiciones.module.css';

export const Condiciones = () => {
    return (
        <>
            <section className={styles.info}>
                <div className={styles.iconos}>
                    <img src="https://i.ibb.co/XpHT1Xk/compromiso.png" />

                    <img src="https://i.ibb.co/sQ5S81g/trea.png" />
                </div>
                <p className={styles.ejemplo}>
                    Ejemplo de TREA referencial: Para un monto inicial de
                    apertura por S/1,000 considerando una TEA de 3% a 12 meses.
                    Este ejemplo no considera movimientos en la cuenta. Saldo
                    mínimo de equilibrio: cualquier saldo que se mantenga en la
                    cuenta.
                </p>
            </section>
            <section className={styles.condiciones}>
                <p className={styles.parrafo}>
                    <strong>Cuenta de Ahorro Digital: </strong>la Cuenta de
                    Ahorro Digital es una Cuenta de Ahorro abierta a través de
                    la web www.banbif.com.pe/personas/Cuenta-Digital-moneda. Al
                    abrir la cuenta, podrá recibir fondos hasta US $9,999 o su
                    equivalente en soles. Para poder realizar retiros o
                    transferencias a través de la Banca Digital (web o app) y
                    recibir mayores fondos, el cliente deberá activar su cuenta
                    utilizando una de las siguientes modalidades; a) BanBif App:
                    Ingresar al App y hacer click en la opción “identificación".
                    La App podrá ser descargada sin costo del Play Store, App
                    Store y AppGallery. B) Oficinas BanBif: Acercarse a una
                    oficina y firmar la Solicitud de Activación de Cuenta; así
                    como, recibir y activar la Tarjeta de Débito. De no recibir
                    fondos en la cuenta o no activarla en los siguientes 60 días
                    calendario, esta será cancelada, dejando sin efecto la
                    oferta de esta campaña.
                    <strong> Seguro de Protección Digital: </strong>Los
                    titulares de las primeras 5,000 Cuentas de Ahorro Digital
                    podrán obtener un Seguro de Protección Digital gratis con
                    Mapfre Perú cuya cobertura estará vigente durante 90 días
                    desde la activación de la cuenta. El seguro brinda
                    protección contra uso indebido de la Tarjeta de Débito
                    asociada a la Cuenta de Ahorro Digital BanBif a consecuencia
                    de estafa mediante las modalidades de phishing y robo de
                    dinero extraído de cajeros automáticos.{' '}
                    <strong>Tarjeta de Débito Virtual: </strong>
                    Válida para clientes nuevos BanBif que abran la Cuenta de
                    Ahorro Digital a través de la web de BanBif y la activen
                    desde la BanBif App.
                    <strong>
                        {' '}
                        Condiciones de la tasa promocional 3%TREA:{' '}
                    </strong>
                    El cálculo para el pago de intereses para cuentas abiertas
                    durante la vigencia de la campaña, se realizará por tramos
                    según saldos diarios; es decir, por los primeros S/20,000 o
                    cualquier monto menor se calcula con TEA 3.00% y por montos
                    adicionales a S/20,000, se calcula con TEA 0.50%. Se
                    asignará la tasa especial de 3.00% TREA por los primeros
                    S/20,000, al momento de la apertura de la cuenta y estará
                    vigente hasta el 07/02/2022. Luego de dicho plazo la tasa
                    retornará a la tasa según tarifario de la Cuenta de Ahorro
                    Digital. Aplica ITF 0.005%, según D.S. Nº150-2007-EF.
                    <strong> Afiliación a HOLAbank (Web o App): </strong> En el
                    proceso de la creación de su Cuenta de Ahorro Digital, el
                    cliente podrá afiliarse a HOLAbank, en caso de no estar
                    afiliado. <strong>Beneficios y Descuentos: </strong>
                    Promociones válidas solo con Cuentas de Ahorro Digital hasta
                    el 23/02/2021. Mayor información en 
                    <a
                        className={styles.link}
                        href="https://banbif.com.pe/holabank"
                    >
                        www.banbif.com.pe/holabank
                    </a>
                    .
                    <br />
                    Depósito cubierto por el Fondo de Seguro de Depósitos hasta
                    por un monto de S/101,522.00 para el trimestre diciembre
                    2020 - febrero 2021, de acuerdo a la Circular SBS N°
                    B-2253-2020, reajustable trimestralmente. Información sobre
                    los costos de nuestros productos disponibles en las Oficinas
                    de atención al público a través del tarifario y en nuestra
                    página web www. banbif. com. pe en “Tarifario General”. MKT
                    23.01.21.
                </p>
            </section>
            <p className={styles.spamMensaje}>
                Si este correo electrónico no fuese de su interés, le pedimos
                disculpas por la molestia. No es posible generar consultas a
                través de esta dirección de correo electrónico por estar
                habilitada exclusivamente para envíos. De acuerdo con la Ley N°
                28493 y su reglamento, la presente comunicación no es
                considerada correo electrónico comercial no solicitado (SPAM).
                En caso no desee recibir publicidad, por favor enviar un correo
                a: marketing @ banbif.com.pe con el asunto NO DESEO MÁS CORREOS.
            </p>
        </>
    );
};
