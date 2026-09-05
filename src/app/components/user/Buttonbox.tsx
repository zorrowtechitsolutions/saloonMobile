import { MapPin } from "lucide-react-native";
import { Text, View } from "react-native";
import ButtonComponent from "../common/Button";

export default function ButtonBox({
  offerShown,
  primaryButtonText,
  secondaryButtonText,
  shopName,
  shopDistance,
}: {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  offerShown?: boolean;
  shopName?: string;
  shopDistance?: string;
}) {
  return (
    <View className="mt-4 flex-row gap-2">
      {offerShown ? (
        <View className="h-12 flex-1 items-center justify-center ">
          <View className="mr-2 flex-row items-center ">
            <Text className="ml-1 text-[15px] font-bold text-gray-600">
              {shopName}
            </Text>
          </View>

          <View className="flex-row items-center rounded-md bg-gray-100 px-2 py-1">
            <MapPin size={13} color="#777" />

            <Text className="ml-1 text-[12px] text-gray-600">
              {shopDistance}
            </Text>
          </View>
        </View>
      ) : (
        <ButtonComponent
          buttonText={primaryButtonText}
          textColor="text-black"
          bgColor="bg-white"
        />
      )}

      <ButtonComponent
        buttonText={secondaryButtonText}
        textColor="text-white"
        bgColor="bg-black"
      />
    </View>
  );
}
