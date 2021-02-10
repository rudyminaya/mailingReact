import Head from 'next/head';
import { Action } from '../components/action';
import { Banner } from '../components/banner';
import { Beneficios } from '../components/beneficios';
import { Condiciones } from '../components/condiciones';
import { Exclusivos } from '../components/exclusivos';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Action />
            <Beneficios />
            <Exclusivos />
            <Condiciones />
            <Footer />
        </>
    );
}
