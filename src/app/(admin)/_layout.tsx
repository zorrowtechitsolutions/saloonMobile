import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs
      labelVisibilityMode="unlabeled"
      backgroundColor="#FFFFFF"
      iconColor={{
        default: "#777777",
        selected: "#000000",
      }}
      indicatorColor="transparent"
      rippleColor="transparent"
    >
      {/* Dashboard */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="dashboard" />
      </NativeTabs.Trigger>

      {/* Bookings */}
      <NativeTabs.Trigger name="bookings">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_today" />
      </NativeTabs.Trigger>

      {/* Staff */}
      <NativeTabs.Trigger name="staff">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person.2" md="groups" />
      </NativeTabs.Trigger>

      {/* Revenue */}
      <NativeTabs.Trigger name="revanue">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="chart.bar" md="bar_chart" />
      </NativeTabs.Trigger>

      {/* Profile */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
