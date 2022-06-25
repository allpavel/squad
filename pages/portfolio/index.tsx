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
        <main className={styles.main}>
            <Breadcrumbs path={path} />
            <PortfolioTitle />
            <PortfolioFilters data={data} />
        </main>
    );
}

export async function getStaticProps() {
    const cards = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`);
    return {
        props: { cards },
    };
}
