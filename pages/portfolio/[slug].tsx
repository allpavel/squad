import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { useGetPath } from "../../hooks/useGetPath";
import { fetcher } from "../../lib/api";
import styles from "../../styles/Main.module.css";

type Card = {
    data: {
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
    }[];
};

export default function PortfolioPage({ card }: InferGetStaticPropsType<typeof getStaticProps>) {
    const path = useGetPath();
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <PortfolioCard card={card} />
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const cardsResponse: Card = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios`, { fields: ["slug"] });
    return {
        paths: cardsResponse.data.map((card) => ({
            params: {
                slug: card.attributes.slug,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const cardsResponse: Card = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?filters[slug][$eq]=${params?.slug}&populate=*`
    );
    return {
        props: {
            card: cardsResponse.data[0],
        },
    };
};
