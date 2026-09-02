import { Bell, ChevronDown, MapPin } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function HeaderComponent() {
  return (
    <View className="w-full flex-row items-center justify-between  px-5 py-4">
      {/* Location */}
      <Pressable
        className="flex-row items-center"
        onPress={() => {
          console.log("Location pressed");
        }}
      >
        {/* Location Icon */}
        <MapPin size={29} color="#111111" strokeWidth={2.3} />

        {/* Location Text */}
        <Text className="ml-3 text-[20px] font-semibold text-black">
          Kochi, Kerala
        </Text>

        {/* Dropdown */}
        <ChevronDown
          size={25}
          color="#111111"
          strokeWidth={2.8}
          className="ml-2"
        />
      </Pressable>

      {/* Notification */}
      <Pressable
        className="h-12 w-12 items-center justify-center rounded-full bg-[#F7F7F7]"
        onPress={() => {
          console.log("Notification pressed");
        }}
      >
        <Bell size={27} color="#111111" strokeWidth={2.1} />

        {/* Notification dot */}
        <View className="absolute right-[11px] top-[9px] h-[5px] w-[5px] rounded-full bg-red-500" />
      </Pressable>
    </View>
  );
}
