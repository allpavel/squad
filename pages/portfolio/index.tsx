import { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useGetPath } from "../../hooks/useGetPath";
import styles from "../../styles/Main.module.css";

export default function PortfolioPage() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <h1>Hello world!</h1>
        </main>
    );
}

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
