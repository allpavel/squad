import Link from "next/link";
import React from "react";
import styles from "../../styles/Breadcrumbs.module.css";

interface Props {
    path: string[];
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
    if (path.length === 1 || Number.isInteger(+path[path.length - 1])) {
        return (
            <section className={styles.breadcrumbs}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{path[0]}</h2>
                    <ol className={styles.links}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>{path[0]}</li>
                    </ol>
                </div>
            </section>
        );
    }
    return (
        <section className={styles.breadcrumbs}>
            <div className={styles.container}>
                <h2 className={styles.title}>{path[0]}</h2>
                <ol className={styles.links}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    {path.slice(0, path.length - 1).map((link, index) => (
                        <li key={index}>
                            <Link href={`/${link.toLowerCase()}/`}>
                                <a>{link}</a>
                            </Link>
                        </li>
                    ))}
                    <li>{path[path.length - 1]}</li>
                </ol>
            </div>
        </section>
    );
};

export default Breadcrumbs;
