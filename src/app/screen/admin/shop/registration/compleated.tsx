import { Check, ChevronRight, Link as LinkIcon } from "lucide-react-native";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ButtonComponent from "../../../../components/common/Button";

export default function RegisterCompleated() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" h-full">
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 14,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Success Section */}
          <View className="items-center px-8 mb-3">
            {/* Success Icon */}
            <View className="mt-2 h-[100px] w-[100px] items-center justify-center rounded-full bg-[#50D477]">
              <Check size={35} color="#FFFFFF" strokeWidth={4} />
            </View>

            {/* Success Message */}
            <Text className="mt-10 text-center text-[22px] font-semibold text-black">
              Shop Created
            </Text>

            {/* Payment Message */}
            <Text className="mt-3 text-center text-[16px] text-[#555555]">
              Shop Activated
            </Text>
          </View>

          {/* Main Card */}
          <View className="w-full rounded-[22px] bg-white border border-gray-100 px-6 pt-7 pb-5 shadow-sm">
            {/* Status */}
            <View className="flex-row items-center">
              <View className="h-8 w-8 items-center justify-center rounded-full bg-green-50">
                <View className="h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <Check size={13} color="white" strokeWidth={3} />
                </View>
              </View>

              <Text className="ml-3 text-[20px] font-bold text-[#202020]">
                Urban Cuts is now live!
              </Text>

              <View className="ml-2 rounded-full bg-green-50 px-3 py-1">
                <Text className="text-[13px] font-medium text-green-500">
                  ONLINE
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text className="ml-11 mt-1 text-[14px] leading-[23px] text-gray-500">
              Customers can now discover your shop and{"\n"}
              book appointments online.
            </Text>

            {/* Shop Image */}
            <View className="mt-5 h-[162px] w-full overflow-hidden rounded-[16px]">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
                }}
                className="h-full w-full"
                resizeMode="cover"
              />

              {/* Bottom Overlay */}
              <View className="absolute bottom-0 left-0 right-0 h-[43px] bg-black/45 px-4 flex-row items-center justify-between">
                {/* Verified */}
                <View className="flex-row items-center">
                  <View className="h-5 w-5 items-center justify-center rounded-full border border-yellow-400">
                    <Text className="text-[11px] text-yellow-400">★</Text>
                  </View>

                  <Text className="ml-2 text-[13px] font-semibold text-white">
                    BOUTIQUE VERIFIED
                  </Text>
                </View>

                {/* Link */}
                <View className="flex-row items-center">
                  <LinkIcon size={14} color="white" />

                  <Text className="ml-1 text-[12px] font-medium text-white">
                    urbancuts.atelier.co
                  </Text>
                </View>
              </View>
            </View>

            {/* Next Steps */}
            <Text className="mt-7 text-[17px] font-bold text-[#222222]">
              Next Steps
            </Text>

            {/* Step 1 */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="mt-4 h-[78px] w-full flex-row items-center rounded-[17px] bg-[#f0f0f0] px-4"
            >
              <View className="h-9 w-9 items-center justify-center rounded-full bg-black">
                <Text className="text-[16px] font-medium text-white">1</Text>
              </View>

              <View className="ml-4 flex-1">
                <Text
                  className="text-[16px] font-medium text-[#222222]"
                  numberOfLines={1}
                >
                  Add staff members to your shop
                </Text>

                <Text
                  className="mt-1 text-[14px] text-gray-400"
                  numberOfLines={1}
                >
                  Assign roles, shifts, and specialized duties
                </Text>
              </View>

              <ChevronRight size={22} color="#999999" />
            </TouchableOpacity>

            {/* Step 2 */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="mt-3 h-[78px] w-full flex-row items-center rounded-[17px] bg-[#f0f0f0] px-4"
            >
              <View className="h-9 w-9 items-center justify-center rounded-full bg-black">
                <Text className="text-[16px] font-medium text-white">2</Text>
              </View>

              <View className="ml-4 flex-1">
                <Text
                  className="text-[16px] font-medium text-[#222222]"
                  numberOfLines={1}
                >
                  Add services and pricing
                </Text>

                <Text
                  className="mt-1 text-[14px] text-gray-400"
                  numberOfLines={1}
                >
                  Set custom durations and grooming
                </Text>
              </View>

              <ChevronRight size={22} color="#999999" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Back Home Button */}

        <View className="absolute bottom-0 w-full flex-row items-center justify-between  px-4 py-3">
          <View className="flex-1">
            <ButtonComponent
              buttonText="Back to Home"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              height="h-12"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
