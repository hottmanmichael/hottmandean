import React, { ReactNode, useState } from "react";
import Header from "./Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

function Footer() {
  return <footer>Footer</footer>;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className={styles.LayoutWrapper}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
