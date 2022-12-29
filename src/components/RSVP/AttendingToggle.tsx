import { Text, SegmentedControl, Chip } from "@mantine/core";
import { useCallback } from "react";

interface AttendingInputProps {
  value: boolean;
  label: string;
  onChange: (value: boolean) => void;
}

export function AttendingToggle({
  value,
  label,
  onChange,
}: AttendingInputProps) {
  return (
    <div className="row middle-xs between-xs mb-1">
      <Chip
        color="teal"
        variant="filled"
        defaultChecked
        size="xl"
        onChange={onChange}
        checked={value}
      >
        <Text fw={500} span td={value ? undefined : "line-through"}>
          {label}
        </Text>
      </Chip>
    </div>
  );
}
