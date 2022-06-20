import { useGetPath } from "../../hooks/useGetPath";
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
