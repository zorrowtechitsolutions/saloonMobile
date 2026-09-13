import SegmentedControl from "@expo/ui/community/segmented-control";
import { useState } from "react";

export default function SegmentedControlComponet() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={["One", "Two", "Three"]}
      selectedIndex={selectedIndex}
      onChange={(event) => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );
}
