import { ReactElement } from "react";
import Services from "../../components/Services/Services";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/Main.module.css";
import Counter from "../../components/Counter/Counter";
import CallToAction from "../../components/CallToAction/CallToAction";

export default function ServicesPage() {
    return (
        <main className={styles.main}>
            <Services />
            <Counter />
            <CallToAction />
        </main>
    );
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
