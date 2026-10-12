import { router } from "expo-router";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  IndianRupee,
  Scissors,
  Settings,
  Star,
  User,
  Users,
} from "lucide-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "../components/common/Header";

// --- Types & Interfaces ---
interface ColorsType {
  background: string;
  white: string;
  textPrimary: string;
  textSecondary: string;
  primary: string;
  darkBar: string;
  successBg: string;
  successText: string;
  warningBg: string;
  warningText: string;
  border: string;
  yellowTagBg: string;
  yellowTagText: string;
}

interface SectionHeaderProps {
  title: string;
  actionText?: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext: string;
  badgeText?: string;
  badgeType?: "success" | "warning";
}

interface ProgressBarProps {
  label: string;
  count: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

interface BookingItemProps {
  time: string;
  service: string;
  price: string;
  status: string;
  staff: string;
  client: string;
}

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

// --- Constants ---
const COLORS: ColorsType = {
  background: "#F8F9FA",
  white: "#FFFFFF",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  primary: "#D4A017", // Gold/Mustard color from charts
  darkBar: "#1A1A1A", // Black bar
  successBg: "#DCFCE7",
  successText: "#166534",
  warningBg: "#FEF3C7",
  warningText: "#92400E",
  border: "#E5E7EB",
  yellowTagBg: "#FEF9C3",
  yellowTagText: "#854D0E",
};

// --- Reusable Components ---

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, actionText }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {actionText && (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.sectionAction}>{actionText}</Text>
        {actionText.includes("See All") && (
          <ChevronRight size={16} color={COLORS.textPrimary} />
        )}
      </TouchableOpacity>
    )}
  </View>
);

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subtext,
  badgeText,
  badgeType,
}) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.cardContent}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle}>{title}</Text>
          {badgeText && (
            <View
              style={[
                styles.badge,
                badgeType === "success"
                  ? styles.badgeSuccess
                  : styles.badgeWarning,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  badgeType === "success"
                    ? styles.badgeTextSuccess
                    : styles.badgeTextWarning,
                ]}
              >
                {badgeText}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.valueRow}>
          <Text style={styles.cardValue}>{value}</Text>
        </View>
        {subtext ? <Text style={styles.cardSubtext}>{subtext}</Text> : null}
      </View>
    </View>
  </View>
);

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  count,
  percentage,
  icon,
  color,
}) => (
  <View style={styles.progressContainer}>
    <View style={styles.progressHeader}>
      <View style={styles.row}>
        <View style={{ marginRight: 8 }}>{icon}</View>
        <Text style={styles.progressLabel}>{label}</Text>
      </View>
      <Text style={styles.progressValue}>
        {count} bookings ({percentage}%)
      </Text>
    </View>
    <View style={styles.progressBarBg}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${percentage}%`, backgroundColor: color },
        ]}
      />
    </View>
  </View>
);

const BookingItem: React.FC<BookingItemProps> = ({
  time,
  service,
  price,
  status,
  staff,
  client,
}) => (
  <View style={styles.bookingCard}>
    <View style={styles.bookingLeft}>
      <Text style={styles.bookingTime}>{time}</Text>
      <Text style={styles.bookingStatus}>{status}</Text>
    </View>
    <View style={styles.bookingMiddle}>
      <View style={styles.row}>
        <Text style={styles.bookingService}>{service}</Text>
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
      <Text style={styles.bookingDetails}>
        {staff} • {client}
      </Text>
    </View>
    <TouchableOpacity style={styles.viewButton}>
      <Text style={styles.viewButtonText}>View</Text>
    </TouchableOpacity>
  </View>
);

const QuickAction: React.FC<QuickActionProps> = ({ icon, title, subtitle }) => (
  <TouchableOpacity style={styles.actionCard}>
    <View style={styles.actionIconContainer}>{icon}</View>
    <View style={styles.actionTextContainer}>
      <Text style={styles.actionTitle}>{title}</Text>
      <Text style={styles.actionSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

// --- Main App ---

export default function Index(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader showLocation={false} />
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>👋 Welcome back, Sir!</Text>
          <View style={styles.headerSubRow}>
            <Text style={styles.shopName}>Urban Cuts</Text>
            <Text style={styles.dot}>•</Text>
            <Star
              size={12}
              color={COLORS.textPrimary}
              fill={COLORS.textPrimary}
            />
            <Text style={styles.ratingText}> 4.7</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.reviewCount}>124 Reviews</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() =>
            router.push("/screen/admin/shop/profile/profileDetails")
          }
        >
          <User size={20} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Today's Overview */}
        <View style={styles.liveStatusRow}>
          <Text style={styles.sectionTitle}>Today's Overview</Text>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>Live Status</Text>
          </View>
        </View>

        <StatCard
          icon={<Calendar size={20} color={COLORS.textPrimary} />}
          title="Bookings"
          value="12"
          subtext="8% vs yesterday"
          badgeText="8%"
          badgeType="success"
        />
        <StatCard
          icon={<IndianRupee size={20} color={COLORS.textPrimary} />}
          title="Revenue"
          value="₹ 4,500"
          subtext="12% Today"
          badgeText="12%"
          badgeType="success"
        />
        <StatCard
          icon={<Star size={20} color={COLORS.textPrimary} />}
          title="Rating"
          value="4.7"
          subtext="124 Reviews"
          badgeText="Top Tier"
          badgeType="warning"
        />
        <StatCard
          icon={<Users size={20} color={COLORS.textPrimary} />}
          title="Staff"
          value="6"
          subtext=""
          badgeText="Total"
          badgeType="warning"
        />

        {/* Booking Sources */}
        <SectionHeader title="Booking Sources" />
        <View style={styles.card}>
          <ProgressBar
            label="Via Shop Profile"
            count="8"
            percentage={67}
            icon={<User size={16} color={COLORS.textPrimary} />}
            color={COLORS.primary}
          />
          <View style={{ height: 16 }} />
          <ProgressBar
            label="Via Stylish Profile"
            count="4"
            percentage={33}
            icon={<Scissors size={16} color={COLORS.textPrimary} />}
            color={COLORS.darkBar}
          />
        </View>

        {/* Today's Bookings */}
        <SectionHeader title="Today's Bookings" actionText="See All" />

        <BookingItem
          time="10:00 AM"
          service="Hair Cut"
          price="₹400"
          status="Confirmed"
          staff="Josh"
          client="Rahul"
        />
        <BookingItem
          time="10:30 AM"
          service="Beard Grooming"
          price="₹250"
          status="Confirmed"
          staff="Arun"
          client="Gogul"
        />
        <BookingItem
          time="10:30 AM"
          service="Beard Grooming"
          price="₹250"
          status="Confirmed"
          staff="Arun"
          client="Gogul"
        />
        <BookingItem
          time="10:30 AM"
          service="Beard Grooming"
          price="₹250"
          status="Confirmed"
          staff="Arun"
          client="Gogul"
        />

        {/* Quick Actions */}
        <SectionHeader title="Quick Actions" />
        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            <QuickAction
              icon={<Users size={20} color={COLORS.textPrimary} />}
              title="Add Staff"
              subtitle="Invite or roster"
            />
            <QuickAction
              icon={<Briefcase size={20} color={COLORS.textPrimary} />}
              title="Services"
              subtitle="Service & pricing"
            />
          </View>
          <View style={styles.gridRow}>
            <QuickAction
              icon={<IndianRupee size={20} color={COLORS.textPrimary} />}
              title="Revenue"
              subtitle="Daily settlements"
            />
            <QuickAction
              icon={<Settings size={20} color={COLORS.textPrimary} />}
              title="Settings"
              subtitle="Shop profile & hours"
            />
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Header Styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  headerSubRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopName: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  dot: {
    marginHorizontal: 6,
    color: COLORS.textSecondary,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },
  reviewCount: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  // Section Styles
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  sectionAction: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginRight: 4,
  },
  liveStatusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  liveBadge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  liveText: {
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
  // Card Styles
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 16,
    marginTop: 2,
  },
  cardContent: {
    flex: 1,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  cardSubtext: {
    fontSize: 12,
    color: "#10B981", // Greenish text for positive trends
  },
  // Badge Styles
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeSuccess: {
    backgroundColor: COLORS.successBg,
  },
  badgeWarning: {
    backgroundColor: COLORS.warningBg,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "600",
  },
  badgeTextSuccess: {
    color: COLORS.successText,
  },
  badgeTextWarning: {
    color: COLORS.warningText,
  },
  // Progress Bar Styles
  progressContainer: {
    marginBottom: 4,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 13,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  progressValue: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
  // Booking Item Styles
  bookingCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  bookingLeft: {
    width: 70,
    justifyContent: "center",
  },
  bookingTime: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  bookingStatus: {
    fontSize: 10,
    color: "#10B981",
    fontWeight: "500",
  },
  bookingMiddle: {
    flex: 1,
    paddingHorizontal: 8,
  },
  bookingService: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  priceTag: {
    backgroundColor: COLORS.yellowTagBg,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  priceText: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.yellowTagText,
  },
  bookingDetails: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  viewButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },
  // Quick Action Grid Styles
  gridContainer: {
    gap: 12,
  },
  gridRow: {
    flexDirection: "row",
    gap: 12,
  },
  actionCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  actionIconContainer: {
    marginRight: 12,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  actionSubtitle: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});
