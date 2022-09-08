import React from "react";
import Link from "next/link";
import { BiReceipt, BiCubeAlt, BiImages, BiShield, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

const About: React.FC = () => {
    return (
        <section id="about" className={styles.about}>
            <h2 className="visually-hidden">About Us</h2>
            <div className={styles.container}>
                <motion.article
                    className={styles.bigCell}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>They are life make our spirit</h3>
                    <p>
                        The called female you kind under darkness creepeth image cattle green give very sixth was, give
                        signs a. Bearing made thing seasons above above stars yielding grass let moveth itself.
                    </p>
                    <Link href="/about">
                        <a>
                            About Us <BiChevronRight />
                        </a>
                    </Link>
                </motion.article>
                <article className={styles.smallCell}>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiReceipt />
                        <h3>Together brought fill</h3>
                        <p>
                            There moved creeping the to. Creeping years i good fruit fowl doesn&apos;t, his bring a
                            creepeth him so his.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiCubeAlt />
                        <h3>Gathering one creepeth</h3>
                        <p>
                            I is not beginning divided divided be likeness image were. Two Fruit fowl, a sea male his.
                            Lesser seas was saw.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiImages />
                        <h3>Day herb spirit us he</h3>
                        <p>
                            Upon they&apos;re had meat fish winged there wherein for. Their man after multiply signs.
                            Sea own living good. Lesser there.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, transition: { type: "tween", duration: 1 }, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <BiShield />
                        <h3>Land blessed bring above</h3>
                        <p>
                            Form behold from light place gathering created whales midst after may divide replenish,
                            brought multiply whose. Life there. Multiply set.
                        </p>
                    </motion.div>
                </article>
            </div>
        </section>
    );
};

export default About;
