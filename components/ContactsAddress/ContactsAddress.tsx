import React from "react";
import styles from "../../styles/ContactsAddress.module.css";
import { BiMap, BiEnvelope, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactsAddress: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className={styles.name}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            aria-invalid={errors.name ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.name ? styles.error : ""}`}
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                        <input
                            type="text"
                            placeholder="Your Email"
                            aria-invalid={errors.email ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.email ? styles.error : ""}`}
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={styles.subject}>
                        <input
                            type="text"
                            placeholder="Subject"
                            aria-invalid={errors.subject ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.subject ? styles.error : ""}`}
                            {...register("subject", { required: true })}
                        />
                        {errors.subject && <span>This field is required</span>}
                    </div>
                    <div className={styles.textarea}>
                        <textarea
                            placeholder="Message"
                            rows={5}
                            aria-invalid={errors.message ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.message ? styles.error : ""}`}
                            {...register("message", { required: true })}
                        />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <div className={styles.button}>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </motion.section>
    );
};

export default ContactsAddress;
