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
import ArtHotelImage from "/public/images/art-hotel.jpeg";
import CurtisHotelImage from "/public/images/curtis-hotel.jpeg";
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
      <Section height={SectionHeight.Medium} className="pb-5">
        <div style={{ height: "100%" }} className="col-xs row center-xs pb-5">
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
        <Blob
          type="cactus1"
          bottom={-20}
          left={isSmallScreen ? -80 : -90}
          size={isSmallScreen ? 250 : 320}
        />
        <Blob
          type="cactus3"
          bottom={-10}
          left={110}
          size={isSmallScreen ? 75 : 85}
        />
        <Blob
          type="cactus2"
          bottom={-20}
          left={190}
          size={isSmallScreen ? 180 : 200}
        />
        <div className="mb-5" />
      </Section>
      <Section className="pt-0 pb-3" bgColor="off-white">
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
                  June 9th, 2023 at 5:30pm
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
                  borderBottomLeftRadius: 300,
                }}
              />
            </div>
          )}
        </div>
      </Section>
      <Section className="row center-xs middle-xs pb-5">
        <div className="col-xs-12 mt-5 mb-5">
          <Typography tag="h1" className="mb-5">
            Schedule
          </Typography>
          {/* <AgendaItem
            name="Rehearsal Dinner"
            location="El Jefe"
            date="June 8th, 2023"
          /> */}
          <AgendaItem
            name="Ceremony"
            location="Skylight | Indoors"
            date="5:30pm"
          />
          <AgendaItem
            name="Cocktail Hour"
            location="Skylight | Back Patio"
            date="6:00pm"
          />
          <AgendaItem
            name="Dinner"
            location="Skylight | Indoors"
            date="7:00pm"
          />
          <AgendaItem
            name="Party"
            location="Skylight | Indoors"
            date="8:00pm until 11:30pm"
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
        <Blob type="cactus5" bottom={-22} right={-1} size={90} />

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
      <Section bgColor="pastel-green" className="row center-xs pb-0">
        <div className="col-xs-12 mt-2 py-5 px-2">
          <Typography tag="h1" className="mb-5">
            Accommodation
          </Typography>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <Typography tag="h6" className="mb-3">
                While we did not reserve a discounted group rate, there are a
                plethora of hotels in within a mile or two of the venue. Below
                are links to hotels that we recommend due to price, style, and
                proximity. If you prefer to stay in a vacation rental, we would
                be happy to recommend neighborhoods in Denver that would suit
                your interests.
              </Typography>
              <Typography tag="h6" bold className="mb-3">
                Special note: There is a convention taking place during the
                weekend of June 9th in Denver. If you plan on attending the
                wedding and would like to stay near the venue, we recommend
                booking as soon as possible.
              </Typography>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 center-xs mb-5">
          <Typography tag="h1" className="mb-2">
            The ART Hotel
          </Typography>
          <Typography tag="h6" className="mb-2">
            Starting at $286/night
          </Typography>
          <Image
            src={ArtHotelImage}
            alt="image"
            sizes="100vw"
            style={{
              height: "auto",
              width: 400,
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 400,
            }}
          />
          <Typography tag="h5" bold className="mt-2 mb-1">
            3 min drive | 21 min walk
          </Typography>
          <div className="row center-xs">
            <div className="col-md-8 col-sm-10 col-xs-12">
              <Typography tag="p" className="mt-2 mb-1">
                <Typography tag="span" bold>
                  Closest to the venue
                </Typography>{" "}
                - Located near the Capitol Building, across the street from the
                History Colorado Museum and the Denver Art Museum
              </Typography>
            </div>
          </div>
          <LinkButton
            href="https://goo.gl/maps/WZivHLtDpt77QJC69"
            color="forest-green"
            target="_blank"
          >
            Directions
          </LinkButton>
        </div>

        <div className="col-md-6 col-xs-12 center-xs">
          <Typography tag="h1" className="mb-2">
            The Curtis
          </Typography>
          <Typography tag="h6" className="mb-2">
            Starting at $206/night
          </Typography>
          <Image
            src={CurtisHotelImage}
            alt="image"
            sizes="100vw"
            style={{
              height: "auto",
              width: 400,
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 400,
            }}
          />
          <Typography tag="h5" bold className="mt-2 mb-1">
            7 min drive | 30 min walk
          </Typography>
          <div className="row center-xs">
            <div className="col-md-8 col-sm-10 col-xs-12">
              <Typography tag="p" className="mt-2 mb-1">
                Located in downtown Denver near Larimer square, the 16th Street
                Mall, and the Ellie Caulkins Opera House
              </Typography>
            </div>
          </div>
          <LinkButton
            href="https://goo.gl/maps/5XDCrX6LHiDSXc3V7"
            color="forest-green"
            target="_blank"
          >
            Directions
          </LinkButton>
        </div>
      </Section>
      <Section bgColor="pastel-green" className="row center-xs pb-5">
        <div className="col-xs-12 mt-2 py-5 px-2">
          <Typography tag="h1" className="mb-5">
            Transportation
          </Typography>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <Typography tag="h6" className="mb-3">
                We will not be providing group transportation - if you plan on
                driving, there will be a private, free-of-charge parking lot
                available next door to the venue for up to 50 cars in addition
                to free street parking surrounding the venue.
              </Typography>
              <Typography bold tag="h6" className="mb-3">
                If you plan on drinking any amount, we strongly encourage
                finding transportation via Lyft, Uber, taxi, or carpooling with
                a sober driver.
              </Typography>
            </div>
          </div>
        </div>
      </Section>
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
                  borderBottomRightRadius: 300,
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
              <div className="col-md-8 col-sm-10 col-xs-12">
                <Typography tag="h6" className="mb-1 mt-2d">
                  The best present you could possibly give us is your presence.
                  However, if you would like to spoil us, we will soon provide a
                  link to items and activities that pique our interest.
                </Typography>
                {/* <Typography tag="h6" className="mb-1 mt-2d">
                  The best present you could possibly give us is your presence.
                  However, if you’d like to spoil us, we’ve picked out a few
                  items and activities that pique our interests.
                </Typography> */}
                {/* <LinkButton
                  href="https://www.zola.com/wedding/hottmandeanwedding/registry"
                  className="mt-3"
                  color="pastel-pink"
                  target="_blank"
                >
                  View Registry
                </LinkButton> */}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
