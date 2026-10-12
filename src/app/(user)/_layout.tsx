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
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="house" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="shops">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="storefront" md="store" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="offers">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="tag" md="local_offer" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="bookings">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_today" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
