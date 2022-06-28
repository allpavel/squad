import Head from "next/head";
import { useGetPath } from "../../hooks/useGetPath";
import Services from "../../components/Services/Services";
import Counter from "../../components/Counter/Counter";
import CallToAction from "../../components/CallToAction/CallToAction";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "../../styles/Main.module.css";

export default function ServicesPage() {
    const path = useGetPath();
    return (
        <>
            <Head>
                <title>Services Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <Services />
                <Counter />
                <CallToAction />
            </main>
        </>
    );
}
