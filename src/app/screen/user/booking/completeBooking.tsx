import { router } from "expo-router";
import { Calendar, Check, Clock, Store, X } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../../components/common/Button";

export default function CompleteBooking() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFCF8]">
      <View className="relative h-full w-full">
        {/* Top Right Close Button */}
        <View className="absolute right-5 top-3 z-50">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full"
            hitSlop={10}
          >
            <X size={25} color="#111111" strokeWidth={2} />
          </Pressable>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Success Section */}
          <View className="items-center px-8">
            {/* Success Icon */}
            <View className="mt-2 h-[100px] w-[100px] items-center justify-center rounded-full bg-[#50D477]">
              <Check size={35} color="#FFFFFF" strokeWidth={4} />
            </View>

            {/* Success Message */}
            <Text className="mt-10 text-center text-[18px] font-semibold text-black">
              Your slot is requested successfully.
            </Text>

            {/* Payment Message */}
            <Text className="mt-3 text-center text-[16px] text-[#555555]">
              No payment has been made yet.
            </Text>
          </View>

          {/* Payable Card */}
          <View className="mx-8 mt-8 rounded-[20px] border border-[#DCDCDC] bg-white px-5 py-5">
            <View className="flex-row items-center">
              <Clock size={23} color="#FFC000" strokeWidth={2} />

              <View className="ml-5 flex-1">
                <Text className="text-[17px] leading-[24px] text-black">
                  Payable once the service is done
                </Text>
              </View>

              <Text className="ml-3 text-[18px] font-semibold text-black">
                ₹115
              </Text>
            </View>
          </View>

          {/* Booking Details Card */}
          <View className="mx-8 mt-4 rounded-[20px] border border-[#DCDCDC] bg-white px-4 py-6">
            {/* Shop Name */}
            <View className="mb-5">
              <Text className="text-[18px] font-bold text-black">
                Safu · Manjery, Malappuram
              </Text>
            </View>

            {/* Date */}
            <View className="flex-row items-center">
              <Calendar size={23} color="#111111" strokeWidth={2} />

              <Text className="ml-3 flex-1 text-[16px] text-black">
                Tuesday, September 15
              </Text>
            </View>

            {/* Time */}
            <View className="mt-4 flex-row items-start">
              <Clock size={23} color="#111111" strokeWidth={2} />

              <Text className="ml-3 flex-1 text-[16px] leading-[23px] text-black">
                12:45 PM - 1:00 PM (15 minute duration)
              </Text>
            </View>

            {/* Shop */}
            <View className="mt-4 flex-row items-start">
              <Store size={23} color="#111111" strokeWidth={2} />

              <Text className="ml-3 flex-1 text-[16px] leading-[23px] text-black">
                Safu Hair Studio, Manjery
              </Text>
            </View>

            {/* Divider */}
            <View className="my-6 h-[1px] bg-[#DDDDDD]" />

            {/* View Booking */}
            <ButtonComponent
              buttonText="View Booking"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              height="h-12"
            />
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

        {/* Bottom Button */}
        <View className="absolute bottom-0 w-full flex-row items-center justify-between  px-4 py-3">
          <View className="flex-1">
            <ButtonComponent
              buttonText="Back to Home"
              textColor="text-black"
              bgColor="bg-white"
              boder="border-black"
              height="h-12"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
