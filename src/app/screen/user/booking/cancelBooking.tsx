import { Check } from "lucide-react-native";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import ButtonComponent from "../../../components/common/Button";

export default function CancellationScreen() {
  const [selectedReason, setSelectedReason] = useState(null);
  const [customReason, setCustomReason] = useState("");

  const reasons = [
    { id: 1, label: "Change of plans" },
    {
      id: 2,
      label: "Store requested to cancel and schedule the appointment directly",
    },
    { id: 3, label: "Requested stylist is unavailable" },
    { id: 4, label: "Book by mistake" },
    { id: 5, label: "Others" },
  ];

  const handleSelect = (id: any) => {
    setSelectedReason(id);
  };

  // Helper to check if an "Others" option is currently selected
  const isOthersSelected = selectedReason === 5 || selectedReason === 6;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        className="flex-1 px-5 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text className="text-xl font-medium text-black mb-6">
          Select a reason for cancellation
        </Text>

        {/* Radio Options List */}
        <View className="mb-4">
          {reasons.map((reason) => {
            const isSelected = selectedReason === reason.id;
            return (
              <TouchableOpacity
                key={reason.id}
                activeOpacity={0.7}
                onPress={() => handleSelect(reason.id)}
                className="flex-row items-start mb-5"
              >
                {/* Custom Checkbox */}
                <View
                  className={`w-6 h-6 rounded-md border mr-3 items-center justify-center mt-0.5
                      ${isSelected ? "bg-black border-black" : "bg-transparent border-gray-400"}
                    `}
                >
                  {isSelected && (
                    <Check size={16} color="white" strokeWidth={3} />
                  )}
                </View>

                {/* Label */}
                <Text className="flex-1 text-base text-black leading-6">
                  {reason.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Conditional Text Input (Only shows if 'Others' is selected) */}
        {isOthersSelected && (
          <View className="mt-2 mb-6">
            <TextInput
              className="w-full h-40 border border-gray-300 rounded-2xl p-4 text-base text-black align-top"
              placeholder="Enter a cancellation reason"
              placeholderTextColor="#9CA3AF"
              multiline={true}
              textAlignVertical="top"
              value={customReason}
              onChangeText={setCustomReason}
            />
          </View>
        )}

        <View className="flex-row justify-between px-1 py-4 gap-3">
          <ButtonComponent
            buttonText="No"
            textColor="text-black"
            bgColor="bg-white"
            boder="border-black"
            height="h-12"
          />

          <ButtonComponent
            buttonText="Yes"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-12"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
