import Head from "next/head";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className="mb-1">
        Special thanks to{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.rknightphoto.com/"
        >
          Rob Knight Photography
        </a>
      </p>
      <p className="mb-1">© 2023 | Michael Hottman & Claire Dean</p>
    </footer>
  );
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={className}>
      <Head>
        <meta
          name="description"
          content="The wedding of Claire Dean and Michael Hottman"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      {/* <Header /> */}
      <div className={styles.LayoutWrapper}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
