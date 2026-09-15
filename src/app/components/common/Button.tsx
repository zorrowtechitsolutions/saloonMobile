import { Pressable, Text } from "react-native";

export default function ButtonComponent({
  buttonText,
  textColor,
  bgColor,
  boder,
  icon: IconComponent,
}: {
  buttonText?: string;
  textColor?: string;
  bgColor?: string;
  boder?: string;
  icon?: any;
}) {
  return (
    <Pressable
      className={`h-12 flex-1 flex-row items-center justify-center rounded-[10px] border ${boder} ${bgColor}`}
    >
      {IconComponent && (
        <IconComponent
          size={16}
          color={textColor === "text-white" ? "white" : "black"}
        />
      )}

      <Text className={`ml-2 text-[17px] font-semibold ${textColor}`}>
        {buttonText}
      </Text>
    </Pressable>
  );
}
