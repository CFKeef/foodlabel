import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Explanation from "../components/explanation";
import Features from "../components/features";
import Pricing from "../components/pricing";
import CallToAction from "../components/calltoaction";

function Home() {
  return (
    <Layout home showFullNav={true}>
      <Head>
        <title>food label</title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Explanation />
      <Features />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}

export default Home;
