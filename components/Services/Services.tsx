import React from "react";
import { motion } from "framer-motion";
import { BsDribbble } from "react-icons/bs";
import { BiFile, BiTachometer, BiWorld } from "react-icons/bi";
import styles from "../../styles/Services.module.css";

const Services: React.FC = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ transition: { type: "tween", duration: 1 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Services</h2>
                    <p>
                        Above face a subdue, you&apos;ll kind darkness Female lights light meat. One replenish place
                        morning day you&apos;ll life them don&apos;t two, image fill stars sixth divide let, fourth.
                        Appear bring won&apos;t spirit, have morning. Winged behold female very created creature.
                    </p>
                </motion.div>
                <div className={styles.row}>
                    <motion.article
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 0.6 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BsDribbble />
                        <h3>Lorem Ipsum</h3>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </motion.article>
                    <motion.article
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiFile />
                        <h3>Sed ut perspiciatis</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </motion.article>
                    <motion.article
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1.4 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiTachometer />
                        <h3>Magni Dolores</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </motion.article>
                    <motion.article
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1.6 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiWorld />
                        <h3>Nemo Enim</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </motion.article>
                </div>
            </div>
        </section>
    );
};

export default Services;
