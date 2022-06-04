import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/CallToAction.module.css";

const CallToAction: React.FC = () => {
    return (
        <section className={styles.cta}>
            <motion.div
                className={styles.container}
                initial={{
                    scale: 0.7,
                }}
                whileInView={{ transition: { type: "tween", duration: 1 }, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2>Call To Action</h2>
                <p>
                    After called to. Saw years night, morning land. Unto. Sea living don&apos;t. Good she&apos;d waters
                    bring over behold. Heaven fly. Forth divided after divided after. Evening evening over spirit,
                    won&apos;t all created meat man behold midst place kind fifth winged.
                </p>
                <a href="#hero">Call To Action</a>
            </motion.div>
        </section>
    );
};

export default CallToAction;
