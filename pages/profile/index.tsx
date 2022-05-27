import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const ProfileDefault: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Profile Page</title>
            </Head>
            <Link href="about">About</Link>
            <h1>Hello Profile</h1>
        </div>
    );
};

export default ProfileDefault;
