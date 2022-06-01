import React from "react";
import { BiChevronsDown } from "react-icons/bi";
import { motion } from "framer-motion";
import styles from "../../../../styles/Hero.module.css";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, transition: { type: "tween", duration: 1 }, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h1>Welcome to Squad</h1>
                <p>We are team of designers making websites</p>
                <a href="#about">
                    <BiChevronsDown />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
