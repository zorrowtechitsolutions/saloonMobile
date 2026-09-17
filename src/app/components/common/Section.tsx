import React from "react";
import { Text, View } from "react-native";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionComponet({ title, children }: SectionProps) {
  return (
    <View className="mt-4">
      <Text className="mb-2 px-0.5 text-[13px] font-medium text-black">
        {title}
      </Text>

      <View className="overflow-hidden rounded-[14px] bg-white shadow-sm">
        {children}
      </View>
    </View>
  );
}
