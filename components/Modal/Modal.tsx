import { ReactNode } from "react";
import styles from "../../styles/Modal.module.css";

type Props = {
    isVisible: boolean;
    setIsVisible: (arg: boolean) => void;
    children: ReactNode;
};

const Modal: React.FC<Props> = ({ isVisible, setIsVisible, children }) => {
    const handleCloseModal = () => {
        setIsVisible(false);
        document.body.style.overflow = "auto";
    };

    return (
        <section className={`${styles.modal} ${isVisible ? styles.active : ""}`} onClick={handleCloseModal}>
            <article className={styles.container} onClick={(event) => event?.stopPropagation()}>
                {children}
            </article>
        </section>
    );
};

export default Modal;
