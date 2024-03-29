import { useState, useMemo, forwardRef, useCallback, useRef } from "react";
import Fuse from "fuse.js";
import { Select, Text } from "@mantine/core";

import { InvitedPrimaryGuest } from "../../api/notion";
import { useDebounce } from "../../hooks/useDebounce";
import { useField } from "react-final-form";

const lf = new Intl.ListFormat("en");

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <div>
        <Text fw={500} size="lg">
          {label}
        </Text>
        <Text size="md">{description}</Text>
      </div>
    </div>
  )
);

interface FullNameFieldProps {
  allGuestsAttendance: InvitedPrimaryGuest[];
}

export function FullNameField({ allGuestsAttendance }: FullNameFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { input: guestIdInput } = useField<string>("guestId");
  const { input: guestInput } = useField<InvitedPrimaryGuest | null>("guest");

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 350);

  const fuse = useMemo(
    () =>
      new Fuse(allGuestsAttendance, {
        includeMatches: true,
        findAllMatches: false,
        ignoreLocation: true,
        threshold: 0.3,
        minMatchCharLength: 3,
        keys: [
          {
            name: "fullName",
            weight: 2,
          },
          {
            name: "additions.fullName",
            weight: 1.5,
          },
          "emailAddress",
          "phoneNumber",
        ],
      }),
    [allGuestsAttendance]
  );

  const filteredResults = useMemo(() => {
    if (!searchValue) return allGuestsAttendance;
    return fuse.search(debouncedSearchValue).map(({ item }) => item);
  }, [allGuestsAttendance, fuse, searchValue, debouncedSearchValue]);

  const selectData = useMemo(
    () =>
      filteredResults.map((guest) => ({
        value: guest.id,
        label: guest.fullName,
        description: lf.format(
          guest.additions.map((a) => a.fullName).filter((v) => !!v)
        ),
      })),
    [filteredResults]
  );

  const handleChange = useCallback(
    (value: string | null) => {
      const selectedGuest = filteredResults.find((guest) => guest.id === value);
      guestIdInput.onChange(value);
      guestInput.onChange(selectedGuest);
    },
    [filteredResults, guestIdInput, guestInput]
  );

  return (
    <>
      <Select
        ref={inputRef}
        size="lg"
        selectOnBlur
        searchable
        withAsterisk
        clearable
        clearButtonLabel="Clear full name field"
        label="Your name"
        labelProps={{ fw: 700 }}
        data={selectData}
        itemComponent={SelectItem}
        filter={(v) => !!v}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
        limit={3}
        {...guestIdInput}
        onChange={handleChange}
      />
      <Text size="sm" className="mt-1" mb={guestIdInput.value ? 0 : 200}>
        Search by phone number, first name, last name, email, or plus one&apos;s
        name
      </Text>
    </>
  );
}
