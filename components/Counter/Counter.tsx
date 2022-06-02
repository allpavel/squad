import React, { useEffect, useState } from "react";
import { BsEmojiSmile, BsJournalRichtext, BsHeadset, BsPeople } from "react-icons/bs";
import { CounterNumber } from "./CounterNumber";
import styles from "../../styles/Counter.module.css";

const Counter: React.FC = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const selector = document.querySelector("#counter")!;

        const observer = new IntersectionObserver(
            function (entries) {
                if (entries[0].isIntersecting) setInView(true);
            },
            { threshold: [0.3] }
        );

        observer.observe(selector);
    }, []);

    return (
        <section className={styles.counter}>
            <div className={styles.container}>
                <div className={styles.counterItem}>
                    <div className={styles.counterIcon}>
                        <BsEmojiSmile />
                    </div>
                    <div className={styles.counterText} id="counter">
                        <CounterNumber from={0} to={232} inView={inView} />
                        <p>
                            <b>Happy clients</b> consequuntur quae
                        </p>
                    </div>
                </div>
                <div className={styles.counterItem}>
                    <div className={styles.counterIcon}>
                        <BsJournalRichtext />
                    </div>
                    <div className={styles.counterText}>
                        <CounterNumber from={0} to={521} inView={inView} />
                        <p>
                            <b>Projects</b> adipisci atque cum quia aut
                        </p>
                    </div>
                </div>
                <div className={styles.counterItem}>
                    <div className={styles.counterIcon}>
                        <BsHeadset />
                    </div>
                    <div className={styles.counterText}>
                        <CounterNumber from={0} to={1463} inView={inView} />
                        <p>
                            <b>Hours Of Support</b> aut commodi quaerat
                        </p>
                    </div>
                </div>
                <div className={styles.counterItem}>
                    <div className={styles.counterIcon}>
                        <BsPeople />
                    </div>
                    <div className={styles.counterText}>
                        <CounterNumber from={0} to={15} inView={inView} />
                        <p>
                            <b>Hard Workers</b> rerum asperiores dolor
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
