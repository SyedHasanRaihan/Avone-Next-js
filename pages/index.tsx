import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts";
import Default from "../layouts/default";
import Portfolio from "../sections/home/Portfolio";
import PotteryClass from "../sections/home/PotteryClass";
import TopSection2 from "../sections/home/TopSection2";
import TopSections from "../sections/home/TopSections";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="">
            <Layout.Default>
                <TopSections />
                <TopSection2 />
                <Portfolio />
                <PotteryClass />
            </Layout.Default>
        </div>
    );
}
