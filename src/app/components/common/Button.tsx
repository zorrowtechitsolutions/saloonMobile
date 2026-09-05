import { Pressable, Text } from "react-native";

export default function ButtonComponent({
  buttonText,
  textColor,
  bgColor,
}: {
  buttonText?: string;
  textColor?: string;
  bgColor?: string;
}) {
  return (
    <Pressable
      className={`h-12 flex-1 items-center justify-center rounded-[10px] ${bgColor}`}
    >
      <Text className={`text-[17px] font-semibold ${textColor}`}>
        {buttonText}
      </Text>
    </Pressable>
  );
}
