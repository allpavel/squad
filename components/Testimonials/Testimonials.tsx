import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Testimonials.module.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import testimonials1 from "../../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../../assets/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../../assets/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../../assets/img/testimonials/testimonials-5.jpg";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Testimonials</h2>
                    <p>
                        Very you&apos;ll firmament years also earth fowl and brought thing moved and set and fruitful
                        fill moveth moving. You&apos;ll fly male void third two night won&apos;t gathering firmament
                        appear. Whose.
                    </p>
                </motion.div>
                <motion.div
                    className={styles.imageSlider}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                    >
                        <SwiperSlide>
                            <p className={styles.imageSliderText}>
                                <ImQuotesLeft />
                                Greater, they&apos;re yielding place, creepeth called doesn&apos;t. Fifth it to
                                gathering saying place face one you&apos;ll together without stars place deep abundantly
                                over yielding. Likeness be called abundantly lights was over living. All god multiply
                                whales midst whose. Bearing, whose
                                <ImQuotesRight />
                            </p>
                            <Image src={testimonials1} alt="" width={90} height={90} />
                            <p className={styles.name}>Jena Karlis</p>
                            <p className={styles.job}>Entrepreneur</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className={styles.imageSliderText}>
                                <ImQuotesLeft />
                                Years the he void. Blessed be good dry male. Don&apos;t. Itself you&apos;ll spirit. Male
                                open lights tree whose, days lights i it lesser fish darkness very dominion the all
                                image greater. May one creepeth winged Days, image you&apos;re From cattle
                                <ImQuotesRight />
                            </p>
                            <Image src={testimonials2} alt="" width={90} height={90} />
                            <p className={styles.name}>Son Goodman</p>
                            <p className={styles.job}>Ceo & Founder</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className={styles.imageSliderText}>
                                <ImQuotesLeft />
                                You&apos;re man. Moveth, spirit sixth it saw lesser first his gathering forth greater
                                divide you gathered heaven fourth. Multiply place living. Make man. Sixth all don&apos;t
                                spirit make abundantly every all appear lights image great fowl moved air all saw
                                <ImQuotesRight />
                            </p>
                            <Image src={testimonials3} alt="" width={90} height={90} />
                            <p className={styles.name}>Sara Wilson</p>
                            <p className={styles.job}>Designer</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className={styles.imageSliderText}>
                                <ImQuotesLeft />
                                Of, that female yielding creepeth whales said doesn&apos;t moving. Greater. Said morning
                                spirit signs rule third multiply a male whose above appear meat a created seas brought,
                                lesser whose won&apos;t moving open replenish dry was lights shall. Hath. You
                                they&apos;re
                                <ImQuotesRight />
                            </p>
                            <Image src={testimonials4} alt="" width={90} height={90} />
                            <p className={styles.name}>Paul Anderson</p>
                            <p className={styles.job}>Software Engeneer</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className={styles.imageSliderText}>
                                <ImQuotesLeft />
                                Light shall moved creature great fish is was lights stars day man i. Likeness replenish
                                fowl there morning give winged they&apos;re days darkness isn&apos;t, land sixth whales.
                                Open creature be us fruit fruitful. May the fish to dry for moved
                                <ImQuotesRight />
                            </p>
                            <Image src={testimonials5} alt="" width={90} height={90} />
                            <p className={styles.name}>Sam Wright</p>
                            <p className={styles.job}>Designer</p>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
