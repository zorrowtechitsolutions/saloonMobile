import { Calendar, Clock, Star, User } from "lucide-react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../../components/common/AppBar";

export default function BookingDetails() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFCF8]">
      <AppBar title="Booking Details" />
      <View className="relative h-full w-full">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Payable Card */}
          <View className="mx-8 mt-8 rounded-[20px] border border-[#DCDCDC] bg-white px-5 py-5">
            <View className="flex-row items-center">
              <View className="ml-5 flex-1">
                <Text className="text-[17px] leading-[24px] text-black">
                  Status
                </Text>
              </View>

              <Text className="ml-3 text-[12px] font-semibold #FFC000 border-none py-2  px-3 rounded-full bg-[#FFC000] text-black">
                Pending
              </Text>
            </View>
          </View>

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

          {/* Booking Details Card */}
          <View className="mx-8 mt-4 rounded-[20px] border border-[#E2E2E2] bg-white px-5 py-5">
            {/* Header */}
            <Text className="text-[18px] font-bold text-[#111111]">
              Booking Details
            </Text>

            <View className="my-5 h-[1px] bg-[#E5E5E5]" />

            {/* Service */}
            <View className="flex-row items-center">
              <Text className="w-[90px] text-[15px] font-medium text-[#111111]">
                Service
              </Text>

              <Text className="flex-1 text-right text-[15px] font-medium text-[#111111]">
                Haircut & Beard Trim
              </Text>
            </View>

            <View className="my-5 h-[1px] bg-[#E5E5E5]" />

            {/* Duration */}
            <View className="flex-row items-center">
              <Text className="w-[90px] text-[15px] font-medium text-[#111111]">
                Duration
              </Text>

              <View className="flex-1 flex-row items-center justify-end">
                <Clock size={18} color="#555555" strokeWidth={2} />

                <Text className="ml-2 text-[15px] font-medium text-[#111111]">
                  15 min
                </Text>
              </View>
            </View>

            <View className="my-5 h-[1px] bg-[#E5E5E5]" />

            {/* Date */}
            <View className="flex-row items-center">
              <Text className="w-[90px] text-[15px] font-medium text-[#111111]">
                Date
              </Text>

              <View className="flex-1 flex-row items-center justify-end">
                <Calendar size={18} color="#555555" strokeWidth={2} />

                <Text className="ml-2 text-[15px] font-medium text-[#111111]">
                  Tuesday, September 15
                </Text>
              </View>
            </View>

            <View className="my-5 h-[1px] bg-[#E5E5E5]" />

            {/* Stylist */}
            <View className="flex-row items-center">
              <Text className="w-[90px] text-[15px] font-medium text-[#111111]">
                Stylist
              </Text>

              <View className="flex-1 flex-row items-center justify-end">
                <User size={18} color="#555555" strokeWidth={2} />

                <Text className="ml-2 text-[15px] font-medium text-[#111111]">
                  No Preference
                </Text>
              </View>
            </View>
          </View>

          {/* Payment / Bill Card */}
          <View className="mx-8 mt-4 rounded-[20px] border border-[#DCDCDC] bg-white px-4 py-6">
            {/* Pending Payment */}
            <View className="flex-row items-center justify-between">
              <View className="flex-1 flex-row items-center">
                <Clock size={23} color="#FFC000" strokeWidth={2} />

                <Text className="ml-3 text-[16px] text-black">
                  Pending payment
                </Text>
              </View>

              <Text className="text-[16px] font-medium text-black">₹100</Text>
            </View>

            {/* Divider */}
            <View className="my-6 h-[1px] bg-[#DDDDDD]" />

            {/* Booking ID */}
            <View className="flex-row items-center justify-between">
              <Text className="text-[16px] font-bold text-black">
                Booking ID
              </Text>

              <Text className="text-[16px] font-bold text-black">#22bed3</Text>
            </View>

            {/* Divider */}
            <View className="my-6 h-[1px] bg-[#DDDDDD]" />

            {/* Taxes and Others */}
            <Text className="text-[18px] font-semibold text-black">
              Taxes and Others
            </Text>

            {/* Price */}
            <View className="mt-4 flex-row justify-between">
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
      </View>
    </SafeAreaView>
  );
}
