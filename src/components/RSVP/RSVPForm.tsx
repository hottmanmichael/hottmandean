import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { Title, Text } from "@mantine/core";
import type { InvitedPrimaryGuest } from "../../api/notion";
import { Blob } from "../Blob";
import { AttendingInputs } from "./AttendingInputs";
import { FullNameField } from "./FullNameField";
import { NotesFields } from "./NotesFields";
import { FormValues } from "./types";
import { Button, LinkButton } from "../Button";
import { useState } from "react";
import { useMediaQuery } from "../../hooks";
import { useWindowScroll } from "@mantine/hooks";

interface RSVPFormProps {
  allGuestsAttendance: InvitedPrimaryGuest[];
}

export function RSVPForm({ allGuestsAttendance }: RSVPFormProps) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [submittedValues, setSubmittedValues] = useState<FormValues | null>(
    null
  );

  const [scroll, scrollTo] = useWindowScroll();

  const handleSubmit = (values: FormValues) => {
    setSubmittedValues(values);
    scrollTo({
      y: 400,
    });
  };

  if (submittedValues !== null) {
    return (
      <>
        <div style={{ zIndex: 10 }} className="center-xs middle-xs mb-5">
          <Title mb={20}>Thanks, {submittedValues.guest.firstName}!</Title>
          <Text mb={40}>We have received your RSVP.</Text>
          <LinkButton href="/">Return</LinkButton>
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
        <div className="py-5" />
        <div className="py-5" />
      </>
    );
  }

  return (
    <Form<FormValues>
      initialValues={{
        guestId: null,
        guest: null,
      }}
      onSubmit={handleSubmit}
      mutators={{
        ...arrayMutators,
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div className="mb-4">
            <FullNameField allGuestsAttendance={allGuestsAttendance} />
          </div>

          {props.values.guest?.id && (
            <>
              <div className="mb-4">
                <AttendingInputs />
              </div>
              <div className="mb-4">
                <NotesFields />
              </div>
              <Button
                type="submit"
                color="forest-green"
                onClick={() => {}}
                className="m-0"
              >
                Submit
              </Button>
            </>
          )}
        </form>
      )}
    </Form>
  );
}
