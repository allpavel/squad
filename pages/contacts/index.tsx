import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactsAddress from "../../components/ContactsAddress/ContactsAddress";
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
