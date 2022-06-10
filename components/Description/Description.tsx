import React from "react";
import Image from "next/image";
import ourTeam from "../../assets/img/ourTeam.jpg";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import styles from "../../styles/Description.module.css";

const Description: React.FC = () => {
    return (
        <section className={styles.description}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={ourTeam} alt="Photo of our team" width="486" height="386" />
                </div>
                <motion.article
                    className={styles.text}
                    initial={{ opacity: 0 }}
                    whileInView={{ transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Fill creature shall gathering under gathered open us us under first she&apos;d together.</h2>
                    <p>
                        Two likeness tree together, is deep midst let. Had had were in there. Let meat two his may
                        fruitful fifth.
                    </p>
                    <ul>
                        <li>
                            <BsCheck2Circle />
                            Earth were one heaven. Can&apos;t seed called replenish every female
                        </li>
                        <li>
                            <BsCheck2Circle />
                            Bearing. Good also fruitful heaven. Don&apos;t thing whales given his
                        </li>
                        <li>
                            <BsCheck2Circle />
                            Him of is morning fruit. Sixth brought. I unto two. Brought midst fourth is them. Make seas
                            one above seasons. Saying upon appear subdue stars. Green herb. Subdue. Signs i can&apos;t
                            You&apos;re female fowl moveth.
                        </li>
                    </ul>
                    <p>
                        Multiply creepeth the from greater days moveth, in set i our earth spirit fly. Under seasons.
                        Day is a likeness made seas their fly fly fowl moved. Creeping fill living great is likeness be
                        creepeth morning Man form good over there fruitful stars whose earth second place abundantly
                        together beast divide. Kind in day open i him upon deep won&apos;t.
                    </p>
                </motion.article>
            </div>
        </section>
    );
};

export default Description;
