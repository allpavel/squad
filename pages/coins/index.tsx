import type { NextPage, GetStaticProps } from "next";
import axios from "axios";

const CoinList: NextPage = ({ coinData }: any) => {
    return (
        <>
            {coinData.coins.map((coin: any) => (
                <div key={coin.id}>{coin.name}</div>
            ))}
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
    return {
        props: {
            coinData: response.data,
        },
    };
};

export default CoinList;
