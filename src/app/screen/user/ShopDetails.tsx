import { router } from "expo-router";
import { ChevronLeft, Heart, MapPin, Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../components/common/Button";
import { TabsComponent } from "../../components/common/Tabs";

export default function ShopDetailsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-1 h-full w-full">
        <Image
          source={require("@/assets/images/icon.png")}
          className="h-[30%] w-[100%] shrink-0 rounded-[14px]"
          resizeMode="cover"
        />

        <Pressable className="h-11 w-11 items-center absolute right-7 top-6 justify-center rounded-full bg-gray-100">
          <Heart size={22} color="black" fill="black" />
        </Pressable>
        <Pressable
          className="h-11 w-11 items-center absolute left-7 top-6 justify-center rounded-full bg-gray-100"
          onPress={() => router.back()}
        >
          <ChevronLeft size={22} color="black" />
        </Pressable>

        <View className="my-3 flex-col  ml-5">
          <Text
            className="text-[17px] font-semibold text-black"
            numberOfLines={1}
          >
            Safu
          </Text>
          <View className="flex-row items-center gap-3">
            <View className={`flex-row items-center mt-3`}>
              <Star size={18} color="#9A7417" fill="#9A7417" />

              <Text className="ml-1 text-[15px] font-semibold text-black">
                4.4
              </Text>
            </View>
            <View className={`flex-row items-center mt-3`}>
              <MapPin size={18} color="#777" />

              <Text className="ml-1 text-[15px] font-semibold text-black">
                5 km
              </Text>
            </View>
          </View>
        </View>

        <TabsComponent
          tabs={["Services", "About", "Gallery", "Reviews"]}
          showCarousel={false}
          showCard={false}
        />
      </View>
      <View className="absolute bottom-6 left-0 right-0 w-full  px-6 py-3">
        <ButtonComponent
          buttonText="Book Appointment"
          textColor="text-white"
          bgColor="bg-black"
          boder="border-black"
          height="h-14"
        />
      </View>
    </SafeAreaView>
  );
}
