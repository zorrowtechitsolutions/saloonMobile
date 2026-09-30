// import {
//   Calendar,
//   CalendarBody,
//   CalendarGrid,
//   CalendarHeader,
//   CalendarHeaderNextButton,
//   CalendarHeaderPrevButton,
//   CalendarHeaderTitle,
//   CalendarWeekDaysHeader,
// } from "@/components/ui/calendar";
// import { ChevronLeftIcon, ChevronRightIcon, Icon } from "@/components/ui/icon";
// import React from "react";

// export default function CalendarComponent() {
//   const [selected, setSelected] = React.useState(new Date());

//   return (
//     <Calendar mode="single" value={selected} onValueChange={setSelected}>
//       <CalendarHeader>
//         <CalendarHeaderPrevButton>
//           <Icon as={ChevronLeftIcon} />
//         </CalendarHeaderPrevButton>
//         <CalendarHeaderTitle />
//         <CalendarHeaderNextButton>
//           <Icon as={ChevronRightIcon} />
//         </CalendarHeaderNextButton>
//       </CalendarHeader>

//       <CalendarWeekDaysHeader />

//       <CalendarBody>
//         <CalendarGrid>{/* Calendar will auto-render the grid */}</CalendarGrid>
//       </CalendarBody>
//     </Calendar>
//   );
// }

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
    <Calendar
      mode="single"
      value={selected}
      onValueChange={setSelected}
      className="w-full"
    >
      {/* Header */}
      <CalendarHeader className="h-10 px-1">
        <CalendarHeaderPrevButton className="h-8 w-8 p-0">
          <Icon as={ChevronLeftIcon} className="h-4 w-4" />
        </CalendarHeaderPrevButton>

        <CalendarHeaderTitle className="text-sm" />

        <CalendarHeaderNextButton className="h-8 w-8 p-0">
          <Icon as={ChevronRightIcon} className="h-4 w-4" />
        </CalendarHeaderNextButton>
      </CalendarHeader>

      {/* Week names */}
      <CalendarWeekDaysHeader className="h-7" />

      {/* Dates */}
      <CalendarBody className="mt-1">
        <CalendarGrid className="gap-0">
          {/* Calendar automatically renders the dates */}
        </CalendarGrid>
      </CalendarBody>
    </Calendar>
  );
}
