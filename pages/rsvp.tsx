import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { getAllGuestsAttendance } from "../src/api/notion";
import { RSVP } from "../src/components/RSVP";

export default function RsvpPage({
  allGuestsAttendance,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>RSVP | Claire & Michael</title>
      </Head>
      <RSVP allGuestsAttendance={allGuestsAttendance} />;
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const allGuestsAttendance = await getAllGuestsAttendance();

  return {
    props: { allGuestsAttendance },
  };
}
