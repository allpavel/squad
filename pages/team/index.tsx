import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { fetcher } from "../../lib/api";
import { useGetPath } from "../../hooks/useGetPath";
import styles from "../../styles/Main.module.css";
import styleClasses from "../../styles/Teams.module.css";

type Props = {
    teams: {
        data: {
            id: number;
            attributes: {};
        }[];
        meta: {};
    };
};

const PortfolioPage: React.FC<Props> = ({ teams: { data } }) => {
    console.log(data);
    const path = useGetPath();
    return (
        <Layout>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <motion.section
                    className={styleClasses.teams}
                    initial={{ opacity: 0 }}
                    whileInView={{ transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <article className={styleClasses.title}>
                        <h2>Teams</h2>
                        <p>
                            Very you&apos;ll firmament years also earth fowl and brought thing moved and set and
                            fruitful fill moveth moving. You&apos;ll fly male void third two night won&apos;t gathering
                            firmament appear. Whose.
                        </p>
                    </article>
                    <article>
                        {data.map((card) => (
                            <div key={card.id}></div>
                        ))}
                    </article>
                </motion.section>
            </main>
        </Layout>
    );
};

export async function getStaticProps() {
    const teams = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/teams?populate=*`);
    return {
        props: { teams },
    };
}

export default PortfolioPage;
