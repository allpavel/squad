import Head from "next/head";
import { useGetPath } from "../../hooks/useGetPath";
import About from "../../components/About/About";
import styles from "../../styles/Main.module.css";
import Services from "../../components/Services/Services";
import Description from "../../components/Description/Description";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function AboutUs() {
    const path = useGetPath();
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <Description />
                <About />
                <Services />
            </main>
        </>
    );
}
