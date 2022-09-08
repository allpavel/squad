import React from "react";
import Link from "next/link";
import styles from "../../styles/Logo.module.css";

const Logo: React.FC = () => {
    return (
            <Link href="/">
                <a className={styles.logo}>Squadfree</a>
            </Link>
    );
};

export default Logo;
