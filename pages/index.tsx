import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Explanation from "../components/explanation";

function Home() {
  return (
    <Layout home>
      <Head>
        <title>food label</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Explanation />
    </Layout>
  );
}

export default Home;
