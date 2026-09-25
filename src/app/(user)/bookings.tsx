import { Search } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarComponent from "../components/common/Calendar";
import { CardComponent } from "../components/common/Card";
import HeaderComponent from "../components/common/Header";
import { InputComponent } from "../components/common/Input";
import SegmentedControlComponet from "../components/common/SegmentedControl";

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

export default function bookings() {
  return (
    <SafeAreaView className="flex-1 ">
      <HeaderComponent />
      <InputComponent icon={Search} placeholderText="Search" />

      <View className="p-3 flex gap-3">
        <CalendarComponent />
        <SegmentedControlComponet
          segmented={["Upcoming", "Past", "Cancelled"]}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-4"
        className="mt-4 w-full p-2"
        contentContainerStyle={{
          paddingBottom: 600,
        }}
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
    </SafeAreaView>
  );
}
