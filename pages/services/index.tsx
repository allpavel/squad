import { ReactElement } from "react";
import { useGetPath } from "../../hooks/useGetPath";
import Services from "../../components/Services/Services";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/Main.module.css";
import Counter from "../../components/Counter/Counter";
import CallToAction from "../../components/CallToAction/CallToAction";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function ServicesPage() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <Services />
            <Counter />
            <CallToAction />
        </main>
    );
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
