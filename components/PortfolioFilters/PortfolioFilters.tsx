import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLink, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useFilter } from "../../hooks/useFilter";
import PortfolioImageGallery from "../PortfolioImageGallery/PortfolioImageGallery";
import Modal from "../Modal/Modal";
import filterStyles from "../../styles/PortfolioFilters.module.css";
import galeryStyles from "../../styles/PortfolioGallery.module.css";

type Props = {
    data: {
        id: number;
        attributes: {
            category: string;
            slug: string;
            title: string;
            image: {
                data: {
                    attributes: {
                        url: string;
                    };
                }[];
            };
        };
    }[];
};

const PortfolioFilters: React.FC<Props> = ({ data }) => {
    const [filter, setFilter] = useState<string>("all");
    const [cardIndex, setCardIndex] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const cards = useFilter(data, filter);

    const handleOpenGallery = (index: number) => {
        setIsVisible(true);
        setCardIndex(index);
        document.body.style.overflow = "hidden";
    };

    const toggleAll = () => {
        setFilter("all");
    };

    const toggleApp = () => {
        setFilter("app");
    };

    const toggleCard = () => {
        setFilter("card");
    };

    const toggleWeb = () => {
        setFilter("web");
    };

    return (
        <section className={filterStyles.portfolioFilters}>
            {isVisible && (
                <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                    <PortfolioImageGallery cards={cards} cardIndex={cardIndex} />
                </Modal>
            )}
            <article className={filterStyles.container}>
                <ul className={filterStyles.filtersRow}>
                    <li
                        className={`${filterStyles.filtersItem} ${filter === "all" ? filterStyles.active : ""}`}
                        onClick={toggleAll}
                    >
                        All
                    </li>
                    <li
                        className={`${filterStyles.filtersItem} ${filter === "web" ? filterStyles.active : ""}`}
                        onClick={toggleWeb}
                    >
                        Web
                    </li>
                    <li
                        className={`${filterStyles.filtersItem} ${filter === "app" ? filterStyles.active : ""}`}
                        onClick={toggleApp}
                    >
                        App
                    </li>
                    <li
                        className={`${filterStyles.filtersItem} ${filter === "card" ? filterStyles.active : ""}`}
                        onClick={toggleCard}
                    >
                        Card
                    </li>
                </ul>
            </article>
            <article className={galeryStyles.galery}>
                <AnimatePresence exitBeforeEnter>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={galeryStyles.card}
                            animate={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0 }}
                            exit={{ opacity: 0, scale: 0.4 }}
                            transition={{ duration: 0.7 }}
                            layout
                        >
                            <Image
                                src={`http://localhost:1337${card.attributes.image.data[0].attributes.url}`}
                                width={416}
                                height={416}
                                alt={`image of ${card.attributes.title}`}
                            />

                            <div className={galeryStyles.links}>
                                <button
                                    onClick={() => handleOpenGallery(index)}
                                    className={galeryStyles.button}
                                    aria-label="Open an image gallery"
                                    title="Open an image gallery"
                                >
                                    <BiPlus />
                                </button>
                                <Link href={`/portfolio/${card.attributes.slug}`}>
                                    <a title="Go to the description ">
                                        <BiLink />
                                    </a>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </article>
        </section>
    );
};

export default PortfolioFilters;
