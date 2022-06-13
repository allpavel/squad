import React from "react";
import styles from "../../styles/ContactsAddress.module.css";
import { BiMap, BiEnvelope, BiPhoneCall } from "react-icons/bi";

const ContactsAddress: React.FC = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.container}>
                <article className={`${styles.info} ${styles.address}`}>
                    <div className={styles.icon}>
                        <BiMap />
                    </div>
                    <h2>Our Adress</h2>
                    <p>A108 Adam Street, New York, NY 535022</p>
                </article>
                <article className={`${styles.info} ${styles.email}`}>
                    <div className={styles.icon}>
                        <BiEnvelope />
                    </div>
                    <h2>Email Us</h2>
                    <p>contacts@examples.com</p>
                </article>
                <article className={`${styles.info} ${styles.call}`}>
                    <div className={styles.icon}>
                        <BiPhoneCall />
                    </div>
                    <h2>Call Us</h2>
                    <p>+1 2345 67890</p>
                </article>
            </div>
        </section>
    );
};

export default ContactsAddress;
