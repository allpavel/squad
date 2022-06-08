import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const [header, setHeader] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const changeHeaderBackgroundColor = () => {
            if (window.scrollY >= 120) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener("scroll", changeHeaderBackgroundColor);

        return () => window.removeEventListener("scroll", changeHeaderBackgroundColor);
    }, [header]);

    return (
        <header
            className={`${styles.header} ${router.pathname !== "/" ? styles.coloredHeader : ""} ${
                header ? styles.scrolledHeader : ""
            }`}
            id="header"
        >
            <div className={styles.container}>
                <Logo />
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
