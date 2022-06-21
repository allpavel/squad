import { useState } from "react";
import Image from "next/image";
import { BiLink, BiPlus } from "react-icons/bi";
import filterStyles from "../../styles/PortfolioFilters.module.css";
import galeryStyles from "../../styles/PortfolioGalery.module.css";
import Link from "next/link";

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
    console.log(data);
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
                    <li
                        className={`${filterStyles.filtersItem} ${filter === "web" ? filterStyles.active : ""}`}
                        onClick={toggleWeb}
                    >
                        Web
                    </li>
                </ul>
            </article>
            <article className={galeryStyles.galery}>
                {data.map((card) => (
                    <div key={card.id} className={galeryStyles.card}>
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
                    </div>
                ))}
            </article>
        </section>
    );
};

export default PortfolioFilters;
