import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import { useMediaQuery } from "../../hooks";
import { Section, SectionHeight } from "../Section";
import { Blob } from "../Blob";

import styles from "./index.module.scss";
import { Typography } from "../Typography/Typography";

import HeaderImage from "/public/images/C&M_Engagement_JPEG_1200px_00020.jpg";
import VerticalKissImage from "/public/images/C&M_Engagement_JPEG_1200px_00017.jpg";
import LandscapeWalkImage from "/public/images/C&M_Engagement_JPEG_1200px_00011.jpg";
import { Button, LinkButton } from "../Button";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1023px)");

  const headerWrapperClassName = cx("px-1", styles.FullScreenCentered);
  const headingClassName = cx(styles.Heading, {
    [styles.HeadingCenter]: isMediumScreen,
  });

  return (
    <>
      <Head>
        <title>Home | Claire & Michael</title>
        <meta
          name="description"
          content="The wedding of Claire Dean and Michael Hottman"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>

      <div className={cx(styles.BackgroundImageWrapper)}>
        <Image
          alt="background"
          priority
          placeholder="blur"
          className={styles.BackgroundImage}
          src={HeaderImage}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className={headerWrapperClassName}>
        <div className={headingClassName}>
          <Typography tag="h1" className={cx(styles.HeadingText, "extra")}>
            Claire & Michael
          </Typography>
        </div>
      </div>
      <Section height={SectionHeight.Medium}>
        <div style={{ height: "100%" }} className="col-xs row center-xs">
          <Typography tag="h2" className="col-xs-12 center-xs py-2">
            {isSmallScreen ? (
              <div className="row">
                <span className="col-xs-12 mb-3">June 9th, 2023</span>
                <span className="col-xs-12">Denver, Colorado</span>
              </div>
            ) : (
              <>
                <span>June 9th, 2023</span>
                <span className="ml-2 mr-2">|</span>
                <span>Denver, Colorado</span>
              </>
            )}
          </Typography>
        </div>
        <Blob
          type="green"
          left={-256}
          opacity={0.35}
          top={10}
          rotation={-58}
          size={1200}
        />
        <Blob type="cactus1" bottom={-12} left={-90} size={300} />
        <Blob type="cactus3" bottom={-10} left={105} size={85} />
        <Blob type="cactus2" bottom={-20} left={180} size={200} />
      </Section>
      <Section className="pt-0" bgColor="off-white">
        <div className="row middle-xs">
          <div className="col-md-8 col-xs-12 pl-0 py-5">
            <div className="row center-xs middle-xs p-3">
              <div className="col-xs-12">
                <Typography tag="h1" className="mb-5">
                  The Celebration
                </Typography>
                <Typography tag="h2" className="mb-1 mt-2d">
                  Skylight
                </Typography>
                <Typography tag="h3" className="col-xs-12 mb-3">
                  June 9th, 2023 at 6pm
                </Typography>
                <Typography tag="p" className="mb-1">
                  833 Santa Fe Drive
                </Typography>
                <Typography tag="p">Denver, CO 80204</Typography>
                <LinkButton
                  href="https://www.zola.com/wedding/hottmandeanwedding/rsvp"
                  className="mt-3"
                  color="pastel-orange"
                  target="_blank"
                >
                  RSVP
                </LinkButton>
              </div>
            </div>
          </div>
          {isMediumScreen ? (
            <div className="col-md-0 col-xs-12 p-0">
              <Image
                src={VerticalKissImage}
                alt="image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          ) : (
            <div className="col-md col-xs-0 p-0">
              <Image
                src={LandscapeWalkImage}
                alt="image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderBottomLeftRadius: 100,
                }}
              />
            </div>
          )}
        </div>
      </Section>
      <Section height={400} className="row center-xs middle-xs">
        <div className="col-xs-12">
          <Typography tag="h3" className="mb-1">
            More details coming soon...
          </Typography>
        </div>
        <div className="col-xs"></div>

        <Blob
          type="purple"
          right={-290}
          opacity={0.2}
          top={120}
          rotation={0}
          size={1000}
        />
        <Blob type="cactus3" bottom={-12} right={90} size={80} />
        <Blob type="cactus5" bottom={-12} right={-1} size={90} />
        <Blob
          type="cactus7"
          bottom={-20}
          right={28}
          rotation={-3}
          opacity={1}
          size={85}
        />
      </Section>
      {/* <Section height={SectionHeight.Medium} bgColor="pastel-pink"></Section> */}
      {/* <div className="row center-xs mb-5 p-5">
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
    </div> */}
    </>
  );
}
