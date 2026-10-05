import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Clock } from "lucide-react-native";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function WorkingDaysTime() {
  const [selectedDays, setSelectedDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);

  const [applyToAll, setApplyToAll] = useState(true);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFB]">
      {/* ========================= */}
      {/* HANDLE */}
      {/* ========================= */}

      <View className="w-full flex-row justify-center items-center py-4">
        <Progress value={75} orientation="horizontal" className="w-[40%]">
          <ProgressFilledTrack />
        </Progress>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-4 pt-5 pb-10"
      >
        {/* ================= WORKING DAYS ================= */}
        <View className="mb-5 rounded-[24px] border border-[#F3F4F6] bg-white p-5 shadow-sm">
          {/* Heading */}
          <View className="mb-2 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-[20px] font-bold text-[#111827]">
                Working Days
              </Text>

              <Text className="mt-1 text-[13px] font-medium text-[#9CA3AF]">
                Your weekly availability
              </Text>
            </View>

            {/* Badge */}
            <View className="rounded-full bg-[#F3F4F6] px-3 py-2">
              <Text className="text-[12px] font-semibold text-[#4B5563]">
                {selectedDays.length} days open
              </Text>
            </View>
          </View>

          <Text className="mb-5 mt-2 text-[14px] leading-5 text-[#6B7280]">
            Tap the days when your salon accepts bookings
          </Text>

          {/* Days */}
          <View className="flex-row flex-wrap gap-3">
            {daysOfWeek.map((day) => {
              const isSelected = selectedDays.includes(day);

              return (
                <TouchableOpacity
                  key={day}
                  activeOpacity={0.8}
                  onPress={() => toggleDay(day)}
                  className={`h-[72px] w-[22%] items-center justify-center rounded-2xl ${
                    isSelected ? "bg-[#111827]" : "bg-[#F3F4F6]"
                  }`}
                >
                  <Text
                    className={`text-[15px] font-semibold ${
                      isSelected ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {day}
                  </Text>

                  <Text
                    className={`mt-1 text-[12px] ${
                      isSelected ? "text-[#D1D5DB]" : "text-[#6B7280]"
                    }`}
                  >
                    {isSelected ? "Open" : "Off"}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Checkbox */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setApplyToAll(!applyToAll)}
            className="flex-row items-center mt-5"
          >
            <View
              className={`mr-3 h-6 w-6 items-center justify-center rounded-md border-2 ${
                applyToAll
                  ? "border-[#111827] bg-[#111827]"
                  : "border-[#D1D5DB] bg-white"
              }`}
            >
              {applyToAll && (
                <Text className="text-[14px] font-bold text-white">✓</Text>
              )}
            </View>

            <Text className="text-[15px] font-medium text-[#1F2937]">
              Apply to all selected days
            </Text>
          </TouchableOpacity>
        </View>

        {/* ================= OPENING & CLOSING TIME ================= */}
        <View className="mb-5 rounded-[24px] border border-[#F3F4F6] bg-white p-5 shadow-sm">
          {/* Heading */}
          <View className="mb-6 flex-row items-center justify-between">
            <View>
              <Text className="text-[20px] font-bold text-[#111827]">
                Opening & Closing
              </Text>

              <Text className="mt-1 text-[13px] font-medium text-[#9CA3AF]">
                Set your working hours
              </Text>
            </View>

            <Clock
              size={20}
              color="black"
              strokeWidth={2}
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* Time Row */}
          <View className="mb-7 flex-row justify-between">
            {/* Opening */}
            <View className="w-[48%]">
              <Text className="mb-2 text-[13px] font-medium text-[#374151]">
                Opening Time
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                className="rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] px-3 py-4"
              >
                <Text className="text-[16px] font-medium text-[#1F2937]">
                  10:00 AM
                </Text>
              </TouchableOpacity>
            </View>

            {/* Closing */}
            <View className="w-[48%]">
              <Text className="mb-2 text-[13px] font-medium text-[#374151]">
                Closing Time
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                className="rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] px-3 py-4"
              >
                <Text className="text-[16px] font-medium text-[#1F2937]">
                  06:00 PM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
