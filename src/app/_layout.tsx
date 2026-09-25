import "@/global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerProvider } from "./lib/context/global";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DrawerProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </DrawerProvider>
    </GestureHandlerRootView>
  );
}
