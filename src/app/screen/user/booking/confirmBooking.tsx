import {
  CalendarDays,
  ChevronRight,
  FilePenLine,
  Star,
  UserRound,
} from "lucide-react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../../components/common/AppBar";
import ButtonComponent from "../../../components/common/Button";

export default function ConfirmBooking() {
  return (
    <SafeAreaView className="flex-1 ">
      <View className=" w-full h-full relative ">
        <AppBar title="Review & Confirm" />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Shop Card */}
          <View className="mx-8 mt-2 rounded-[20px] border border-[#DCDCDC] bg-white px-5 py-4">
            <View className="flex-row items-center">
              {/* Shop Image */}
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
                }}
                className="h-[64px] w-[64px] rounded-[12px]"
                resizeMode="cover"
              />

              {/* Shop Details */}
              <View className="ml-4 flex-1">
                <Text
                  className="text-[18px] font-semibold text-black"
                  numberOfLines={1}
                >
                  Luxe Hair Studio
                </Text>

                <Text className="mt-0.5 text-[16px] text-[#666666]">
                  Mg Road
                </Text>
              </View>

              {/* Rating */}
              <View className="ml-2 flex-row items-center">
                <Star
                  size={20}
                  color="#F4CC68"
                  fill="#F4CC68"
                  strokeWidth={1.5}
                />

                <Text className="ml-2 text-[16px] font-medium text-black">
                  4.7
                </Text>
              </View>
            </View>
          </View>

          {/* Selected Slots */}
          <Text className="mx-8 mt-3 text-[18px] font-semibold text-black">
            Selected Slots
          </Text>

          <View className="mx-8 mt-2 rounded-[20px] border border-[#DCDCDC] bg-white px-5 py-5">
            <View className="flex-row items-center">
              <CalendarDays size={23} color="#3D3D3D" strokeWidth={2} />

              <View className="ml-6">
                <Text className="text-[18px] leading-[31px] text-[#666666]">
                  Tuesday, September 15
                </Text>
              </View>
            </View>
          </View>

          {/* Stylish */}
          <Text className="mx-8 mt-3 text-[18px] font-semibold text-black">
            Stylish
          </Text>

          <View className="mx-8 mt-3">
            {/* Stylist Preference */}
            <View className="flex-row items-center">
              <UserRound size={23} color="#111111" strokeWidth={2} />

              <Text className="ml-5 text-[16px] text-[#111111]">
                No Preference
              </Text>

              <Text className="mx-3 text-[18px] text-black">•</Text>

              <Text className="text-[16px] text-[#111111]">
                Max Availability
              </Text>
            </View>

            {/* Booking Notes */}
            <View className="mt-2 border-t border-[#D7D7D7]">
              <View className="flex-row items-center py-5">
                <FilePenLine size={23} color="#333333" strokeWidth={2} />

                <Text className="ml-6 flex-1 text-[16px] text-[#111111]">
                  Add booking notes for the stylish
                </Text>

                <ChevronRight size={23} color="#444444" strokeWidth={2} />
              </View>
            </View>
          </View>

          {/* Bill Summary */}
          <Text className="mx-8 mt-3 text-[18px] font-semibold text-black">
            Bill summary
          </Text>

          <View className="mx-8 mt-3 rounded-[20px] border border-[#DCDCDC] bg-white px-4 py-7">
            {/* Service */}
            <View>
              <View className="flex-row items-center justify-between">
                <Text className="text-[16px] text-black">Hair Wash</Text>

                <Text className="text-[16px] text-black">₹100</Text>
              </View>

              <Text className="mt-1 text-[18px] text-[#222222]">
                15 mins • qty: 1
              </Text>
            </View>

            {/* Divider */}
            <View className="my-6 h-[1px] bg-[#DDDDDD]" />

            {/* Taxes and Others */}
            <Text className="text-[18px] font-semibold text-black">
              Taxes and Others
            </Text>

            {/* Price */}
            <View className="mt-3 flex-row justify-between">
              <Text className="text-[16px] text-[#222222]">Price</Text>

              <Text className="text-[16px] text-[#222222]">+₹100</Text>
            </View>

            {/* Taxes */}
            <View className="mt-2 flex-row justify-between">
              <Text className="text-[16px] text-[#222222]">Taxes</Text>

              <Text className="text-[16px] text-[#222222]">+₹5</Text>
            </View>

            {/* Platform Fee */}
            <View className="mt-2 flex-row justify-between">
              <Text className="text-[16px] text-[#222222]">Platform Fee</Text>

              <View className="flex-row items-center">
                <Text className="mr-2 text-[16px] text-[#888888] line-through">
                  +₹30.00
                </Text>

                <Text className="text-[16px] text-[#222222]">-₹0</Text>
              </View>
            </View>

            {/* Divider */}
            <View className="my-6 h-[1px] bg-[#DDDDDD]" />

            {/* Total */}
            <View className="flex-row items-center justify-between">
              <Text className="text-[16px] text-[#111111]">
                Pay later total
              </Text>

              <Text className="text-[16px] font-medium text-[#111111]">
                ₹105
              </Text>
            </View>
          </View>
        </ScrollView>

        <View className="flex-row items-center justify-between p-4  w-full absolute bottom-0">
          {/* Left Side: Text Information */}
          <View className="flex-1">
            {/* Title */}
            <Text className="text-[18px] font-medium text-black leading-tight">
              ₹ 400
            </Text>

            {/* Duration */}
            <Text className="text-[13px] text-gray-400 mt-1">
              1 service 15 Mints
            </Text>
          </View>

          {/* Right Side: Add Button */}
          <ButtonComponent
            buttonText="Book Now"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-12"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
