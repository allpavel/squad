import { ReactElement } from "react";
import { useGetPath } from "../../hooks/useGetPath";
import Layout from "../../components/Layout/Layout";
import About from "../../components/About/About";
import styles from "../../styles/Main.module.css";
import Services from "../../components/Services/Services";
import Description from "../../components/Description/Description";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function AboutUs() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <Description />
            <About />
            <Services />
        </main>
    );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
