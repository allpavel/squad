import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <About />
                <Services />
            </main>
        </>
    );
};

export default Home;
