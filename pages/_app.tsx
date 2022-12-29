import { Analytics } from "@vercel/analytics/react";
import { MantineProvider } from "@mantine/core";

import { quicksandNormal, anaktoria } from "../src/fonts";
import Layout from "../src/components/Layout";

import "flexboxgrid/dist/flexboxgrid.min.css";
import "../styles/reset.css";
import "../styles/spacing.css";
import "../styles/globals.scss";
import "../styles/typography.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        ...quicksandNormal.style,
        headings: {
          ...anaktoria.style,
        },
      }}
    >
      <Layout>
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
