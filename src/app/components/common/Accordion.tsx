import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Divider } from "@/components/ui/divider";
import { Check, ChevronDown, Plus } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccordionComponent({
  services,
  showAddCheckBox,
  showCheckBox,
}: {
  services: any;
  showAddCheckBox?: boolean;
  showCheckBox?: boolean;
}) {
  const [checked, setChecked] = useState(false);

  const [multipleSelect, setMultipleSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

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
                  <Text className="text-[16px] font-medium text-black">
                    {service?.sub}
                  </Text>

                  {service.time && service.price && (
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
                {!service.time && service?.price && (
                  <Text className="text-[13px] text-gray-500 mt-1">
                    Price ₹{service?.price}
                  </Text>
                )}
                {category?.sub && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setChecked(!checked)}
                    className={`w-6 h-6 rounded-md border items-center justify-center ${
                      checked
                        ? "bg-black border-black"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {checked && (
                      <Check size={15} color="#fff" strokeWidth={3} />
                    )}
                  </TouchableOpacity>
                )}

                {/* check box  */}
                {showCheckBox && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setChecked(!checked)}
                    className={`w-6 h-6 rounded-md border items-center justify-center ${
                      checked
                        ? "bg-black border-black"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {checked && (
                      <Check size={15} color="#fff" strokeWidth={3} />
                    )}
                  </TouchableOpacity>
                )}

                {/* add check box */}
                {showAddCheckBox && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      if (!multipleSelect) {
                        setMultipleSelect(true);
                        setSelectedItems([category.id]);
                        return;
                      }

                      setSelectedItems((prev) =>
                        prev.includes(category.id)
                          ? prev.filter((id) => id !== category.id)
                          : [...prev, category.id],
                      );
                    }}
                    className={`h-6 w-6 items-center justify-center rounded-md border ${
                      selectedItems.includes(category.id)
                        ? "border-black bg-black"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {selectedItems.includes(category.id) ? (
                      <Check size={15} color="#fff" strokeWidth={3} />
                    ) : (
                      <Plus size={15} color="black" strokeWidth={3} />
                    )}
                  </TouchableOpacity>
                )}
                {service?.time && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setChecked(!checked)}
                    className={`w-6 h-6 rounded-md border items-center justify-center ${
                      checked
                        ? "bg-black border-black"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {checked && (
                      <Check size={15} color="#fff" strokeWidth={3} />
                    )}
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
