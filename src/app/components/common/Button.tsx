import { Pressable, Text, View } from "react-native";

export default function ButtonComponent() {
  return (
    <View className="mt-4 flex-row gap-3">
      <Pressable className="h-14 flex-1 items-center justify-center rounded-[15px] border border-black bg-white">
        <Text className="text-[17px] font-semibold text-black">View Shop</Text>
      </Pressable>

      <Pressable className="h-14 flex-1 items-center justify-center rounded-[15px] bg-black">
        <Text className="text-[17px] font-semibold text-white">Book Now</Text>
      </Pressable>
    </View>
  );
}
