import { Text, SegmentedControl, Chip, Checkbox } from "@mantine/core";
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
      <Checkbox
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        checked={value}
        label={label}
        size="lg"
        td={value ? undefined : "line-through"}
      />
    </div>
  );
}
