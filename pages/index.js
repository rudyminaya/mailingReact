import Head from 'next/head';
import { Action } from '../components/action';
import { Banner } from '../components/banner';
import { Header } from '../components/header';
export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Action />
        </>
    );
}
