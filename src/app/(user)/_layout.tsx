import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          src={require("../../../assets/images/icons/house.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="shops">
        <NativeTabs.Trigger.Label hidden />

        <NativeTabs.Trigger.Icon
          src={require("../../../assets/images/icons/store.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="wishlist">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="heart" md="favorite" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="bookings">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          src={require("../../../assets/images/icons/calendar.png")}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
