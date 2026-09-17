import { router } from "expo-router";
import { Text, View } from "react-native";
import AccountItemComponent from "../../components/common/AccountItem";

export default function ServicesScreen() {
  return (
    <View className="">
      <View className="flex-row items-center gap-3">
        <Text className="text-base font-semibold text-black">Services</Text>

        <View className="h-[1px] flex-1 bg-gray-300" />
      </View>
      <AccountItemComponent
        title="Mens Grooming"
        subtitle="Start from $200"
        onPress={() => router.push("/screen/user/Professional")}
      />
      <View className="h-[1px] bg-gray-300" />

      <AccountItemComponent
        title="Mens Hair Colouring"
        subtitle="Start from $200"
      />
      <View className="h-[1px] bg-gray-300" />
      <AccountItemComponent
        title="Mens Hair Colouring"
        subtitle="Start from $200"
      />
      <View className="h-[1px] bg-gray-300" />
    </View>
  );
}
