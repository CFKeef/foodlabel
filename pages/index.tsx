import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Explanation from "../components/explanation";
import Features from "../components/features";
import Pricing from "../components/pricing";
import CallToAction from "../components/calltoaction";
import Footer from "../components/footer";

function Home() {
  return (
    <Layout home>
      <Head>
        <title>food label</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Explanation />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

export default Home;
