import { Analytics } from "@vercel/analytics/react";
import { MantineProvider } from "@mantine/core";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { quicksandNormal, anaktoria } from "../src/fonts";
import Layout from "../src/components/Layout";

import "flexboxgrid/dist/flexboxgrid.min.css";
import "../styles/reset.css";
import "../styles/spacing.css";
import "../styles/globals.scss";
import "../styles/typography.scss";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp;
