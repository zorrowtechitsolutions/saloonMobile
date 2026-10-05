import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { ScrollView, Text, View } from "react-native";
import { InputComponent } from "../../../../components/common/Input";

export default function PaymentIntegration() {
  return (
    <>
      {/* ========================= */}
      {/* HANDLE */}
      {/* ========================= */}

      <View className="w-full flex-row justify-center items-center py-4">
        <Progress value={100} orientation="horizontal" className="w-[40%]">
          <ProgressFilledTrack />
        </Progress>
      </View>

      <ScrollView
        contentContainerClassName="px-5 pb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <View className="mb-6">
          <Text className="text-[26px] font-bold leading-8 text-[#111827]">
            Set up payments
          </Text>

          <Text className="mt-2 text-[15px] leading-[22px] text-[#6B7280]">
            Add your UPI details
          </Text>
        </View>

        {/* ========================= */}
        {/*  UPI ID */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <View className="flex-row items-center  justify-between">
            <Text className="mb-3 text-[18px] font-semibold text-[#1F2937]">
              UPI ID
            </Text>

            {/* Badge */}

            <View className="rounded-full bg-[#F3F4F6] px-3 py-2">
              <Text className="text-[12px] font-semibold text-[#4B5563]">
                Required
              </Text>
            </View>
          </View>

          <View className="w-full">
            <InputComponent placeholderText="@URHEAEFL" />
          </View>

          <Text className="mt-2 text-[12px] leading-4 text-gray-400">
            Example: 978650@bi
          </Text>
        </View>

        {/* ========================= */}
        {/* Contact Number */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <View className="flex-row items-center  justify-between">
            <Text className="mb-3 text-[18px] font-semibold text-[#1F2937]">
              Google Pay / PhonePe Number
            </Text>

            {/* Badge */}

            <View className="rounded-full bg-[#F3F4F6] px-3 py-2">
              <Text className="text-[12px] font-semibold text-[#4B5563]">
                Required
              </Text>
            </View>
          </View>

          <View className="w-full">
            <InputComponent placeholderText="+91 0000000000" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
