import { UserRound } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../../components/common/AppBar";
import BottomSheetComponent from "../../../components/common/BottomSheet";
import CalendarComponent from "../../../components/common/Calendar";
import { InputComponent } from "../../../components/common/Input";

export default function SelectDateAndStylish() {
  return (
    <SafeAreaView className="flex-1 ">
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
    </SafeAreaView>
  );
}
