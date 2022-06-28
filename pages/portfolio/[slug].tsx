import Head from "next/head";
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
        <>
            <Head>
                <title>{path[1]} Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <PortfolioCard card={card} />
            </main>
        </>
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
