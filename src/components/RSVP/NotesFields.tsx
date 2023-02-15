import { Text, Textarea } from "@mantine/core";
import { useField, useForm } from "react-final-form";
import { areSomeAttending } from "./utils";
import { FormValues } from "./types";

export function NotesFields() {
  const { getState } = useForm<FormValues>();
  const { input: dietaryRestrictionsInput } = useField(
    "guest.dietaryRestrictions"
  );
  const { input: guestNotesInput } = useField("guest.guestNotes");

  const someAttending = areSomeAttending(getState().values.guest);

  return (
    <>
      {someAttending && <div className="mb-3">
        <Textarea
          size="lg"
          labelProps={{ fw: 700, size: "lg" }}
          label="Dietary Restrictions"
          {...dietaryRestrictionsInput}
        />
        <Text size="sm" className="mt-1">
          Do you or any of your guests have any allergies, dietary restrictions,
          or preferences we should be aware of?
        </Text>
      </div>}
      <div className="mb-3">
        <Textarea
          size="lg"
          labelProps={{ fw: 700, size: "lg" }}
          label={someAttending ? "Anything else?" : "Comments"}
          {...guestNotesInput}
        />
      </div>
    </>
  );
}
