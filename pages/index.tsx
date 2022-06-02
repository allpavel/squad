import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Counter from "../components/Counter/Counter";
import CallToAction from "../components/CallToAction/CallToAction";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <About />
                <Services />
                <Counter />
                <CallToAction />
            </main>
        </>
    );
};

export default Home;
