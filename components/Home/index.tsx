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
import { AgendaItem } from "./AgendaItem";

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
          size={800}
        />
        <Blob type="cactus1" bottom={-12} left={-90} size={300} />
        <Blob type="cactus3" bottom={-10} left={105} size={85} />
        <Blob type="cactus2" bottom={-20} left={180} size={200} />
      </Section>
      <Section className="pt-0" bgColor="off-white">
        <div className="row middle-xs">
          <div className="col-md-8 col-xs-12 pl-0 py-3">
            <div className="row center-xs middle-xs p-3">
              <div className="col-xs-12">
                <Typography tag="h1" className="mb-5">
                  The Main Event
                </Typography>
                <Typography tag="h2" className="my-2">
                  Skylight
                </Typography>
                <Typography tag="h3" className="col-xs-12 mb-2">
                  June 9th, 2023 at TBD
                </Typography>
                <Typography tag="p">833 Santa Fe Drive</Typography>
                <Typography tag="p">Denver, CO 80204</Typography>
                <LinkButton
                  href="https://www.zola.com/wedding/hottmandeanwedding/rsvp"
                  className="mt-3"
                  color="pastel-orange"
                  target="_blank"
                >
                  RSVP
                </LinkButton>
                {/*
                 *
                 * A Weather Widget would be cool!
                 */}
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
      <Section className="row center-xs middle-xs pb-5">
        <div className="col-xs-12 mt-5">
          <Typography tag="h1" className="mb-5">
            Schedule
          </Typography>
          <AgendaItem
            name="Rehearsal Dinner"
            location="El Jefe"
            date="June 8th, 2023"
          />
          <AgendaItem
            name="Ceremony"
            location="Skylight"
            date="June 9th, 2023 at 5:30pm"
          />
          <AgendaItem
            name="Dinner"
            location="Skylight"
            date="June 9th, 2023 at 7:00pm"
          />
          <AgendaItem
            name="Party"
            location="Skylight"
            date="June 9th, 2023 at 8:00pm"
          />
        </div>
        <Blob
          type="blue"
          left={-350}
          opacity={isMediumScreen ? 0 : 0.3}
          top={-350}
          rotation={283}
          size={900}
        />
        <Blob
          type="purple"
          right={-650}
          opacity={0.3}
          top={370}
          rotation={0}
          size={1400}
        />
        <Blob type="cactus5" bottom={-12} right={-1} size={90} />

        <Blob
          type="cactus7"
          bottom={-20}
          right={30}
          rotation={-2}
          opacity={1}
          size={100}
        />
        <Blob type="cactus3" bottom={-12} right={90} size={60} />
        <Blob type="cactus6" bottom={-12} right={86} size={21} rotation={3} />
        <Blob type="cactus6" bottom={-12} right={143} size={26} rotation={-8} />
        <Blob type="cactus4" bottom={-12} right={160} size={16} rotation={-5} />
        <Blob
          type="cactus3"
          bottom={-12}
          right={121}
          size={21}
          rotation={-10}
        />
      </Section>
      {/* <Section bgColor="pastel-pink" height={500}>
        <h1>Hello</h1>
      </Section> */}
      {/* Registry */}
      <Section bgColor="off-white">
        <div className="row middle-xs p-0">
          <div className="col-md-4 col-xs-12 p-0">
            {!isMediumScreen && (
              <Image
                src={require("../../public/images/C&M_Engagement_JPEG_1200px_00019.jpg")}
                placeholder="blur"
                alt="image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderBottomRightRadius: 100,
                }}
              />
            )}
          </div>
          <div className="col-md-8 col-xs-12 pl-3 py-3">
            <div className="row center-xs middle-xs p-3">
              <div className="col-xs-12">
                <Typography tag="h1" className="mb-5">
                  Registry
                </Typography>
              </div>
              <div className="col-xs-8">
                <Typography tag="h6" className="mb-1 mt-2d">
                  The best present you could possibly give us is your presence.
                  However, if you’d like to spoil us, we’ve picked out a few
                  items and activities that pique our interests.
                </Typography>
                {/* <Typography tag="h3" className="col-xs-12 mb-3">
                  June 9th, 2023 at TBD
                </Typography>
                <Typography tag="p" className="mb-1">
                  833 Santa Fe Drive
                </Typography>
                <Typography tag="p">Denver, CO 80204</Typography> */}
                <LinkButton
                  href="https://www.zola.com/wedding/hottmandeanwedding/registry"
                  className="mt-3"
                  color="pastel-pink"
                  target="_blank"
                >
                  View Registry
                </LinkButton>
                {/*
                 *
                 * A Weather Widget would be cool!
                 */}
              </div>
            </div>
            {/* <Typography tag="h1">FAQ</Typography>
            <ul>
              <li>Does the wedding have a theme?</li>
              <li>How do I RSVP and what’s the deadline?</li>
              <li>
                How long is the wait between ceremony and dinner and what can we
                expect?
              </li>
              <li>Can we bring our children?</li>
              <li>What type of food are you serving?</li>
              <li>Can I post photos of the wedding on social media?</li>
              <li>What COVID measures will you have in place?</li>
              <li>What is the parking situation at the venues?</li>
              <li>
                Do you have a hotel block for guests? Where do you recommend I
                stay?
              </li>
              <li>
                What kind of food are you serving? What if I have an allergy or
                dietary requirement?
              </li>
              <li>What should I do if I can’t make it?</li>
              <li>
                I still have questions, what is the best way to contact you?
              </li>
            </ul> */}
          </div>
        </div>
      </Section>
      {/* <Section bgColor="off-white" height={500}></Section> */}
    </>
  );
}
