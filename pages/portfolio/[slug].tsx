import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
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
        };
    }[];
};

export default function PortfolioPage({ card }: InferGetStaticPropsType<typeof getStaticProps>) {
    const path = useGetPath();
    console.log(card);
    return (
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <h1>{card.id}</h1>
            <p>{card.attributes.title}</p>
            <p>{card.attributes.category}</p>
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?filters[slug][$eq]=${params?.slug}`
    );
    return {
        props: {
            card: cardsResponse.data[0],
        },
    };
};
