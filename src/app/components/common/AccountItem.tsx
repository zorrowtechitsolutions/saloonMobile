import { ChevronRight } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

type AccountItemProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export default function AccountItemComponent({
  icon,
  title,
  subtitle,
  onPress,
}: AccountItemProps) {
  return (
    <>
      <Pressable
        onPress={onPress}
        className={`flex-row items-center px-4 py-3.5 ${icon && "bg-white border-b border-gray-100 "}`}
      >
        {/* Icon */}
        {icon && (
          <View className="w-7 items-center justify-center">{icon}</View>
        )}

        {/* Text */}
        <View className="flex-1 ml-4">
          <Text className="text-[13px] font-medium text-black">{title}</Text>

          {subtitle && (
            <Text className="mt-0.5 text-[9px] leading-[12px] text-gray-500">
              {subtitle}
            </Text>
          )}
        </View>

        <ChevronRight size={20} color="#111" strokeWidth={1.5} />
      </Pressable>
    </>
  );
}
