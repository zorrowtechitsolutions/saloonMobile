import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Store,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AppBar from "../../../../components/common/AppBar";

// --- Types & Interfaces ---
interface ColorsType {
  background: string;
  white: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  premiumBg: string;
  premiumText: string;
  premiumSubtext: string;
  activeBadgeBg: string;
  activeBadgeText: string;
  closedBadgeBg: string;
  closedBadgeText: string;
  inputBg: string;
  sectionBg: string;
}

// --- Constants ---
const COLORS: ColorsType = {
  background: "#FFFFFF",
  white: "#FFFFFF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  premiumBg: "#FEF9C3", // Light yellow
  premiumText: "#854D0E", // Dark brown/yellow
  premiumSubtext: "#A16207",
  activeBadgeBg: "#DCFCE7",
  activeBadgeText: "#166534",
  closedBadgeBg: "#FEE2E2",
  closedBadgeText: "#991B1B",
  inputBg: "#F9FAFB",
  sectionBg: "#FFFFFF",
};

const { width } = Dimensions.get("window");

// --- Reusable Components ---

const PremiumPlanCard = () => (
  <View style={styles.premiumCard}>
    <View style={styles.premiumHeader}>
      <Text style={styles.premiumTitle}>Premium Plan</Text>
      <View style={styles.activeBadge}>
        <Text style={styles.activeBadgeText}>Active</Text>
      </View>
    </View>
    <Text style={styles.premiumSubtext}>Renew on 2 Nov 2026 • ₹450/month</Text>
    <TouchableOpacity style={styles.renewButton}>
      <Text style={styles.renewButtonText}>Renew Plan</Text>
    </TouchableOpacity>
  </View>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const ServiceItem = ({
  name,
  duration,
  price,
}: {
  name: string;
  duration: string;
  price: string;
}) => (
  <View style={styles.serviceItem}>
    <View>
      <Text style={styles.serviceName}>{name}</Text>
      <Text style={styles.serviceDuration}>{duration}</Text>
    </View>
    <Text style={styles.servicePrice}>{price}</Text>
  </View>
);

// --- Main App ---

export default function ProfileDetails(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar title="Shop Profile" threeDot={true} />
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 1. Premium Plan Card */}
        <PremiumPlanCard />

        {/* 2. Shop Image & Header */}
        <View style={styles.shopHeaderContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
              }}
              style={styles.shopImage}
            />
            <View style={styles.ownerViewBadge}>
              <Text style={styles.ownerViewText}>OWNER VIEW</Text>
            </View>
          </View>

          <View style={styles.shopDetails}>
            <Text style={styles.shopName}>Urban Cuts</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingStar}>★ 4.7</Text>
              <Text style={styles.ratingText}>• 124 Reviews</Text>
              <MapPin
                size={12}
                color={COLORS.textSecondary}
                style={{ marginLeft: 8, marginRight: 2 }}
              />
              <Text style={styles.ratingText}>Kannur, Kerala</Text>
            </View>
            <Text style={styles.shopHours}>
              Unisex Salon • Mon-Sun 9 AM - 9 PM
            </Text>
          </View>
        </View>

        {/* 3. Category */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Category</Text>
          <TouchableOpacity style={styles.dropdownInput}>
            <Text style={styles.dropdownText}>Salon & Spa</Text>
            <ChevronDown size={20} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* 4. Phone Number */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>IN +91</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              value="98765 43210"
              editable={false}
            />
          </View>
        </View>

        {/* 5. Email Id */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Email Id</Text>
          <View style={styles.emailInputContainer}>
            <Mail
              size={18}
              color={COLORS.textSecondary}
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.emailInput}
              value="urbancuts@email.com"
              editable={false}
            />
          </View>
        </View>

        {/* 6. About */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>About</Text>
          <View style={styles.aboutBox}>
            <Text style={styles.aboutText}>
              Welcome to Urban Cuts, your premier destination for exceptional
              grooming services. Our team of highly skilled professionals is
              dedicated to helping you look your best.
            </Text>
          </View>
        </View>

        {/* 7. Service & Pricing */}
        <View style={styles.sectionHeaderBorder}>
          <Text style={styles.sectionTitleLarge}>Service & Pricing</Text>
        </View>

        <View style={styles.serviceCategory}>
          <View style={styles.serviceCategoryHeader}>
            <Text style={styles.serviceCategoryTitle}>MENS GROOMING</Text>
            <ChevronDown size={16} color={COLORS.textPrimary} />
          </View>
          <ServiceItem name="Beard Styling" duration="15 Mint" price="₹400" />
          <ServiceItem name="Beard Trim" duration="18 Mint" price="₹200" />
          <ServiceItem name="Hair Cut" duration="14 Mint" price="₹200" />
        </View>

        <View style={styles.serviceCategory}>
          <View style={styles.serviceCategoryHeader}>
            <Text style={styles.serviceCategoryTitle}>MENS HAIR COLOURING</Text>
            <ChevronDown size={16} color={COLORS.textPrimary} />
          </View>
        </View>

        {/* 8. Working Hours */}
        <View style={styles.sectionHeaderBorder}>
          <Text style={styles.sectionTitleLarge}>Working Hours</Text>
        </View>

        <View style={styles.hoursBox}>
          <InfoRow label="Monday - Saturday" value="9:00 AM - 9:00 PM" />
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Sunday</Text>
            <View style={styles.closedBadge}>
              <Text style={styles.closedBadgeText}>Closed</Text>
            </View>
          </View>
        </View>

        {/* 9. Location */}
        <View style={styles.sectionHeaderBorder}>
          <Text style={styles.sectionTitleLarge}>Location</Text>
        </View>

        <View style={styles.locationBox}>
          <View style={styles.addressRow}>
            <MapPin
              size={16}
              color={COLORS.textPrimary}
              style={{ marginTop: 2, marginRight: 8 }}
            />
            <Text style={styles.addressText}>
              123 Main Road, Kannur, Kerala - 670001
            </Text>
          </View>

          {/* Map Placeholder */}
          <View style={styles.mapPlaceholder}>
            <View style={styles.mapPinContainer}>
              <Store size={20} color={COLORS.textPrimary} />
            </View>
            <View style={styles.mapLabel}>
              <Text style={styles.mapLabelText}>Kannur City Center</Text>
            </View>
          </View>
        </View>

        {/* 10. Subscription Plan (Bottom) */}
        <View style={styles.sectionHeaderBorder}>
          <Text style={styles.sectionTitleLarge}>Subscription Plan</Text>
        </View>
        <TouchableOpacity style={styles.subscriptionRow}>
          <View style={styles.row}>
            <Text style={styles.subscriptionText}>Subscription Plan</Text>
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>PRO</Text>
            </View>
          </View>
          <ChevronRight size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>

        <View style={{ height: 60 }} />
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
    paddingBottom: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Premium Plan Card
  premiumCard: {
    backgroundColor: COLORS.premiumBg,
    margin: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  premiumHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  activeBadge: {
    backgroundColor: COLORS.activeBadgeBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.activeBadgeText,
  },
  premiumSubtext: {
    fontSize: 12,
    color: COLORS.premiumSubtext,
    marginBottom: 16,
  },
  renewButton: {
    backgroundColor: COLORS.textPrimary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  renewButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  // Shop Header
  shopHeaderContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  imageWrapper: {
    position: "relative",
    marginBottom: 12,
  },
  shopImage: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
  },
  ownerViewBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ownerViewText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  shopDetails: {
    marginTop: 4,
  },
  shopName: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ratingStar: {
    fontSize: 13,
    fontWeight: "700",
    color: "#D4A017",
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  shopHours: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  // Form Sections
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  dropdownInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.white,
  },
  dropdownText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  countryCode: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
  },
  countryCodeText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  emailInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  emailInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  aboutBox: {
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
  },
  aboutText: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.textSecondary,
  },
  // Service & Pricing
  sectionHeaderBorder: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    marginTop: 8,
  },
  sectionTitleLarge: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  serviceCategory: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
    overflow: "hidden",
  },
  serviceCategoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  serviceCategoryTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textPrimary,
  },
  serviceDuration: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  servicePrice: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },
  // Working Hours
  hoursBox: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  closedBadge: {
    backgroundColor: COLORS.closedBadgeBg,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  closedBadgeText: {
    color: COLORS.closedBadgeText,
    fontSize: 11,
    fontWeight: "600",
  },
  // Location
  locationBox: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  mapPlaceholder: {
    height: 120,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  mapPinContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapLabel: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  mapLabelText: {
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },
  // Subscription Plan
  subscriptionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  subscriptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  proBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  proBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#D97706",
  },
});
