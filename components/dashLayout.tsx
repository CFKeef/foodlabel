import Head from "next/head";
import Footer from "./footer";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"content"}>
      <Head>
        <title>Dashboard</title>
        <link
          rel="preload"
          href="/fonts/sulsansregular-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/sulsanslight-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/sulsansbold-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashLayout;
