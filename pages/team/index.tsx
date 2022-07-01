import Head from "next/head";
import { motion } from "framer-motion";
import { fetcher } from "../../lib/api";
import { useGetPath } from "../../hooks/useGetPath";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "../../styles/Main.module.css";
import styleClasses from "../../styles/Teams.module.css";
import Image from "next/image";

type Props = {
    teams: {
        data: {
            id: number;
            attributes: {
                image: {
                    data: {
                        attributes: {
                            name: string;
                            url: string;
                        };
                    };
                };
                name: string;
                position: string;
            };
        }[];
        meta: {};
    };
};

const TeamPage: React.FC<Props> = ({ teams: { data } }) => {
    const path = useGetPath();
    return (
        <>
            <Head>
                <title>Team Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <main className={styles.main}>
                <Breadcrumbs path={path} />
                <motion.section
                    className={styleClasses.teams}
                    initial={{ opacity: 0 }}
                    whileInView={{ transition: { type: "tween", duration: 1.5 }, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <article className={styleClasses.title}>
                        <h1>Our Team</h1>
                        <p>
                            Very you&apos;ll firmament years also earth fowl and brought thing moved and set and
                            fruitful fill moveth moving. You&apos;ll fly male void third two night won&apos;t gathering
                            firmament appear. Whose.
                        </p>
                    </article>
                    <article className={styleClasses.galery}>
                        {data.map((card) => (
                            <div className={styleClasses.card} key={card.id}>
                                <Image
                                    src={card.attributes.image.data.attributes.url}
                                    alt={`image of ${card.attributes.name}`}
                                    width={416}
                                    height={416}
                                />
                                <div className={styleClasses.cardInfo}>
                                    <h2>{card.attributes.name}</h2>
                                    <p>{card.attributes.position}</p>
                                    <div className={styleClasses.socials}>
                                        <FaTwitter />
                                        <FaFacebook />
                                        <FaInstagramSquare />
                                        <FaLinkedin />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </article>
                </motion.section>
            </main>
        </>
    );
};

export async function getStaticProps() {
    const teams = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/teams?populate=*`);
    return {
        props: { teams },
    };
}

export default TeamPage;
