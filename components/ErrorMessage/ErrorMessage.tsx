import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/ErrorMessage.module.css";

type Props = {
    code: number;
};

const ErrorMessage: FC<Props> = ({ code }) => {
    return (
        <section className={styles.error}>
            <h1>{code}</h1>
            <div className={styles.text}>
                <p>Oops, sorry we can&apos;t find that page!</p>
                <p>Either something went wrong or the page doesn&apos;t exist anymore</p>
            </div>
            <Link href={"/"}>
                <a className={styles.link}>Home Page</a>
            </Link>
        </section>
    );
};

export default ErrorMessage;
