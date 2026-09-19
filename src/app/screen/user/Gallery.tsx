import { FlashList } from "@shopify/flash-list";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "Hair Style",
    height: 260,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
  },
  {
    id: "2",
    title: "Salon Interior",
    height: 180,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
  },
  {
    id: "3",
    title: "Hair Cutting",
    height: 320,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
  },
  {
    id: "4",
    title: "Barber",
    height: 220,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800",
  },
  {
    id: "5",
    title: "Beauty",
    height: 300,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800",
  },
  {
    id: "6",
    title: "Hair Style",
    height: 240,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
  },
  {
    id: "7",
    title: "Salon",
    height: 280,
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800",
  },
  {
    id: "8",
    title: "Hair Color",
    height: 200,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
  },
  {
    id: "9",
    title: "Makeup",
    height: 330,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
  },
];

export default function GalleryScreen() {
  return (
    <View
      style={{
        width: "100%",
        height: SCREEN_HEIGHT,
      }}
    >
      <View className="flex flex-row justify-between">
        <Text className="font-bold">Gallery</Text>
        <Text className="rounded-full border border-gray-300 bg-gray-200 px-2 py-1 text-center text-sm font-medium text-gray-700">
          12 photos
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4 w-full"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 600,
          gap: 16,
        }}
      >
        <FlashList
          data={data}
          numColumns={3}
          masonry
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 5,
                backgroundColor: "#eeeeee",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: item.height,
                }}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
