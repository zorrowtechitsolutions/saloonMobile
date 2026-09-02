import { SafeAreaView, ScrollView } from "react-native";
import HomeHeader from "../components/common/Header";
import { InputComponent } from "../components/common/Input";
import { TabsComponent } from "../components/common/Tabs";

export default function Index() {
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
        <InputComponent />
        <TabsComponent />
      </ScrollView>
    </SafeAreaView>
  );
}
