import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import AppBar from "../../../../components/common/AppBar";
import ContactDetails from "./contactDetails";
import IdentityShop from "./identityShop";
import PaymentIntegration from "./paymentIntegration";
import WorkingDaysTime from "./workingDaysTime";

export default function CreateShopScreen() {
  const [step, setStep] = useState(0);

  const steps = [
    <IdentityShop key="identity" />,
    <ContactDetails key="contact" />,
    <WorkingDaysTime key="working-days" />,
    <PaymentIntegration key="payment" />,
  ];

  const isLastStep = step === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      // Submit completed registration
      router.replace("/screen/admin/subscription/subscription"); // change this to your required page
      return;
    }

    setStep((prev) => prev + 1);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FA]">
      <View className="h-full">
        <AppBar title="Create Shop" />

        {/* Current Component */}
        <View className="flex-1">{steps[step]}</View>

        {/* Bottom Button */}
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.85}
          className="absolute bottom-5 left-4 right-4 h-[58px] flex-row items-center justify-center rounded-xl bg-[#111111]"
        >
          <Text className="text-[17px] font-semibold text-white">
            {isLastStep ? "Submit" : "Next"}
          </Text>

          {!isLastStep && (
            <ArrowRight
              size={20}
              color="white"
              strokeWidth={2}
              style={{ marginLeft: 8 }}
            />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
