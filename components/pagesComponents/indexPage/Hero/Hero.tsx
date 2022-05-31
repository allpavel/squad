import React from "react";
import { BiChevronsDown } from "react-icons/bi";
import styles from "../../../../styles/Hero.module.css";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <h1>Welcome to Squad</h1>
            <p>We are team of designers making websites</p>
            <a href="#about">
                <BiChevronsDown />
            </a>
        </section>
    );
};

export default Hero;
