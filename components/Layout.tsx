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
        Thanks to{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.rknightphoto.com/"
        >
          Rob Knight Photography
        </a>
      </p>
      <p className="mb-1">© 2022, Michael Hottman & Claire Dean</p>
    </footer>
  );
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={className}>
      {/* <Header /> */}
      <div className={styles.LayoutWrapper}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
