import { Check } from "lucide-react-native";
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

export default function SubscriptionScreen() {
  const [isChecked, setIsChecked] = useState(false);

  // Feature list data
  const features = [
    "Full access",
    "Unlimited bookings",
    "Up to 5 staff members",
    "Basic analytics dashboard",
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pt-6">
      <StatusBar barStyle="dark-content" />

      <ScrollView className=" px-5" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="mt-4 mb-6">
          <Text className="text-2xl font-bold text-black">Your Plan</Text>
          <Text className="text-gray-500 text-base mt-1">
            Start with 1 month
          </Text>
        </View>

        {/* Plan Card */}
        <View className="border-2 border-green-600 rounded-2xl p-5 mb-6 bg-white">
          {/* Card Header */}
          <View className="flex-row justify-between items-start mb-1">
            <Text className="text-2xl font-bold text-black">1 Month Plan</Text>
            {/* Custom Radio Button (Selected) */}
            <View className="w-6 h-6 rounded-full border-2 border-green-600 items-center justify-center">
              <View className="w-3 h-3 bg-green-600 rounded-full" />
            </View>
          </View>

          <Text className="text-gray-500 text-sm mb-6">
            Try all features for 30 days
          </Text>

          {/* Features List */}
          <View className="mb-2">
            {features.map((feature, index) => (
              <View key={index} className="flex-row items-center mb-3">
                <Check size={18} color="#6B7280" strokeWidth={2} />
                <Text className="text-gray-700 text-base ml-3">{feature}</Text>
              </View>
            ))}
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-gray-200 w-full my-4" />

          {/* Price Row */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-gray-500 text-base">30 days</Text>
            <Text className="text-xl font-bold text-black">₹49/month</Text>
          </View>

          {/* Subscribe Button */}

          <ButtonComponent
            buttonText="Subscribe"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-12"
          />
        </View>

        {/* Footer / Terms Section */}
        <View className="bg-gray-50 rounded-xl p-4 flex-row items-start mb-10">
          <Text className="text-gray-600 text-sm leading-5 flex-1 mr-3">
            By subscribing, you agree to our{" "}
            <Text className="text-yellow-600 underline">
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text className="text-yellow-600 underline">Privacy Policy</Text>.
            Payments are processed via UPI (GPay, PhonePe, Paytm, or any UPI
            app)
          </Text>

          {/* Custom Checkbox */}
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            activeOpacity={0.7}
            className={`w-6 h-6 rounded-md border items-center justify-center mt-1
              ${isChecked ? "bg-green-600 border-green-600" : "border-gray-400 bg-transparent"}
            `}
          >
            {isChecked && <Check size={16} color="white" strokeWidth={3} />}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
