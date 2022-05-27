import type { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
    const router = useRouter();
    const { username } = router.query;
    return <h1>{username}</h1>;
};

export default Profile;
