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
import { CalendarCheck } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export default function CalendarComponent() {
  const [selected, setSelected] = React.useState(new Date());

  const formattedDate = selected.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <View className="w-full">
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
          <CalendarGrid />
        </CalendarBody>
      </Calendar>

      {/* Selected date */}
      <View className="mt-4 flex-row items-center gap-3 ">
        <CalendarCheck size={20} color="#222" />
        <Text className="text-base font-semibold text-black">
          {formattedDate}
        </Text>
      </View>
    </View>
  );
}
