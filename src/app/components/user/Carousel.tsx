import { Dimensions, Image, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const banners = [
  {
    id: "1",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: "3",
    image: require("@/assets/images/icon.png"),
  },
];

export default function HeroCarousel() {
  return (
    <View className="w-full h-[220] mt-3">
      <Carousel
        scrollEnabled={true}
        data={banners}
        loop
        autoplay
        renderItem={({ item }: { item: any }) => (
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}
