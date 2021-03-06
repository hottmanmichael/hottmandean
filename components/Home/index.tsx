import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import { GiCactusPot, GiCactus, GiAgave, GiFlowerPot } from "react-icons/gi";
import styles from "./index.module.scss";
import { Button } from "../Button";

const GridItem = ({
  title,
  subtitle,
  children,
  Icon,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  Icon: typeof GiCactus | typeof GiCactusPot | typeof GiAgave;
}) => (
  <div className={cx(styles.GridItem, "col-xs-12 col-md-4")}>
    <h6 className={styles.GridItemTitle}>{title}</h6>
    <div className={cx(styles.Spacer, "row center-xs")}>
      <Icon size={30} />
    </div>
    {subtitle && <h2 className="mb-2">{subtitle}</h2>}
    {children ?? null}
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Claire & Michael</title>
        <meta
          name="description"
          content="The wedding of Claire Dean and Michael Hottman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.BackgroundImageWrapper}>
        <Image
          height="100%"
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.BackgroundImage}
          src={require("../images/temp1.jpg")}
        />
      </div>
      <div className={styles.FullScreenCentered}>
        <div className={styles.Heading}>
          <h1 className={cx(styles.HeadingText, "extra")}>Claire & Michael</h1>
          <h3 className={styles.SubHeadingText}>
            <span>June 9th, 2023</span>
            <span className="ml-2 mr-2">|</span>
            <span>Denver, Colorado</span>
          </h3>
        </div>
      </div>
      <div className="row center-xs mb-5 p-5">
        <GridItem Icon={GiCactusPot} title="Date" subtitle="June 9th, 2023">
          <p className="mb-1">Ceremony at [?]</p>
          <p className="mb-1">Dinner at [?]</p>
          <p className="mb-1">Dancing at [?]</p>
        </GridItem>
        <GridItem Icon={GiAgave} title="Location" subtitle="Skylight">
          <p className="mb-1">833 Santa Fe Drive</p>
          <p className="mb-2">Denver, CO 80204</p>
          <a
            rel="noreferrer"
            href="https://goo.gl/maps/UZDZ9q8YgN343fX77"
            target="_blank"
          >
            <Button>Open in maps</Button>
          </a>
        </GridItem>
        <GridItem Icon={GiCactus} title="Invite" subtitle="Join us">
          <p className="mb-2">Please RSVP before [?]</p>
          <Button>RSVP</Button>
        </GridItem>
      </div>
    </>
  );
}
