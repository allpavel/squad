import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/normalize.css";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
