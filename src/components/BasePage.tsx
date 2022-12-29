import React, { PropsWithChildren } from "react";

import styles from "./BasePage.module.scss";

type BasePageProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

function BasePage({ title, subtitle, children }: BasePageProps) {
  return (
    <div className={styles.BasePage}>
      <div className={styles.BasePageTitleWrapper}>
        <h1 className="mb-3">{title}</h1>
        {subtitle && <h5 className="mb-3">{subtitle}</h5>}
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div style={{ height: 0, borderBottom: "1px solid grey" }} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default BasePage;
