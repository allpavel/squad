import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import styles from "../../styles/NavBar.module.css";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
    const router = useRouter();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
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
                <li className={`${styles.navigationListItem} ${styles.dropdown}`}>
                    <a>
                        Dropdown <BiChevronDown />
                    </a>
                    <ul className={styles.dropdownList}>
                        <li className={styles.navigationListItem}>
                            <a>Dropdown 1</a>
                        </li>
                        <li className={styles.navigationListItem}>
                            <a>Dropdown 2</a>
                        </li>
                        <li className={`${styles.navigationListItem} ${styles.deepDropdown}`}>
                            <a>
                                Dropdown 3 <BiChevronDown />
                            </a>
                            <ul className={styles.deepDropdownList}>
                                <li className={styles.navigationListItem}>
                                    <a>Deep Dropdown 1</a>
                                </li>
                                <li className={styles.navigationListItem}>
                                    <a>Deep Dropdown 2</a>
                                </li>
                                <li className={styles.navigationListItem}>
                                    <a>Deep Dropdown 3</a>
                                </li>
                                <li className={styles.navigationListItem}>
                                    <a>Deep Dropdown 4</a>
                                </li>
                                <li className={styles.navigationListItem}>
                                    <a>Deep Dropdown 5</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navigationListItem}>
                            <a>Dropdown 4</a>
                        </li>
                        <li className={styles.navigationListItem}>
                            <a>Dropdown 5</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.navigationListItem}>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
