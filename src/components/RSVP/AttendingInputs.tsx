import { useField } from "react-final-form";
import { AttendingToggle } from "./AttendingToggle";
import { FieldArray } from "react-final-form-arrays";
import { Input } from "@mantine/core";
const InputWrapper = Input.Wrapper;

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
        <InputWrapper
          label="Select all who will be attending"
          withAsterisk
          size="lg"
          labelProps={{ fw: 700, mb: 8 }}
        >
          <AttendingInput name="guest" />
          <FieldArray name="guest.additions">
            {({ fields }) =>
              fields.map((name) => <AttendingInput key={name} name={name} />)
            }
          </FieldArray>
        </InputWrapper>
      </div>
    </>
  );
}
