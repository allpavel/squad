import { ReactElement } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Layout from "../components/Layout/Layout";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useGetPath } from "../hooks/useGetPath";
import styles from "../styles/Main.module.css";

export default function ErrorPage() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <ErrorMessage />
        </main>
    );
}

ErrorPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
