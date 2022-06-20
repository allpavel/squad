import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import PortfolioFilters from "../../components/PortfolioFilters/PortfolioFilters";
import { useGetPath } from "../../hooks/useGetPath";
import styles from "../../styles/Main.module.css";

export default function PortfolioPage() {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <PortfolioTitle />
            <PortfolioFilters />
        </main>
    );
}
