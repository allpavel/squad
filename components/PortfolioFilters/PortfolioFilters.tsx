import { useState } from "react";
import styles from "../../styles/PortfolioFilters.module.css";

const PortfolioFilters: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");

    const toggleAll = () => {
        setFilter("all");
    };

    const toggleApp = () => {
        setFilter("app");
    };

    const toggleCard = () => {
        setFilter("card");
    };

    const toggleWeb = () => {
        setFilter("web");
    };

    return (
        <section className={styles.portfolioFilters}>
            <article className={styles.container}>
                <ul className={styles.filtersRow}>
                    <li className={styles.filtersItem} onClick={toggleAll}>
                        All
                    </li>
                    <li className={styles.filtersItem} onClick={toggleApp}>
                        App
                    </li>
                    <li className={styles.filtersItem} onClick={toggleCard}>
                        Card
                    </li>
                    <li className={styles.filtersItem} onClick={toggleWeb}>
                        Web
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default PortfolioFilters;
