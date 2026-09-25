import { Search } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/common/AppBar";
import { CardComponent } from "../../components/common/Card";
import { InputComponent } from "../../components/common/Input";
import SegmentedControlComponet from "../../components/common/SegmentedControl";

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

export default function WishlistScreen() {
  return (
    <SafeAreaView className="flex-1 ">
      <AppBar title="Favoraite" />

      <InputComponent icon={Search} placeholderText="Search" />

      <View className="p-3">
        <SegmentedControlComponet segmented={["Stylish", "Shop"]} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4 w-full"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 300,
          gap: 16,
        }}
      >
        {shops.map((shop) => (
          <CardComponent
            width="w-max-[400px]"
            key={shop.id}
            shop={shop}
            primaryButtonText="View Shop"
            secondaryButtonText="Book Now"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
