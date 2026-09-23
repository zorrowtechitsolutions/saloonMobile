import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccordionComponent() {
  return (
    <Accordion
      type="single"
      isCollapsible={true}
      isDisabled={false}
      className=" w-[100%]"
    >
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: any) => {
              return (
                <>
                  <AccordionTitleText className="text-[18px]">
                    Mens Grooming
                  </AccordionTitleText>

                  <AccordionIcon as={ChevronDownIcon} />
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            <View className="flex-row items-center justify-between p-4  w-full ">
              {/* Left Side: Text Information */}
              <View className="flex-1">
                {/* Title */}
                <Text className="text-[18px] font-medium text-black leading-tight">
                  Beard Styling
                </Text>

                {/* Duration */}
                <Text className="text-[13px] text-gray-400 mt-1">15 Mints</Text>

                {/* Price */}
                <Text className="text-[13px] text-gray-500 mt-1">
                  Price ₹400
                </Text>
              </View>

              {/* Right Side: Add Button */}
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-10 h-10 border border-gray-400 rounded-xl items-center justify-center"
              >
                <Plus size={18} color="#6B7280" strokeWidth={1.5} />
              </TouchableOpacity>
            </View>
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider className="bg-border" />
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: any) => {
              return (
                <>
                  <AccordionTitleText className="text-[18px]">
                    Girls Grooming
                  </AccordionTitleText>
                  <AccordionIcon as={ChevronDownIcon} />
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            <View className="flex-row items-center justify-between p-4  w-full">
              {/* Left Side: Text Information */}
              <View className="flex-1">
                {/* Title */}
                <Text className="text-[18px] font-medium text-black leading-tight">
                  Beard Styling
                </Text>

                {/* Duration */}
                <Text className="text-[13px] text-gray-400 mt-1">15 Mints</Text>

                {/* Price */}
                <Text className="text-[13px] text-gray-500 mt-1">
                  Price ₹400
                </Text>
              </View>

              {/* Right Side: Add Button */}
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-10 h-10 border border-gray-400 rounded-xl items-center justify-center"
              >
                <Plus size={18} color="#6B7280" strokeWidth={1.5} />
              </TouchableOpacity>
            </View>
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
