import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({
  children,
  home,
  showFullNav,
}: {
  children: React.ReactNode;
  home?: boolean;
  showFullNav: boolean;
}) => {
  return (
    <div className={"content"}>
      <Head>
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
      <Navigation showOnlyButtons={showFullNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
