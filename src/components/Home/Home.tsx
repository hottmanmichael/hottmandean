import Image from "next/image";
import cx from "classnames";
import { Button as MantineButton } from "@mantine/core";
import { useMediaQuery } from "../../hooks";
import { Section, SectionHeight } from "../Section";
import { Blob } from "../Blob";
import { Typography } from "../Typography/Typography";
import { LinkButton } from "../Button";
import { AgendaItem } from "./AgendaItem";
import { QuestionItem } from "./QuestionItem";

import HeaderImage from "/public/images/C&M_Engagement_JPEG_1200px_00020.jpg";
import ArtHotelImage from "/public/images/art-hotel.jpeg";
import CurtisHotelImage from "/public/images/curtis-hotel.jpeg";
import ShoulderRingImage from "/public/images/C&M_Engagement_JPEG_1200px_00019.jpg";

import styles from "./index.module.scss";

export function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1023px)");

  const headerWrapperClassName = cx("px-1", styles.FullScreenCentered);
  const headingClassName = cx(styles.Heading, {
    [styles.HeadingCenter]: isMediumScreen,
  });

  const navToId = (id: string) => () => {
    const element = document.querySelector(`#${id}`);
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
  };

  return (
    <>
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
      <Section height={SectionHeight.Medium} className="pb-5" overflow="hidden">
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
          rotation={-48}
          size={900}
        />
        <Blob
          type="cactus1"
          bottom={-20}
          left={isSmallScreen ? -80 : -90}
          size={isSmallScreen ? 250 : 310}
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
          left={180}
          size={isSmallScreen ? 180 : 200}
        />
        <div className="mb-5" />
      </Section>
      <Section
        className={cx(styles.PrimaryEventDetailsContainer)}
        bgColor="transparent"
      >
        <div className="row middle-xs">
          <div className="col-xs-12 pl-0 py-3">
            <div className="row center-xs middle-xs">
              <div className="col-xs-12">
                <Typography tag="h1" className="mb-5">
                  The Main Event
                </Typography>
                <Typography tag="h3" className="mb-3">
                  Skylight
                </Typography>
                <Typography tag="h2" className="col-xs-12 mb-3">
                  June 9th, 2023 at 5:30pm
                </Typography>
                <Typography tag="p">833 Santa Fe Drive</Typography>
                <Typography tag="p">Denver, CO 80204</Typography>
                <div>
                  <LinkButton
                    target="_blank"
                    href="https://goo.gl/maps/v7MYmyv5kyAVaHXK8?coh=178571&entry=tt"
                    className="mt-3"
                    color="pastel-orange"
                  >
                    Get Directions
                  </LinkButton>
                </div>
                <div className="center-xs row">
                  <div className="col-xs-12">
                    <MantineButton
                      onClick={navToId("faq")}
                      variant="subtle"
                      color="dark"
                      size="md"
                    >
                      FAQ
                    </MantineButton>
                  </div>
                  <div className="col-xs-12">
                    <MantineButton
                      onClick={navToId("registry")}
                      variant="subtle"
                      color="dark"
                      size="md"
                    >
                      Registry
                    </MantineButton>
                  </div>
                  <div className="col-xs-12">
                    <MantineButton
                      onClick={navToId("transportation")}
                      variant="subtle"
                      color="dark"
                      size="md"
                    >
                      Parking & Transportation Info
                    </MantineButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blob
          type="multi-pink"
          right={isSmallScreen ? -500 : -850}
          opacity={0.35}
          bottom={-100}
          rotation={110}
          size={isSmallScreen ? 700 : 1200}
        />
      </Section>
      <Section className="row center-xs middle-xs" includePadding>
        <div className="col-xs-12 mt-5 mb-5 pb-5">
          <Typography tag="h1" className="mb-5">
            Schedule
          </Typography>
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
          left={isMediumScreen ? -200 : -350}
          opacity={isMediumScreen ? 0.3 : 0.3}
          top={-150}
          rotation={283}
          size={isMediumScreen ? 600 : 900}
        />
        <Blob
          type="purple"
          right={-750}
          opacity={0.3}
          top={270}
          rotation={-180}
          size={1300}
        />
        <Blob type="cactus5" bottom={-22} right={-1} size={120} />
        <Blob type="cactus7" bottom={-40} right={60} opacity={1} size={130} />
        <Blob type="cactus6" bottom={-12} right={160} size={40} rotation={-3} />
      </Section>
      {/* Registry */}
      <Section bgColor="pastel-pink">
        <div className="row middle-xs" id="registry">
          <div className="col-md-4 col-xs-12 pl-0">
            {!isMediumScreen && (
              <Image
                src={ShoulderRingImage}
                placeholder="blur"
                alt="image"
                sizes="110vw"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            )}
          </div>
          <div className="col-md-8 col-xs-12 py-5">
            <div className="row center-xs middle-xs px-2 py-5">
              <div className="col-xs-12">
                <Typography tag="h1" className="mb-5">
                  Registry
                </Typography>
              </div>
              <div className="col-md-8 col-sm-10 col-xs-12">
                <Typography tag="h6" className="mb-1 mt-2d">
                  The best present you could possibly give us is your presence.
                  However, if you’d like to spoil us, we are asking for
                  contributions to our house fund and honeymoon fund.
                </Typography>
                <LinkButton
                  href="https://www.zola.com/wedding/hottmandeanwedding/registry"
                  className="mt-3"
                  color="pastel-pink"
                  target="_blank"
                >
                  View Registry
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Questions */}
      <Section bgColor="off-white" className="row center-xs" includePadding>
        <div className="col-xs-12 mt-2 py-5 px-2" id="faq">
          <Typography tag="h1" className="pb-5 mb-2">
            FAQ
          </Typography>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <QuestionItem
                title="What should I wear?"
                text="The dress code is Garden Formal / Semi Formal."
              />
              <QuestionItem
                title="What time should I arrive?"
                text="The ceremony will begin at 5:30 in the evening. Please plan on arriving between 5 and 5:15 so that we can get started on time."
              />
              <QuestionItem
                title="Are children welcome?"
                text="While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us."
              />
              <QuestionItem
                title="Will there be any vegan/vegetarian/gluten free/special diet options?"
                text="Yes! We are working closely with the caterer to make sure everyone is taken care of and food options at the buffet will have special diet indicators. Please let us know ahead of time in your RSVP or by contacting us if you have any special requests."
              />
              <QuestionItem
                title="Will the wedding be indoors or outdoors?"
                text="Both! The ceremony will take place indoors, followed by an outdoor cocktail hour while we get the room ready for dinner. Dinner and dancing will take place indoors, but you'll be free to move between the dance floor and the patio."
              />
              <QuestionItem
                title="Will there be transportation? Where should guests park? Is parking free?"
                text="See below."
              />
              <QuestionItem
                title="I still have questions, what is the best way to contact you?"
                text="The best way to contact us is by sending an email to hottmandean@gmail.com"
              />
            </div>
          </div>
        </div>
        <Blob
          type="green"
          right={isSmallScreen ? -500 : -750}
          opacity={0.35}
          bottom={-1}
          rotation={110}
          size={isSmallScreen ? 700 : 1200}
        />
        <Blob
          type="blue"
          left={isMediumScreen ? -300 : -450}
          opacity={0.4}
          top={100}
          rotation={167}
          size={isMediumScreen ? 600 : 900}
        />

        {/* Transportation */}
        <div className="col-xs-12 py-5 px-2" id="transportation">
          <Typography tag="h1" className="mb-5">
            Transportation
          </Typography>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-5">
              <Typography tag="h6" className="mb-3">
                If you plan on driving, there is a private, free-of-charge
                parking lot about 2 blocks away that will fit up to 50 cars.
                There is also street parking around the venue, although Sante Fe
                Avenue can get busy on a Friday night, so plan accordingly.
              </Typography>
              <Typography tag="h6" className="mb-5">
                Otherwise we strongly encourage finding transportation via Lyft,
                Uber, taxi, or carpooling with a sober driver.
              </Typography>
              <Typography tag="h2" className="mb-2 pt-3">
                Parking Lot
              </Typography>
              <Typography bold tag="p">
                <a
                  href="https://goo.gl/maps/WWUAU36pJ1oqKEQQA"
                  target="_blank"
                  rel="noreferrer"
                >
                  990 Kalamath St, Denver, CO 80204
                </a>
              </Typography>
              <Typography style={{ fontSize: 13 }} tag="p" className="mb-1">
                Please park on South side of lot, furthest away from the
                building whenever possible.
              </Typography>
              <LinkButton
                href="/parkingmap.pdf"
                target="_blank"
                color="forest-green"
              >
                View parking information
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Accommodations */}
      <Section
        bgColor="pastel-green"
        className="row center-xs pb-0"
        includePadding
      >
        <div className="col-xs-12 my-5 px-2">
          <Typography tag="h1" className="mb-5">
            Accommodation
          </Typography>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-10 col-md-5">
              <Typography tag="h6" className="mb-4">
                While we did not reserve a discounted group rate, there are a
                plethora hotels within a mile or two of the venue - we&apos;ve
                included a few recommendations below.
              </Typography>
              <Typography tag="p" bold className="mb-1">
                Special Note
              </Typography>
              <Typography tag="h6" className="mb-5">
                There is a convention taking place during the weekend of June
                9th in Denver. If you plan on attending the wedding and would
                like to stay near the venue, we recommend booking as soon as
                possible.
              </Typography>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 center-xs mb-5">
          <Typography tag="h1" className="mb-3">
            The ART Hotel
          </Typography>
          <Typography tag="h6" className="mb-3">
            Starting around $286/night
          </Typography>
          <Image
            src={ArtHotelImage}
            className="mb-1"
            alt="image"
            sizes="100vw"
            style={{
              maxWidth: 400,
              height: "auto",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 5,
            }}
          />
          <Typography tag="h5" bold className="mt-2 mb-1">
            3 minute drive
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
            href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=DENRT&arrivalDate=2023-06-09&departureDate=2023-06-10&numRooms=0&numAdults=1&numChildren=0"
            color="forest-green"
            target="_blank"
          >
            See rates
          </LinkButton>
        </div>
        <div className="col-md-6 col-xs-12 center-xs mb-5">
          <Typography tag="h1" className="mb-3">
            The Curtis
          </Typography>
          <Typography tag="h6" className="mb-3">
            Starting around $204/night
          </Typography>

          <Image
            src={CurtisHotelImage}
            className="mb-1"
            alt="image"
            sizes="100vw"
            style={{
              maxWidth: 400,
              height: "auto",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 5,
            }}
          />

          <Typography tag="h5" bold className="mt-2 mb-1">
            7 minute drive
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
            href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=DENCHDT&url=https%3A%2F%2Fwww.hilton.com%2Fen%2Fbook%2Freservation%2Frooms%2F&arrivalDate=2023-06-09&departureDate=2023-06-10&numRooms=1&numAdults=1&numChildren=0"
            color="forest-green"
            target="_blank"
          >
            See rates
          </LinkButton>
        </div>
        <div className="row center-xs middle-xs pt-5 pb-5 mb-5">
          <div className="col-xs-12 col-sm-10 col-md-7">
            <Typography tag="h6" bold>
              If you prefer to stay in a vacation rental, give us a shout! We
              would be happy to recommend neighborhoods in Denver that might
              suit your interests.
            </Typography>
          </div>
        </div>
      </Section>
    </>
  );
}
