import type { NextPage } from "next";
import Header from "../components/commonComponents/Header/Header";
import Hero from "../components/pagesComponents/indexPage/Hero/Hero";
import About from "../components/pagesComponents/indexPage/About/About";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
        </>
    );
};

export default Home;
