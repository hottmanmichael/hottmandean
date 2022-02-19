import React, { ReactNode, useState } from "react";
import Header from "./Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className="mb-1">
        Photography courtesy of{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.rknightphoto.com/"
        >
          Rob Knight
        </a>
      </p>
      <p className="mb-1">© 2022, Michael Hottman & Claire Dean</p>
    </footer>
  );
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className={styles.LayoutWrapper}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
