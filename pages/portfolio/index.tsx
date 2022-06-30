import Head from "next/head";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import PortfolioFilters from "../../components/PortfolioFilters/PortfolioFilters";
import { useGetPath } from "../../hooks/useGetPath";
import { fetcher } from "../../lib/api";
import styles from "../../styles/Main.module.css";

type Props = {
    cards: {
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
        meta: {};
    };
};

export default function PortfolioPage({ cards: { data } }: Props) {
    const path = useGetPath();
    return (
        <>
            <Head>
                <title>Portfolio Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <PortfolioTitle />
                <PortfolioFilters data={data} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const cards = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`);
    // const cards = await fetcher(`https://tranquil-gorge-86376.herokuapp.com/api/portfolios?populate=*`);
    return {
        props: { cards },
    };
}
