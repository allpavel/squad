import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../styles/Form.module.css";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    }, [isSubmitSuccessful, reset]);

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={styles.name}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            aria-invalid={errors.name ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.name ? styles.error : ""}`}
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className={styles.errorMessage}>This field is required</p>}
                    </div>
                    <div>
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
                        {errors.email && <p className={styles.errorMessage}>This field is required</p>}
                    </div>
                </div>
                <div className={styles.subject}>
                    <div>
                        <input
                            type="text"
                            placeholder="Subject"
                            aria-invalid={errors.subject ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.subject ? styles.error : ""}`}
                            {...register("subject", { required: true })}
                        />
                        {errors.subject && <p className={styles.errorMessage}>This field is required</p>}
                    </div>
                </div>
                <div className={styles.textarea}>
                    <div>
                        <textarea
                            placeholder="Message"
                            rows={5}
                            aria-invalid={errors.message ? "true" : "false"}
                            className={`${styles.inputBorder} ${errors.message ? styles.error : ""}`}
                            {...register("message", { required: true })}
                        />
                        {errors.message && <p className={styles.errorMessage}>This field is required</p>}
                    </div>
                </div>
                <div className={styles.button}>
                    <button type="submit" disabled={isSubmitting}>
                        Send Message
                    </button>
                </div>
            </form>
            {isSubmitSuccessful && <div>Form submitted successfully</div>}
        </>
    );
};

export default Form;
