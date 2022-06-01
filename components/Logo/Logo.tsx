import React from "react";
import Link from "next/link";
import styles from "../../styles/Logo.module.css";

const Logo: React.FC = () => {
    return (
        <h1 className={styles.logo}>
            <Link href="/">
                <a>Squadfree</a>
            </Link>
        </h1>
    );
};

export default Logo;
