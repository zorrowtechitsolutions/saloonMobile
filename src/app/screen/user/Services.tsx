import { router } from "expo-router";
import { Send, Store } from "lucide-react-native";
import { Text, View } from "react-native";
import AccountItemComponent from "../../components/common/AccountItem";

export default function ServicesScreen() {
  return (
    <View className="">
      <View className="p-5  w-full">
        {/* Urban Cuts */}
        <View className=" m-auto  flex-row items-center">
          {/* Icon */}
          <View className="h-9 w-9 flex-row gap-2  items-center justify-center rounded-[10px] bg-[#F3F3F1]">
            <Store size={14} color="#111111" strokeWidth={2} />
            {/* Name */}
            <Text className=" w-[190px] text-[13px] font-medium text-[#202020]">
              Urban Cuts
            </Text>
          </View>

          {/* Time */}
          <Text className="text-[12px] text-[#666666]">
            Mon – Fri · 10:00 AM – 7:00 PM
          </Text>
        </View>

        {/* Freelance */}
        <View className=" m-auto flex-row items-center">
          {/* Icon */}
          <View className="h-9 w-9 flex-row gap-2 items-center justify-center rounded-[10px] bg-[#F3F3F1]">
            <Send size={14} color="#111111" strokeWidth={2} />
            <Text className=" w-[190px] text-[13px] font-medium text-[#202020]">
              Freelance
            </Text>
          </View>

          {/* Name */}

          <Text className="text-[12px] text-[#666666]">
            Sat – Sun · 10:00 AM – 6:00 PM
          </Text>
          {/* Time */}
        </View>
      </View>

      <View className="flex-row items-center gap-3">
        <Text className="text-base font-semibold text-black">Services</Text>

        <View className="h-[1px] flex-1 bg-gray-300" />
      </View>
      <AccountItemComponent
        title="Mens Grooming"
        subtitle="Start from $200"
        onPress={() => router.push("/screen/user/services/selectServices")}
      />
      <View className="h-[1px] bg-gray-300" />

      <AccountItemComponent
        title="Mens Hair Colouring"
        subtitle="Start from $200"
        onPress={() => router.push("/screen/user/services/selectServices")}
      />
      <View className="h-[1px] bg-gray-300" />
      <AccountItemComponent
        title="Mens Hair Colouring"
        subtitle="Start from $200"
        onPress={() => router.push("/screen/user/services/selectServices")}
      />
      <View className="h-[1px] bg-gray-300" />
    </View>
  );
}
