import { ArrowRight } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { CardComponent } from "../components/common/Card";

const categories = ["Haircut", "Nail Polish", "Hair Color", "Beard", "Facial"];

const shops = [
  {
    id: "1",
    name: "Olivia",
    shop: "Urban Cuts",
    image: require("@/assets/images/icon.png"),
    rating: "4.7",
    service: "Beard",
    price: "200 Rs",
    experience: "5 Years",
    distance: "2 KM",
  },
  {
    id: "2",
    name: "Sophia",
    shop: "Style Studio",
    image: require("@/assets/images/icon.png"),
    rating: "4.8",
    service: "Haircut",
    price: "300 Rs",
    experience: "7 Years",
    distance: "1.5 KM",
  },
];

export default function Stylish() {
  return (
    <View className="mt-5">
      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        {categories.map((category, index) => (
          <Pressable
            key={category}
            className={`h-12 items-center justify-center rounded-full px-6 ${
              index === 0 ? "bg-black" : "border border-gray-200 bg-white"
            }`}
          >
            <Text
              className={`text-[15px] font-medium ${
                index === 0 ? "text-white" : "text-gray-600"
              }`}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Header */}
      <View className="mt-6 flex-row items-center justify-between px-5">
        <Text className="text-[25px] font-bold text-black">Top Stylish</Text>

        <Pressable className="flex-row items-center">
          <Text className="text-[16px] font-semibold text-black">See All</Text>

          <ArrowRight size={20} color="black" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Shops */}
      <View className="mt-4 gap-4 ">
        {shops.map((shop) => (
          <CardComponent key={shop.id} shop={shop} />
        ))}
      </View>
    </View>
  );
}
