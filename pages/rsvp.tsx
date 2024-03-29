import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { getAllGuestsAttendance } from "../src/api/notion";
import { RSVP } from "../src/components/RSVP";

export default function RsvpPage({
  allGuestsAttendance,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>RSVP | Claire & Michael</title>
      </Head>
      <RSVP allGuestsAttendance={allGuestsAttendance} />;
    </>
  );
}

export async function getStaticProps({ req, res }) {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  const allGuestsAttendance = await getAllGuestsAttendance();
  const omitUs = allGuestsAttendance.filter(
    (guest) => guest.phoneNumber !== "9705679883"
  );

  return {
    props: { allGuestsAttendance: omitUs },
  };
}
