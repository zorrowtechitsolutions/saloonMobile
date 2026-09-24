import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccordionComponent from "../../../components/common/Accordion";
import AppBar from "../../../components/common/AppBar";
import ButtonComponent from "../../../components/common/Button";

const services = [
  {
    id: 1,
    name: "Mens Groom",
    services: [
      {
        name: "Beard Trim",
        price: 150,
        time: "15 Mints",
      },

      {
        id: 3,
        name: "Hair Styling",
        price: 300,
        time: "15 Mints",
      },
      {
        id: 4,
        name: "Hair Wash",
        price: 100,
        time: "15 Mints",
      },
    ],
  },

  {
    id: 2,
    name: "Girls Groom",
    services: [
      {
        name: "Beard Trim",
        price: 150,
        time: "15 Mints",
      },

      {
        id: 3,
        name: "Hair Styling",
        price: 300,
        time: "15 Mints",
      },
      {
        id: 4,
        name: "Hair Wash",
        price: 100,
        time: "15 Mints",
      },
    ],
  },
];

export default function SelectServices() {
  return (
    <SafeAreaView className="flex-1">
      <View className=" w-full h-full">
        <AppBar title="services" searchShow={true} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-4 w-full"
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 300,
            gap: 16,
          }}
        >
          <View className="p-4">
            <AccordionComponent services={services} />
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
            buttonText="Continue"
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
