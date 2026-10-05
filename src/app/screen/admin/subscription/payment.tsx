import { Landmark, Lock } from "lucide-react-native";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ButtonComponent from "../../../components/common/Button";

export default function PaymentScreen() {
  const [selectedApp, setSelectedApp] = useState("googlepay");

  // Data for the payment options
  const paymentOptions = [
    {
      id: "googlepay",
      name: "Google Pay",
      subtitle: "Fastest way to pay with UPI",
      icon: <Text className="text-[#4285F4] font-bold text-xl">G</Text>,
      iconBg: "bg-white border border-gray-100",
    },
    {
      id: "phonepe",
      name: "PhonePe",
      subtitle: "Pay using PhonePe wallet or UPI",
      icon: <Text className="text-white font-bold text-lg">पे</Text>,
      iconBg: "bg-[#5f259f]",
    },
    {
      id: "paytm",
      name: "Paytm",
      subtitle: "Pay with Paytm wallet or UPI",
      icon: <Text className="text-[#00B9F1] font-bold text-xs">Paytm</Text>,
      iconBg: "bg-white border border-gray-100",
    },
    {
      id: "bhim",
      name: "BHIM / Other UPI apps",
      subtitle: "Choose from any UPI app on your device",
      icon: <Landmark size={20} color="#4B5563" />,
      iconBg: "bg-gray-200",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-6">
      <StatusBar barStyle="dark-content" />

      <ScrollView className=" px-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mt-4 mb-8 items-center">
          <Text className="text-2xl font-bold text-black text-center mb-1">
            Choose payment app
          </Text>
          <Text className="text-gray-500 text-sm text-center">
            You'll be redirected to complete the payment
          </Text>
        </View>

        {/* Order Summary Card */}
        <View className="bg-[#F9F9F9] rounded-2xl p-5 mb-8">
          {/* Top Row */}
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-base font-bold text-gray-900 mb-0.5">
                1 Month Plan
              </Text>
              <Text className="text-gray-500 text-xs">
                Urban Cuts • Kochi Salon Pass
              </Text>
            </View>
            <Text className="text-xl font-bold text-black">₹49</Text>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-gray-200 w-full mb-4" />

          {/* Bottom Row */}
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-600 text-sm">Total payable</Text>
            <Text className="text-lg font-bold text-black">₹49</Text>
          </View>
        </View>

        {/* Section Title */}
        <Text className="text-xs font-semibold text-gray-500 tracking-wider mb-4">
          SELECT UPI APP
        </Text>

        {/* Payment Options List */}
        <View className="mb-6">
          {paymentOptions.map((app) => {
            const isSelected = selectedApp === app.id;
            return (
              <TouchableOpacity
                key={app.id}
                activeOpacity={0.8}
                onPress={() => setSelectedApp(app.id)}
                className={`flex-row items-center p-4 rounded-2xl mb-3 border 
                  ${isSelected ? "border-black border-2 bg-white" : "border-gray-200 bg-white"}`}
              >
                {/* App Icon Placeholder */}
                <View
                  className={`w-12 h-12 rounded-xl items-center justify-center mr-4 ${app.iconBg}`}
                >
                  {app.icon}
                </View>

                {/* App Details */}
                <View className="flex-1 pr-2">
                  <Text className="text-base font-semibold text-gray-900 mb-0.5">
                    {app.name}
                  </Text>
                  <Text className="text-gray-500 text-xs leading-4">
                    {app.subtitle}
                  </Text>
                </View>

                {/* Custom Radio Button */}
                <View
                  className={`w-6 h-6 rounded-full border items-center justify-center
                    ${isSelected ? "border-black bg-black" : "border-transparent bg-gray-200"}`}
                >
                  {/* Inner white dot for selected state */}
                  {isSelected && (
                    <View className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Security Note Box */}
        <View className="bg-[#FFF8E7] rounded-xl p-4 flex-row items-start mb-8 gap-2">
          <Lock size={18} color="#8B6B1E" className="mt-0.5 mr-3" />
          <Text className="text-[#8B6B1E] text-xs leading-5 flex-1">
            Your payment is processed securely via RBI-regulated UPI. We never
            store your UPI PIN or banking credentials.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="mb-10 flex-col gap-4">
          <ButtonComponent
            buttonText="Continue With Google Pay"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-12"
          />

          <ButtonComponent
            buttonText="Cancel"
            textColor="text-black"
            bgColor="bg-white"
            boder="border-black"
            height="h-12"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
