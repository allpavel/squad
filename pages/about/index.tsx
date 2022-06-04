import { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";

export default function AboutUs() {
    return (
        <main>
            <section>About Us</section>
        </main>
    );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
