import { Search } from "lucide-react-native";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import CategoriesComponent from "../../../app/components/common/Categories";
import AppBar from "../../components/common/AppBar";
import { CardComponent } from "../../components/common/Card";
import { InputComponent } from "../../components/common/Input";

export default function StylishScreen() {
  const shops = [
    {
      id: "1",
      name: "Olivia",
      shop: "Urban Cuts",
      image: require("@/assets/images/icon.png"),
      rating: "4.7",
      service: "Beard",
      price: "200 Rs",
      experience: "5 Years",
      distance: "2 KM",
    },
    {
      id: "2",
      name: "Sophia",
      shop: "Style Studio",
      image: require("@/assets/images/icon.png"),
      rating: "4.8",
      service: "Haircut",
      price: "300 Rs",
      experience: "7 Years",
      distance: "1.5 KM",
    },

    {
      id: "3",
      name: "Sophia",
      shop: "Style Studio",
      image: require("@/assets/images/icon.png"),
      rating: "4.8",
      service: "Haircut",
      price: "300 Rs",
      experience: "7 Years",
      distance: "1.5 KM",
    },
    {
      id: "4",
      name: "Sophia",
      shop: "Style Studio",
      image: require("@/assets/images/icon.png"),
      rating: "4.8",
      service: "Haircut",
      price: "300 Rs",
      experience: "7 Years",
      distance: "1.5 KM",
    },
  ];

  const [shopShown, setShopShown] = React.useState(true);

  return (
    <SafeAreaView className="flex-1 ">
      <AppBar title="Stylish" />

      <InputComponent icon={Search} placeholderText="Search" />

      <View className="p-3">
        <CategoriesComponent />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4 w-full"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 300,
          gap: 16,
        }}
      >
        {shops.map((shop) => (
          <CardComponent
            // width="w-max-[360px]"
            width="w-[400px]"
            key={shop.id}
            shop={shop}
            primaryButtonText="View Profile"
            secondaryButtonText="Book Now"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
