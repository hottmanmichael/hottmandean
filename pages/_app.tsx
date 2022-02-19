import Layout from "../components/Layout";
import "flexboxgrid/dist/flexboxgrid.min.css";
import "../styles/reset.css";
import "../styles/spacing.css";

import "../styles/globals.scss";
import "../styles/typography.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
