import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
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
