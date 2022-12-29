import { Text, Textarea } from "@mantine/core";
import { useField } from "react-final-form";

export function NotesFields() {
  const { input: dietaryRestrictionsInput } = useField(
    "guest.dietaryRestrictions"
  );
  const { input: guestNotesInput } = useField("guest.guestNotes");

  return (
    <>
      <div className="mb-3">
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
      </div>
      <div className="mb-3">
        <Textarea
          size="lg"
          labelProps={{ fw: 700, size: "lg" }}
          label="Anything else?"
          {...guestNotesInput}
        />
      </div>
    </>
  );
}
