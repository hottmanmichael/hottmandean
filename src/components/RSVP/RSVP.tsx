import "@formatjs/intl-listformat/polyfill";

import cx from "classnames";
import Image from "next/image";
import { Divider } from "@mantine/core";

import { Typography } from "../Typography";

import BackgroundImage from "/public/images/C&M_Engagement_JPEG_1200px_00017.jpg";

import styles from "./RSVP.module.scss";
import { Section } from "../Section";
import { InvitedPrimaryGuest } from "../../api/notion";
import { RSVPForm } from "./RSVPForm";

interface RSVPProps {
  allGuestsAttendance: InvitedPrimaryGuest[];
}

export function RSVP({ allGuestsAttendance }: RSVPProps) {
  return (
    <>
      <div className={cx(styles.BackgroundImageWrapper)}>
        <Image
          alt="background"
          priority
          placeholder="blur"
          className={styles.BackgroundImage}
          src={BackgroundImage}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <Section height={300} />
      <Section className="row center-xs py-5 px-2">
        <div className="col-xs-12">
          <Typography className="extra" tag="h1">
            RSVP
          </Typography>
        </div>
        <div className="mb-3 col-md-8 col-sm-10 col-xs-12">
          <Divider
            mt="xl"
            labelProps={{
              size: "md",
            }}
            labelPosition="center"
            label="Please RSVP before May 9th, 2023"
          />
        </div>
      </Section>
      <Section className="row py-0 px-2">
        <div className="mb-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
          <RSVPForm allGuestsAttendance={allGuestsAttendance} />
        </div>
      </Section>
    </>
  );
}
