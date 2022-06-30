import Image from "next/image";
import styles from "../../styles/Card.module.css";

type Card = {
    card: {
        id: number;
        attributes: {
            category: string;
            slug: string;
            title: string;
            client: string;
            projectUrl: string;
            date: string;
            description: string;
            image: {
                data: {
                    attributes: {
                        url: string;
                    };
                }[];
            };
        };
    };
};

const PortfolioCard: React.FC<Card> = ({ card }) => {
    return (
        <section className={styles.portfolioCard}>
            <Image
                src={card.attributes.image.data[0].attributes.url}
                alt={`image of ${card.attributes.title}`}
                width={856}
                height={642}
            />
            <div className={styles.description}>
                <h1>{`${card.attributes.title.charAt(0).toUpperCase()}${card.attributes.title.slice(1)}`}</h1>
                <hr />
                <p>
                    <b>Category</b>:{" "}
                    {`${card.attributes.category.charAt(0).toUpperCase()}${card.attributes.category.slice(1)}`}
                </p>
                <p>
                    <b>Client</b>: {card.attributes.client}
                </p>
                <p>
                    <b>Project date</b>: {card.attributes.date}
                </p>
                <p>
                    <b>Project URL</b>: {card.attributes.projectUrl}
                </p>
                <p>{card.attributes.description}</p>
            </div>
        </section>
    );
};

export default PortfolioCard;
