import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Counter from "../components/Counter/Counter";
import CallToAction from "../components/CallToAction/CallToAction";
import Testimonials from "../components/Testimonials/Testimonials";

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <main>
                <About />
                <Services />
                <Counter />
                <CallToAction />
                <Testimonials />
            </main>
        </Layout>
    );
};

export default Home;
