import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdMenu, MdClose } from "react-icons/md";
import NavBar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import styles from "../../styles/Header.module.css";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { throttle } from "../../utilities/throttle";

const Header: React.FC = () => {
    const [header, setHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMobileMenuClick = () => {
        setIsOpen((prev) => !prev);
    };

    const router = useRouter();

    useEffect(() => {
        const changeHeaderBackgroundColor = () => {
            if (window.scrollY >= 120) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        const throttledChangeHeaderBackgroundColor = throttle(changeHeaderBackgroundColor, 200);

        window.addEventListener("scroll", throttledChangeHeaderBackgroundColor);

        return () => window.removeEventListener("scroll", throttledChangeHeaderBackgroundColor);
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
                <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.menu}>
                {isOpen ? <MdClose onClick={handleMobileMenuClick} /> : <MdMenu onClick={handleMobileMenuClick} />}
            </div>
        </header>
    );
};

export default Header;
