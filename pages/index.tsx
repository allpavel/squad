import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Counter from "../components/Counter/Counter";
import CallToAction from "../components/CallToAction/CallToAction";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
    return (
        <>
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
