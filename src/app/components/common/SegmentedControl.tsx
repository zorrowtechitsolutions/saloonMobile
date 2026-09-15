import SegmentedControl from "@expo/ui/community/segmented-control";
import { useState } from "react";

type Props = {
  segmented: string[];
};

export default function SegmentedControlComponet({ segmented }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={segmented}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );
}
