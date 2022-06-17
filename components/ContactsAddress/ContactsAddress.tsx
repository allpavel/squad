import styles from "../../styles/ContactsAddress.module.css";
import { BiMap, BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import Form from "../Form/Form";

const ContactsAddress: React.FC = () => {
    return (
        <motion.section
            className={styles.contacts}
            initial={{ opacity: 0 }}
            whileInView={{ transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.addressContainer}>
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
            <div className={styles.mapContainer}>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.1129038876493!2d-73.98714659254851!3d40.75705799619823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86d0bd549e20f12c!2zNDDCsDQ1JzI1LjQiTiA3M8KwNTknMTAuNCJX!5e0!3m2!1sru!2sru!4v1655149152050!5m2!1sru!2sru"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <Form />
            </div>
        </motion.section>
    );
};

export default ContactsAddress;
