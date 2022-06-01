import React from "react";
import NavBar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header} id="header">
            <Logo />
            <NavBar />
        </header>
    );
};

export default Header;
