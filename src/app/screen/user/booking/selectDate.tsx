import { UserRound } from "lucide-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../../../app/components/common/Button";
import AppBar from "../../../components/common/AppBar";
import BottomSheetComponent from "../../../components/common/BottomSheet";
import CalendarComponent from "../../../components/common/Calendar";
import { InputComponent } from "../../../components/common/Input";

export default function SelectDateAndStylish() {
  return (
    <SafeAreaView className="flex-1 ">
      <View className=" w-full h-full">
        <AppBar title="Select Date" />
        <InputComponent
          icon={UserRound}
          placeholderText="Select professional"
          editable={false}
          dropdown={true}
        />

        <View className="p-3 flex gap-3">
          <CalendarComponent />
        </View>

        <BottomSheetComponent headingText="Choose Professionals" />

        <View className="flex-row items-center justify-between p-4  w-full absolute bottom-0">
          {/* Left Side: Text Information */}
          <View className="flex-1">
            {/* Title */}
            <Text className="text-[18px] font-medium text-black leading-tight">
              ₹ 400
            </Text>

            {/* Duration */}
            <Text className="text-[13px] text-gray-400 mt-1">
              1 service 15 Mints
            </Text>
          </View>

          {/* Right Side: Add Button */}
          <ButtonComponent
            buttonText="Confirm Booking"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-12"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
