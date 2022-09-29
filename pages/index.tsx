import type { NextPage } from "next";
import Rombs from "../components/Rombs";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Noviembre literario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Rombs />
    </div>
  );
};

export default Home;
