import { router } from "expo-router";
import { Bell, Check, CheckCheck, Trash2, X } from "lucide-react-native";
import {
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// 1. Define the Data
const notificationsData = [
  {
    id: 1,
    title: "Booking Confirmed",
    message: "Your appointment with Josh at Urban Cuts is confirmed.",
    timeLabel: "Today 5 pm",
    timeAgo: "8 days ago",
    isUnread: true,
  },
  {
    id: 2,
    title: "Hey Sfwan , What are you waiting for?",
    message:
      "Your appointment at Natural Unisex Salon & Spa is pending to be confirmed 🎉",
    timeAgo: "8 days ago",
    isUnread: true,
  },
  {
    id: 3,
    title: "Booking Cancelled",
    message: "Your appointment at Urban Cuts has been cancelled.",
    timeAgo: "5 days ago",
    isUnread: false,
  },
  {
    id: 4,
    title: "🎉 New Offer! 50% OFF at Urban Cuts",
    message: "Valid till 30 Sep 2026",
    timeAgo: "2 days ago",
    isUnread: false,
  },
];

export default function NotificationsScreen() {
  return (
    // Use a standard View with flex-1 to take up the whole screen
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* --- HEADER --- */}
      <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
        <Text className="text-2xl font-bold text-black">Notifications</Text>

        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="flex-row items-center gap-1">
            <Trash2 size={18} color="#ef4444" />
            <Text className="text-red-500 font-medium text-sm">Delete All</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-1">
            <CheckCheck size={18} color="#3b82f6" />
            <Text className="text-blue-500 font-medium text-sm">Read All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <X size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* --- LIST --- */}
      {/* We add style={{ flex: 1 }} to guarantee it takes remaining space */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {notificationsData.length === 0 ? (
          <Text className="text-center mt-10 text-gray-500">
            No notifications
          </Text>
        ) : (
          notificationsData.map((item) => (
            <View
              key={item.id}
              className={`flex-row px-5 py-5 border-b border-gray-50 ${item.isUnread ? "bg-blue-50/30" : "bg-white"}`}
            >
              {/* Icon Column */}
              <View className="mr-4 mt-1 relative">
                <Bell size={24} color="#4b5563" strokeWidth={1.5} />
                {item.isUnread && (
                  <View className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border border-white" />
                )}
              </View>

              {/* Content Column - Ensure flex-1 so it takes available width */}
              <View className="flex-1 pr-2">
                <Text className="text-[15px] text-black leading-5">
                  <Text className="font-bold">{item.title} </Text>
                  {item.message}
                </Text>

                {item.timeLabel && (
                  <Text className="text-gray-800 mt-1.5 text-sm">
                    {item.timeLabel}
                  </Text>
                )}

                <Text className="text-gray-400 mt-1 text-sm">
                  {item.timeAgo}
                </Text>
              </View>

              {/* Actions Column */}
              <View className="flex-row items-start gap-4 ml-2 mt-1">
                {item.isUnread ? (
                  <TouchableOpacity>
                    <CheckCheck size={20} color="#60a5fa" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <Check size={20} color="#9ca3af" />
                  </TouchableOpacity>
                )}

                <TouchableOpacity>
                  <Trash2 size={20} color="#f87171" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
