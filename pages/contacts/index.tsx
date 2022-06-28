import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactsAddress from "../../components/ContactsAddress/ContactsAddress";
import { useGetPath } from "../../hooks/useGetPath";
import styles from "../../styles/Main.module.css";

export default function ContactsPage() {
    const path = useGetPath();
    return (
        <>
            <Head>
                <title>Contacts Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <ContactsAddress />
            </main>
        </>
    );
}
