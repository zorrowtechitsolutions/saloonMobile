import { Search, SlidersHorizontal } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import BottomSheetComponent from "../components/common/BottomSheet";
import HomeHeader from "../components/common/Header";
import { InputComponent } from "../components/common/Input";
import { TabsComponent } from "../components/common/Tabs";
import { useDrawer } from "../lib/context/global";

export default function Index() {
  const { openSheet } = useDrawer();
  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView
        className="p-2"
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <View className="flex-row w-full items-center gap-3 justify-center">
          <InputComponent
            icon={Search}
            placeholderText="Search"
            flex="flex-1"
          />

          <Pressable
            className="w-10 h-10 items-center justify-center"
            onPress={() => openSheet()}
          >
            <SlidersHorizontal size={27} color="#222" />
          </Pressable>
        </View>

        <TabsComponent
          tabs={["Men", "Women"]}
          showCarousel={true}
          showCard={true}
        />

        <BottomSheetComponent headingText="Filter" bottomSheetView={"Filter"} />
      </ScrollView>
    </SafeAreaView>
  );
}
