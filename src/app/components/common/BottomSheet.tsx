import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { Pressable, Text, View } from "react-native";

import { Search, X } from "lucide-react-native";
import { useDrawer } from "../../../app/lib/context/global";
import StylishList from "../../screen/user/booking/stylishList";
import { InputComponent } from "./Input";

export default function BottomSheetComponent({
  headingText,
}: {
  headingText: string;
}) {
  const { sheetRef, setDropDownShow } = useDrawer();

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={["25%", "50%", "90%"]}
        enablePanDownToClose
        onChange={(index) => {
          if (index === -1) {
            setDropDownShow(false);
          }
        }}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: 24,
            alignItems: "center",
          }}
        >
          <View className=" w-full flex-row items-center justify-between">
            <Text className="text-[16px]">{headingText}</Text>

            <Pressable
              className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
              onPress={() => {
                sheetRef.current?.close();
                setDropDownShow(false);
              }}
            >
              <X size={24} color="black" strokeWidth={2.2} />
            </Pressable>
          </View>

          <View className="mt-7 w-full h-full">
            <InputComponent icon={Search} placeholderText="Search" />
            <StylishList />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
