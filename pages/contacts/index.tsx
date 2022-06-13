import { ReactElement } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactsAddress from "../../components/ContactsAddress/ContactsAddress";
import Layout from "../../components/Layout/Layout";
import { useGetPath } from "../../hooks/useGetPath";
import styles from "../../styles/Main.module.css";

export default function ContactsPage() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <ContactsAddress />
        </main>
    );
}

ContactsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
