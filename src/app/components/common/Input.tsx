import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { useDrawer } from "../../../app/lib/context/global";

export function InputComponent({
  icon,

  placeholderText,
  editable = true,
  dropdown = false,
}: {
  icon: any;
  placeholderText: string;
  editable?: boolean;
  dropdown?: boolean;
}) {
  const { openSheet, dropDownShow, setDropDownShow } = useDrawer();
  return (
    <View className="mx-3">
      <Input className="my-2 h-14 w-full rounded-2xl border-2 bg-muted px-3">
        <InputSlot className="pl-1">
          <InputIcon as={icon} size="md" className="text-black" />
        </InputSlot>

        <InputField
          placeholder={placeholderText}
          className="ml-2 flex-1 text-base text-foreground"
          placeholderTextColor="#9CA3AF"
          editable={editable}
        />

        {dropdown && (
          <InputSlot className="pr-1">
            <Pressable
              onPress={() => {
                const nextValue = !dropDownShow;

                setDropDownShow?.(nextValue);

                if (nextValue) {
                  openSheet();
                }
              }}
            >
              <InputIcon
                as={dropDownShow ? ChevronUp : ChevronDown}
                size="md"
                className="text-black"
              />
            </Pressable>
          </InputSlot>
        )}
      </Input>
    </View>
  );
}
