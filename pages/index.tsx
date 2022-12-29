import Head from "next/head";
import { Home } from "../src/components/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | Claire & Michael</title>
      </Head>
      <Home />;
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}
