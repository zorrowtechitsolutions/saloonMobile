import { Star } from "lucide-react-native";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View
} from "react-native";
import ButtonComponent from "../../components/common/Button";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const reviews = [
  {
    id: 1,
    name: "Ameen",
    time: "2 days ago",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great haircut and very professional service. The stylist really took the time to understand what I wanted. Highly recommended for anyone looking for a clean fade.",
    tags: ["HAIRCUT"],
  },
  {
    id: 2,
    name: "Rahul",
    time: "5 days ago",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Clean shop, friendly staff, and premium vibe. The hot towel shave was extremely relaxing. Will definitely be making this my regular spot.",
    tags: ["GROOMING", "BEARD TRIM"],
  },
  {
    id: 3,
    name: "Faisal",
    time: "1 week ago",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "One of the best grooming experiences I've had. The attention to detail is unmatched. Only giving 4 stars because finding parking nearby was a bit tricky.",
    tags: ["HAIRCUT"],
  },
];

const ratingData = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

const Stars = ({ rating, size = 13 }: { rating: number; size?: number }) => {
  return (
    <View className="flex-row items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.5}
          fill={star <= rating ? "#D6B875" : "transparent"}
          color="#D6B875"
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );
};

export default function ReviewsScreen() {
  return (
    <ScrollView
      style={{
        width: "100%",
        height: SCREEN_HEIGHT,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 18,
        paddingBottom: 600,
      }}
    >
      {/* Rating Summary */}
      <View
        className="rounded-[22px] bg-white px-5 py-5"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.08,
          shadowRadius: 15,
          elevation: 4,
        }}
      >
        <View className="flex-row">
          {/* Left Rating */}
          <View className="w-[42%] items-center justify-center border-r border-[#EEEEEE] pr-3">
            <Text className="text-[42px] font-semibold leading-[48px] text-[#111111]">
              4.8
            </Text>

            <Stars rating={5} size={13} />

            <Text className="mt-2 text-[12px] text-[#777777]">124 Reviews</Text>
          </View>

          {/* Rating Bars */}
          <View className="flex-1 justify-center pl-5">
            {ratingData.map((item) => (
              <View key={item.stars} className="mb-[7px] flex-row items-center">
                <Text className="w-[15px] text-[12px] text-[#666666]">
                  {item.stars}
                </Text>

                <View className="ml-2 h-[6px] flex-1 overflow-hidden rounded-full bg-[#E7E7E7]">
                  <View
                    className="h-full rounded-full bg-[#D1B47A]"
                    style={{
                      width: `${Math.max(item.percentage, 2)}%`,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Write Review */}

        <ButtonComponent
          buttonText="Write a Review"
          textColor="text-black"
          bgColor="bg-white"
          boder="border-black"
          height="h-12"
        />
      </View>

      {/* Reviews */}
      <View className="mt-5">
        {reviews.map((review, index) => (
          <View key={review.id}>
            {/* User Header */}
            <View className="flex-row items-start">
              <Image
                source={{ uri: review.image }}
                className="h-[38px] w-[38px] rounded-full"
              />

              <View className="ml-3 flex-1">
                <Text className="text-[14px] font-semibold text-[#252525]">
                  {review.name}
                </Text>

                <Text className="mt-[2px] text-[12px] text-[#777777]">
                  {review.time}
                </Text>
              </View>

              {/* User Rating */}
              <Stars rating={review.rating} size={12} />
            </View>

            {/* Review Text */}
            <Text
              className="mt-4 text-[16px] leading-[24px] text-[#686868]"
              style={{
                letterSpacing: 0.1,
              }}
            >
              {review.text}
            </Text>

            {/* Tags */}
            <View className="mt-4 flex-row flex-wrap">
              {review.tags.map((tag) => (
                <View
                  key={tag}
                  className="mr-2 rounded-full bg-[#F1F1EE] px-3 py-[5px]"
                >
                  <Text className="text-[9px] font-medium tracking-[0.4px] text-[#8A8A8A]">
                    {tag}
                  </Text>
                </View>
              ))}
            </View>

            {/* Divider */}
            {index !== reviews.length - 1 && (
              <View className="my-7 h-[1px] bg-[#ECEBE7]" />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
