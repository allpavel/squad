import { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import About from "../../components/About/About";
import styles from "../../styles/Main.module.css";
import Services from "../../components/Services/Services";
import Description from "../../components/Description/Description";

export default function AboutUs() {
    return (
        <main className={styles.main}>
            <Description />
            <About />
            <Services />
        </main>
    );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
