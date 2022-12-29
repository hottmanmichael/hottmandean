import { useField } from "react-final-form";
import { AttendingToggle } from "./AttendingToggle";
import { FieldArray } from "react-final-form-arrays";
import { Chip, Text, Title } from "@mantine/core";

function AttendingInput({ name }: { name: string }) {
  const { input } = useField(`${name}.isAttending`);
  const { input: fullNameValue } = useField<string | null>(`${name}.fullName`);
  const fullName = fullNameValue.value;

  return <AttendingToggle label={`${fullName}`} {...input} />;
}

export function AttendingInputs() {
  return (
    <>
      <div className="mb-4">
        <Text className="mb-1" fw={700}>
          Select all who will be attending?
        </Text>
        <AttendingInput name="guest" />
        <FieldArray name="guest.additions">
          {({ fields }) =>
            fields.map((name) => <AttendingInput key={name} name={name} />)
          }
        </FieldArray>
      </div>
    </>
  );
}
