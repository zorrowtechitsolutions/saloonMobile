import { Pressable, ScrollView, Text, View } from "react-native";

export default function CategoriesComponent() {
  const categories = [
    "Haircut",
    "Nail Polish",
    "Hair Color",
    "Beard",
    "Facial",
  ];

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        {categories.map((category, index) => (
          <Pressable
            key={category}
            className={`h-12 items-center justify-center rounded-full px-6 ${
              index === 0 ? "bg-black" : "border border-gray-200 bg-white"
            }`}
          >
            <Text
              className={`text-[15px] font-medium ${
                index === 0 ? "text-white" : "text-gray-600"
              }`}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
