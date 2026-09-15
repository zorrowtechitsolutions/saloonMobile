import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import {
    ChevronRight,
    Eye,
    Pencil,
    Plus,
    Scissors,
    Star,
    Store,
    UserRound,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/common/AppBar";
import ButtonComponent from "../../components/common/Button";

type AccountItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

function AccountItem({ icon, title, subtitle, onPress }: AccountItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-4 py-3.5 bg-white border-b border-gray-100"
    >
      {/* Icon */}
      <View className="w-7 items-center justify-center">{icon}</View>

      {/* Text */}
      <View className="flex-1 ml-4">
        <Text className="text-[13px] font-medium text-black">{title}</Text>

        {subtitle && (
          <Text className="mt-0.5 text-[9px] leading-[12px] text-gray-500">
            {subtitle}
          </Text>
        )}
      </View>

      <ChevronRight size={20} color="#111" strokeWidth={1.5} />
    </Pressable>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <View className="mt-4">
      <Text className="mb-2 px-0.5 text-[13px] font-medium text-black">
        {title}
      </Text>

      <View className="overflow-hidden rounded-[14px] bg-white shadow-sm">
        {children}
      </View>
    </View>
  );
}

export default function ProfessionalScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FCFBF7]">
      <AppBar title="Professional Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 38,
          paddingBottom: 150,
        }}
      >
        {/* Profile Card */}
        <View className="rounded-[20px] bg-white px-4 py-4 shadow-sm">
          {/* Profile information */}
          <View className="flex-row items-center">
            {/* Profile image */}
            <Avatar>
              <AvatarFallbackText>Emma</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                }}
              />
            </Avatar>

            {/* User information */}
            <View className="ml-3 flex-1">
              <Text className="text-[20px] font-bold text-black">Emma</Text>

              <View className="mt-0.5 flex-row items-center">
                <Icon as={Star} size="xs" className="mr-1 text-yellow-500" />

                <Text className="text-[12px] text-gray-500">
                  4.7 · 32 Reviews
                </Text>
              </View>

              <Text className="mt-1 text-[12px] font-medium text-black">
                Professional Stylist
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View className="my-4 h-[1px] bg-gray-200" />

          {/* Buttons */}
          <View className="flex-row gap-4">
            {/* Edit Profile */}

            <ButtonComponent
              buttonText="Edit Profile"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              icon={Pencil}
            />
            {/* View Profile */}

            <ButtonComponent
              buttonText="View Profile"
              textColor="text-bg"
              bgColor="bg-white"
              boder="border-black"
              icon={Eye}
            />
          </View>
        </View>

        {/* ================= ABOUT ================= */}
        <View className="my-7">
          <Text className="mb-4 text-[22px] font-bold text-black">About</Text>

          <View className="rounded-[20px] bg-white px-6 py-6 shadow-sm">
            <Text className="text-[14px] leading-5 text-gray-400">
              Add a short introduction about yourself,
              {"\n"}
              experience, and your styling expertise.
            </Text>

            <View className="mt-6 flex-row items-center">
              <Plus size={25} color="black" />

              <Text className="ml-2 text-[18px] font-semibold text-black">
                Add About
              </Text>
            </View>
          </View>
        </View>

        {/* ================= WORK EXPERIENCE ================= */}
        <View className="mb-7">
          {/* Header */}
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-[22px] font-bold text-black">
              Work Experience
            </Text>

            <View className="flex-row items-center">
              <Plus size={22} color="black" />

              <Text className="ml-2 text-[16px] font-medium text-black">
                Add
              </Text>
            </View>
          </View>

          {/* Empty Card */}
          <View className="rounded-[20px] bg-white px-6 py-6 shadow-sm">
            <View className="items-center mb-6">
              <UserRound size={30} color="black" />

              <Text className="mt-3 text-center text-[18px] font-bold text-black">
                Build your professional experience
              </Text>

              <Text className="mt-1 text-center text-[14px] leading-5 text-gray-400">
                Add your previous workplaces and roles to
                {"\n"}
                showcase your career journey.
              </Text>
            </View>

            {/* Button */}

            <ButtonComponent
              buttonText="Add Work Experience"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              icon={Plus}
            />
          </View>
        </View>

        {/* ================= SERVICE & PRICING ================= */}
        <View className="mb-7">
          {/* Header */}
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-[22px] font-bold text-black">
              Service & Pricing
            </Text>

            <View className="flex-row items-center">
              <Plus size={22} color="black" />

              <Text className="ml-2 text-[16px] font-medium text-black">
                Add Service
              </Text>
            </View>
          </View>

          {/* Empty Card */}
          <View className="rounded-[20px] bg-white px-6 py-6 shadow-sm">
            <View className="items-center mb-6 ">
              <Scissors size={32} color="black" />

              <Text className="mt-3 text-center text-[18px] font-bold text-black">
                Add your services
              </Text>

              <Text className="mt-1 text-center text-[14px] leading-5 text-gray-400">
                Add the services you offer, along with
                {"\n"}
                pricing and duration.
              </Text>
            </View>

            {/* Button */}

            <ButtonComponent
              buttonText="Add Service"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              icon={Plus}
            />
          </View>
        </View>

        {/* ================= CURRENT WORKPLACE ================= */}
        <View>
          {/* Header */}
          <Text className="mb-4 text-[22px] font-bold text-black">
            Current Workplace
          </Text>

          {/* Empty Card */}
          <View className="rounded-[20px] bg-white px-6 py-6 shadow-sm">
            <View className="items-center mb-6">
              <Store size={30} color="black" />

              <Text className="mt-3 text-center text-[18px] font-bold text-black">
                No workplace added
              </Text>

              <Text className="mt-1 text-center text-[14px] leading-5 text-gray-400">
                Connect your professional profile with a{"\n"}
                salon or add your workplace details.
              </Text>
            </View>

            {/* Button */}

            <ButtonComponent
              buttonText="Add Work Workplace"
              textColor="text-white"
              bgColor="bg-black"
              boder="border-black"
              icon={Plus}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
