import { ScrollView, Text, View } from "react-native";

import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { router } from "expo-router";
import {
  Bell,
  BriefcaseBusiness,
  CircleHelp,
  Coins,
  CreditCard,
  FileText,
  Gift,
  Globe,
  Heart,
  MapPin,
  Pencil,
  Settings,
  ShieldCheck,
  Store,
  UserRound,
  WalletCards,
} from "lucide-react-native";
import AccountItemComponent from "../components/common/AccountItem";
import ButtonComponent from "../components/common/Button";
import SectionComponet from "../components/common/Section";
import SegmentedControlComponet from "../components/common/SegmentedControl";

export default function Profile() {
  return (
    <View className="flex-1 bg-[#FCFBF7]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 38,
          paddingBottom: 80,
          flexGrow: 1,
        }}
      >
        {/* Header */}
        <Text className="mb-5 mt-5 text-[16px] font-semibold text-black">
          Account
        </Text>

        {/* Profile Card */}
        <View className="flex-row items-center rounded-[15px] bg-white px-3.5 py-3 shadow-sm">
          <Avatar>
            <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>

          <View className="ml-2.5 flex-1">
            <Text className="text-[15px] font-semibold text-black">Emma</Text>
            <Text className="mt-0.5 text-[9px] text-black">+91 39860843</Text>
          </View>

          <ButtonComponent
            buttonText="Edit Profile"
            textColor="text-black"
            bgColor="bg-white"
            boder="border-black"
            icon={Pencil}
            height="h-9"
          />
        </View>

        {/* Switch Mode — wrapped in fixed-height container so it can't push siblings off-screen */}
        <View className="rounded-[20px] mt-4 bg-white px-6 py-6 shadow-sm">
          <View className="mb-6">
            <Text className="mt-3 text-[13px] font-medium text-black">
              Switch Mode
            </Text>
            <Text className="mt-1 leading-5 text-gray-400">
              Choose how you want to use the app
            </Text>
          </View>

          <View style={{ minHeight: 44 }}>
            <SegmentedControlComponet
              segmented={["User", "Freelancer", "Shop"]}
            />
          </View>
        </View>

        {/* Grow With Us */}
        <SectionComponet title="Grow With Us">
          <AccountItemComponent
            icon={<UserRound size={19} color="#111" strokeWidth={1.5} />}
            title="Create Professional Profile"
            subtitle="Showcase Your Skills and get discovered by customers"
            onPress={() => router.push("/screen/user/Professional")}
          />
          <AccountItemComponent
            icon={
              <BriefcaseBusiness size={19} color="#111" strokeWidth={1.5} />
            }
            title="Create Freelance"
            subtitle="Create Your Freelance"
          />
          <AccountItemComponent
            icon={<Store size={19} color="#111" strokeWidth={1.5} />}
            title="Create a Shop"
            subtitle="List your salon, and manage booking staff & services"
          />
        </SectionComponet>

        {/* My Account */}
        <SectionComponet title="My Account">
          <AccountItemComponent
            icon={<Heart size={19} color="#111" strokeWidth={1.5} />}
            title="My Favorites"
            subtitle="View saved stylists and shops"
            onPress={() => router.push("/screen/user/Wishlist")}
          />
        </SectionComponet>

        {/* Rewards & Wallet */}
        <SectionComponet title="Rewards & Wallet">
          <AccountItemComponent
            icon={<WalletCards size={19} color="#111" strokeWidth={1.5} />}
            title="My Wallet"
          />
          <AccountItemComponent
            icon={<Gift size={19} color="#111" strokeWidth={1.5} />}
            title="Refer & Earn"
          />
          <AccountItemComponent
            icon={<Coins size={19} color="#111" strokeWidth={1.5} />}
            title="Coin"
          />
        </SectionComponet>

        {/* Account */}
        <SectionComponet title="Account">
          <AccountItemComponent
            icon={<UserRound size={19} color="#111" strokeWidth={1.5} />}
            title="Personal Information"
          />
          <AccountItemComponent
            icon={<MapPin size={19} color="#111" strokeWidth={1.5} />}
            title="Saved Adress"
          />
          <AccountItemComponent
            icon={<CreditCard size={19} color="#111" strokeWidth={1.5} />}
            title="Payment Method"
          />
        </SectionComponet>

        {/* Preferences */}
        <SectionComponet title="Preferences">
          <AccountItemComponent
            icon={<Bell size={19} color="#111" strokeWidth={1.5} />}
            title="Notification"
          />
          <AccountItemComponent
            icon={<Globe size={19} color="#111" strokeWidth={1.5} />}
            title="Language"
          />
          <AccountItemComponent
            icon={<Settings size={19} color="#111" strokeWidth={1.5} />}
            title="App Settings"
          />
        </SectionComponet>

        {/* Help */}
        <SectionComponet title="Help">
          <AccountItemComponent
            icon={<CircleHelp size={19} color="#111" strokeWidth={1.5} />}
            title="Help & Support"
          />
          <AccountItemComponent
            icon={<FileText size={19} color="#111" strokeWidth={1.5} />}
            title="Terms & Conditions"
          />
          <AccountItemComponent
            icon={<ShieldCheck size={19} color="#111" strokeWidth={1.5} />}
            title="Privacy & Security"
          />
        </SectionComponet>

        {/* Logout */}
        <View className="mt-4 mb-6">
          <ButtonComponent
            buttonText="Log Out"
            textColor="text-[#C96D67]"
            bgColor="bg-white"
            boder="border-[#B66C65]"
            height="h-12"
          />
        </View>
      </ScrollView>
    </View>
  );
}
