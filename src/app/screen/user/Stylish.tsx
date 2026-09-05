import { ChevronRight } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { CardComponent } from "../../components/common/Card";

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

  {
    id: "3",
    name: "Sophia",
    shop: "Style Studio",
    image: require("@/assets/images/icon.png"),
    rating: "4.8",
    service: "Haircut",
    price: "300 Rs",
    experience: "7 Years",
    distance: "1.5 KM",
  },
  {
    id: "4",
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

export default function Stylish({ title }: { title: string }) {
  return (
    <View className="mt-5">
      {/* Header */}
      <View className="mt-6 flex-row items-center justify-between">
        <Text className="text-[20px] font-bold text-black">{title} </Text>

        <Pressable className="flex-row items-center">
          <Text className="text-[16px] font-semibold text-black">See All</Text>

          <ChevronRight size={20} color="black" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Shops */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4"
        className="mt-4 w-full"
      >
        {shops.map((shop) => (
          <CardComponent
            key={shop.id}
            shop={shop}
            primaryButtonText="View Profile"
            secondaryButtonText="Book Now"
          />
        ))}
      </ScrollView>
    </View>
  );
}
