// app/notifications.tsx  (or wherever your screen lives)
import { router } from "expo-router";
import { Bell, Check, CheckCheck, Trash2, X } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ---------- TYPES ----------
type NotificationItem = {
  id: number;
  title: string;
  message: string;
  timeLabel?: string;
  timeAgo: string;
  isUnread: boolean;
};

// ---------- DATA ----------
const notificationsData: NotificationItem[] = [
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
    title: "Hey Sfwan, what are you waiting for?",
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

// ---------- SCREEN ----------
export default function NotificationsScreen() {
  const [items, setItems] =
    React.useState<NotificationItem[]>(notificationsData);

  const handleDeleteAll = () => setItems([]);

  const handleMarkAllRead = () =>
    setItems((prev) => prev.map((n) => ({ ...n, isUnread: false })));

  const handleToggleRead = (id: number) =>
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: !n.isUnread } : n)),
    );

  const handleDelete = (id: number) =>
    setItems((prev) => prev.filter((n) => n.id !== id));

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>

        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={handleDeleteAll}
            hitSlop={10}
          >
            <Trash2 size={16} color="#ef4444" />
            <Text style={[styles.actionText, { color: "#ef4444" }]}>
              Delete All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={handleMarkAllRead}
            hitSlop={10}
          >
            <CheckCheck size={16} color="#3b82f6" />
            <Text style={[styles.actionText, { color: "#3b82f6" }]}>
              Read All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
            <X size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {items.length === 0 ? (
          <View style={styles.emptyBox}>
            <Bell size={48} color="#d1d5db" strokeWidth={1.5} />
            <Text style={styles.emptyText}>No notifications</Text>
          </View>
        ) : (
          items.map((item) => (
            <View
              key={item.id}
              style={[styles.row, item.isUnread && styles.rowUnread]}
            >
              {/* Icon */}
              <View style={styles.iconWrap}>
                <Bell size={22} color="#4b5563" strokeWidth={1.5} />
                {item.isUnread && <View style={styles.dot} />}
              </View>

              {/* Content */}
              <View style={styles.content}>
                <Text style={styles.titleText}>
                  <Text style={styles.bold}>{item.title} </Text>
                  {item.message}
                </Text>

                {item.timeLabel ? (
                  <Text style={styles.timeLabel}>{item.timeLabel}</Text>
                ) : null}

                <Text style={styles.timeAgo}>{item.timeAgo}</Text>
              </View>

              {/* Actions */}
              <View style={styles.rowActions}>
                <TouchableOpacity
                  onPress={() => handleToggleRead(item.id)}
                  hitSlop={8}
                  style={{ marginRight: 12 }}
                >
                  {item.isUnread ? (
                    <CheckCheck size={20} color="#60a5fa" />
                  ) : (
                    <Check size={20} color="#9ca3af" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  hitSlop={8}
                >
                  <Trash2 size={20} color="#f87171" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "600",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  emptyBox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  emptyText: {
    marginTop: 12,
    color: "#6b7280",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    backgroundColor: "#ffffff",
  },
  rowUnread: {
    backgroundColor: "#eff6ff",
  },
  iconWrap: {
    marginRight: 12,
    marginTop: 2,
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#3b82f6",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  content: {
    flex: 1,
    paddingRight: 8,
  },
  titleText: {
    fontSize: 15,
    color: "#000",
    lineHeight: 20,
  },
  bold: {
    fontWeight: "700",
  },
  timeLabel: {
    marginTop: 6,
    fontSize: 13,
    color: "#1f2937",
  },
  timeAgo: {
    marginTop: 4,
    fontSize: 12,
    color: "#9ca3af",
  },
  rowActions: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 8,
    marginTop: 2,
  },
});
