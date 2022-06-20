import { useGetPath } from "../../hooks/useGetPath";
import Services from "../../components/Services/Services";
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
