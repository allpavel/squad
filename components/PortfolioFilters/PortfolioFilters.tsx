import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLink, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useFilter } from "../../hooks/useFilter";
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
    const cards = useFilter(data, filter);

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
                    {cards.map((card) => (
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
                                <Link href={"/"}>
                                    <a>
                                        <BiPlus />
                                    </a>
                                </Link>
                                <Link href={"/"}>
                                    <a>
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
