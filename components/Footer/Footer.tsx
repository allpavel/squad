import React from "react";
import styles from "../../styles/Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <section className={styles.footerRow}>
                    <div className={styles.footerContacts}>
                        <h2>Squad</h2>
                        <p>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</p>
                        <p>
                            A108 Adam Street
                            <br />
                            NY 535022, USA
                            <br />
                            <br />
                            <b>Phone: </b>+1 2233 44556 66
                            <br />
                            <b>Email: </b> info@example.com
                        </p>
                        <div className={styles.socialLinks}>
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagramSquare />
                            <FaLinkedin />
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <h2>Useful Links</h2>
                        <ul>
                            <li>
                                <BiChevronRight />
                                Home
                            </li>
                            <li>
                                <BiChevronRight />
                                About Us
                            </li>
                            <li>
                                <BiChevronRight />
                                Services
                            </li>
                            <li>
                                <BiChevronRight />
                                Portfolio
                            </li>
                            <li>
                                <BiChevronRight />
                                Team
                            </li>
                            <li>
                                <BiChevronRight />
                                Contacts
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h2>Our Services</h2>
                        <ul>
                            <li>
                                <BiChevronRight />
                                Web Design
                            </li>
                            <li>
                                <BiChevronRight />
                                Web Development
                            </li>
                            <li>
                                <BiChevronRight />
                                Product Management
                            </li>
                            <li>
                                <BiChevronRight />
                                Marketing
                            </li>
                            <li>
                                <BiChevronRight />
                                Graphic Design
                            </li>
                            <li>
                                <BiChevronRight />
                                Terms of policy
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerNewsletter}>
                        <h2>Our Newsletter</h2>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form>
                            <input type="email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </section>
                <section className={styles.footerCopyright}>
                    <p>© Copyright free. All Rights Not Reserved</p>
                    <p>
                        Developed by <b>Pavel Alloyarov</b>
                    </p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
