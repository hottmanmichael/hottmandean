import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { Title, Text, LoadingOverlay } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useMutation } from "@apollo/client";
import type { InvitedPrimaryGuest } from "../../api/notion";
import { Blob } from "../Blob";
import { AttendingInputs } from "./AttendingInputs";
import { FullNameField } from "./FullNameField";
import { NotesFields } from "./NotesFields";
import { FormValues } from "./types";
import { Button, LinkButton } from "../Button";
import { useState } from "react";
import { useMediaQuery } from "../../hooks";
import {
  CreateRsvpRequest,
  CreateRsvpResponse,
  CREATE_RSVP,
} from "./CREATE_RSVP";

interface RSVPFormProps {
  allGuestsAttendance: InvitedPrimaryGuest[];
}

export function RSVPForm({ allGuestsAttendance }: RSVPFormProps) {
  const [, scrollTo] = useWindowScroll();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [submittedValues, setSubmittedValues] =
    useState<InvitedPrimaryGuest | null>(null);

  const [createRsvpMutation, { loading: submitting }] = useMutation<
    CreateRsvpResponse,
    CreateRsvpRequest
  >(CREATE_RSVP, {
    onCompleted: (data) => {
      console.log({ data });
      setSubmittedValues(data.createRSVP);
      scrollTo({
        y: 400,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = async (values: FormValues) => {
    await createRsvpMutation({ variables: { input: values } });
  };

  if (submittedValues !== null) {
    return (
      <>
        <div style={{ zIndex: 10 }} className="center-xs middle-xs mb-5">
          <Title mb={20}>Thanks, {submittedValues.firstName}!</Title>
          <Text mb={40}>We have received your RSVP.</Text>
          <LinkButton href="/">Back to website</LinkButton>
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
          <LoadingOverlay
            visible={submitting}
            overlayBlur={0.5}
            overlayColor="#f7f9f7"
          />

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
