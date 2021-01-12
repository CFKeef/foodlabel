import Head from "next/head";
import Navigation from "./navigation";

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <div>
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
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
