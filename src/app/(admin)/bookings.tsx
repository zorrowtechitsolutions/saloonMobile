import { CalendarFold, Search, SlidersHorizontal } from "lucide-react-native";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheetComponent from "../components/common/BottomSheet";
import { CardComponent } from "../components/common/Card";
import HeaderComponent from "../components/common/Header";
import { InputComponent } from "../components/common/Input";
import SegmentedControlComponet from "../components/common/SegmentedControl";
import { useDrawer } from "../lib/context/global";

const bookingsData = [
  {
    id: "1",
    name: "Olivia",
    shop: "Urban Cuts, Panballi nagar, Kochi",
    image: require("@/assets/images/icon.png"),
    service: "Beard & Hircut",
    price: "200 Rs",
    time: "Today, 19, Aug, 02:30pm (45 mins)",
    status: "canceled",
  },
  {
    id: "2",
    name: "Sophia",
    shop: "Style Studio, Panballi nagar, Kochi",
    image: require("@/assets/images/icon.png"),
    service: "Beard & Hircut",
    price: "200 Rs",
    time: "Today, 19, Aug, 02:30pm (45 mins)",
    status: "canceled",
  },

  {
    id: "3",
    name: "Sophia",
    shop: "Style Studio, Panballi nagar, Kochi",
    image: require("@/assets/images/icon.png"),
    service: "Beard & Hircut",
    price: "200 Rs",
    time: "Today, 19, Aug, 02:30pm (45 mins)",
    status: "confirmed",
  },
  {
    id: "4",
    name: "Sophia",
    shop: "Style Studio, Panballi nagar, Kochi",
    image: require("@/assets/images/icon.png"),
    service: "Beard & Hircut",
    price: "200 Rs",
    time: "Today, 19, Aug, 02:30pm (45 mins)",
    status: "pending",
  },
];

export default function bookings() {
  const { openSheet } = useDrawer();
  return (
    <SafeAreaView className="flex-1 ">
      <HeaderComponent />
      <View className="flex-row w-full items-center gap-3 justify-center">
        <InputComponent icon={Search} placeholderText="Search" flex="flex-1" />

        <Pressable
          className="w-10 h-10 items-center justify-center"
          onPress={() => openSheet()}
        >
          <SlidersHorizontal size={27} color="#222" />
        </Pressable>
      </View>

      <View className="p-3 flex gap-3">
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
        {bookingsData.map((booking) => (
          <CardComponent
            key={booking.id}
            shop={booking}
            primaryButtonText="View Details"
            secondaryButtonText="Reshcedule"
            icon={CalendarFold}
            booking={true}
          />
        ))}
        <BottomSheetComponent
          headingText="Select Date"
          bottomSheetView={"Filter Calendar"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
