import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/MobileNavbar.module.css";

interface Props {
    isOpen: boolean;
    setIsOpen: (param: boolean) => void;
}

const MobileNavbar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const router = useRouter();
    return (
        <nav className={`${styles.mobileNavigation} ${isOpen ? styles.isOpen : styles.isClosed}`}>
            <ul className={styles.mobileNavigationList} onClick={() => setIsOpen(false)}>
                <li className={styles.navigationListItem}>
                    <Link href="/">
                        <a className={`${router.pathname === "/" ? styles.active : ""}`}>Home</a>
                    </Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/about">
                        <a className={`${router.pathname === "/about" ? styles.active : ""}`}>Abous Us</a>
                    </Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/services">
                        <a className={`${router.pathname === "/services" ? styles.active : ""}`}>Services</a>
                    </Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/portfolio">
                        <a className={`${router.pathname === "/portfolio" ? styles.active : ""}`}>Portfolio</a>
                    </Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/team">
                        <a className={`${router.pathname === "/team" ? styles.active : ""}`}>Team</a>
                    </Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/contacts">
                        <a className={`${router.pathname === "/contacts" ? styles.active : ""}`}>Contacts</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
