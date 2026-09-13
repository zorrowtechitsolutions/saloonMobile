import {
    Calendar,
    CalendarBody,
    CalendarGrid,
    CalendarHeader,
    CalendarHeaderNextButton,
    CalendarHeaderPrevButton,
    CalendarHeaderTitle,
    CalendarWeekDaysHeader,
} from "@/components/ui/calendar";
import { ChevronLeftIcon, ChevronRightIcon, Icon } from "@/components/ui/icon";
import React from "react";

export default function CalendarComponent() {
  const [selected, setSelected] = React.useState(new Date());

  return (
    <Calendar mode="single" value={selected} onValueChange={setSelected}>
      <CalendarHeader>
        <CalendarHeaderPrevButton>
          <Icon as={ChevronLeftIcon} />
        </CalendarHeaderPrevButton>
        <CalendarHeaderTitle />
        <CalendarHeaderNextButton>
          <Icon as={ChevronRightIcon} />
        </CalendarHeaderNextButton>
      </CalendarHeader>

      <CalendarWeekDaysHeader />

      <CalendarBody>
        <CalendarGrid>{/* Calendar will auto-render the grid */}</CalendarGrid>
      </CalendarBody>
    </Calendar>
  );
}
