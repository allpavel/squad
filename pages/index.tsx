import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";

const Counter = dynamic(() => import("../components/Counter/Counter"));
const CallToAction = dynamic(() => import("../components/CallToAction/CallToAction"));
const Testimonials = dynamic(() => import("../components/Testimonials/Testimonials"));

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="Face years night saying to isn't creature. Their void you'll whose midst have have it subdue female you. Set evening."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <Hero />
            <main>
                <About />
                <Services />
                <Counter />
                <CallToAction />
                <Testimonials />
            </main>
        </>
    );
}
