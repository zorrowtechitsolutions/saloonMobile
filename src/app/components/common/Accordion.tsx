import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Divider } from "@/components/ui/divider";
import { ChevronDown, Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccordionComponent({ services }: any) {
  return (
    <Accordion
      type="single"
      isCollapsible={true}
      isDisabled={false}
      className="w-full"
    >
      {services.map((category: any) => (
        <AccordionItem key={category.id} value={`category-${category.id}`}>
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }: any) => (
                <View className="flex-row items-center justify-between w-full">
                  <AccordionTitleText className="text-[16px]">
                    {category.name}
                  </AccordionTitleText>

                  <ChevronDown size={20} color="#000000" strokeWidth={2} />
                </View>
              )}
            </AccordionTrigger>
          </AccordionHeader>

          <AccordionContent>
            {category?.services?.map((service: any) => (
              <View
                key={service.id ?? service.name}
                className="flex-row items-center justify-between p-4 w-full"
              >
                <View className="flex-1">
                  <Text className="text-[18px] font-medium text-black">
                    {service.name}
                  </Text>

                  {service.time && (
                    <>
                      <Text className="text-[13px] text-gray-400 mt-1">
                        {service.time}
                      </Text>

                      <Text className="text-[13px] text-gray-500 mt-1">
                        Price ₹{service.price}
                      </Text>
                    </>
                  )}
                </View>

                {!service.time && (
                  <Text className="text-[13px] text-gray-500 mt-1">
                    Price ₹{service.price}
                  </Text>
                )}

                {service.time && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-10 h-10 border border-gray-400 rounded-xl items-center justify-center"
                  >
                    <Plus size={18} color="#6B7280" strokeWidth={1.5} />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </AccordionContent>
          <Divider className="bg-border" />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
