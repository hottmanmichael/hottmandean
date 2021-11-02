import Layout from "../components/Layout";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/spacing.css";

import "../styles/typography.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
