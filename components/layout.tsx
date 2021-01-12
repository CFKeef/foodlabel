import { link } from "fs";
import Head from "next/head";
import Link from "next/link";
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
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/sulsanslight-webfont.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/sulsansbold-webfont.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
