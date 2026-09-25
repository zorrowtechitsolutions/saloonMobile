import { router } from "expo-router";
import { ChevronLeft, Search, X } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { InputComponent } from "./Input";

interface AppBarProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
  searchShow?: boolean;
}

export default function AppBar({
  title,
  showBack = true,
  rightComponent,
  searchShow = false,
}: AppBarProps) {
  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <View className="h-16 w-full flex-row items-center px-4">
      {openSearchBox === false ? (
        <>
          {/* Left */}
          <View className="w-12 items-start justify-center">
            {showBack && (
              <Pressable
                onPress={() => router.back()}
                className="h-10 w-10 items-center justify-center rounded-full"
              >
                <ChevronLeft size={28} color="#111827" strokeWidth={2.2} />
              </Pressable>
            )}
          </View>

          {/* Center */}
          <View className="flex-1 items-center justify-center">
            <Text className="text-xl font-bold text-gray-900">{title}</Text>
          </View>

          {/* Right */}
          <View className="flex-row items-center justify-end gap-2">
            {rightComponent}

            {searchShow && (
              <Pressable
                className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
                onPress={() => setOpenSearchBox(true)}
              >
                <Search size={24} color="black" strokeWidth={2.2} />
              </Pressable>
            )}
          </View>
        </>
      ) : (
        /* Search mode */
        <View className="flex-1 flex-row items-center gap-2">
          <View className="flex-1">
            <InputComponent icon={Search} placeholderText="Search" />
          </View>

          <Pressable
            className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
            onPress={() => setOpenSearchBox(false)}
          >
            <X size={24} color="black" strokeWidth={2.2} />
          </Pressable>
        </View>
      )}
    </View>
  );
}
