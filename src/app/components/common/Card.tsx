import { Clock3, Heart, MapPin, Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import Button from "./Button";

export function CardComponent({ shop }: { shop: any }) {
  return (
    <View className="rounded-[22px] bg-white p-4 shadow-sm">
      {/* Top section */}
      <View className="flex-row">
        {/* Image */}
        <Image
          source={shop.image}
          className="h-[112px] w-[140px] rounded-[14px]"
          resizeMode="cover"
        />

        {/* Details */}
        <View className="ml-4 flex-1">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <Text className="text-[23px] font-semibold text-black">
                {shop.name}
              </Text>

              <Text className="mt-0.5 text-[15px] text-gray-700">
                {shop.shop}
              </Text>
            </View>

            {/* Rating */}
            <View className="flex-row items-center justify-between gap-5">
              <View className="flex-row items-center">
                <Star size={18} color="#9A7417" fill="#9A7417" />

                <Text className="ml-1 text-[15px] font-semibold text-black">
                  {shop.rating}
                </Text>
              </View>

              <Pressable className="mr-2 h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                <Heart size={22} color="black" fill="black" />
              </Pressable>
            </View>
          </View>

          {/* Service / Price */}
          <View className="mt-3 flex-row items-center">
            <Text className="ml-2 text-[15px] text-gray-700">
              {shop.service}
            </Text>

            <Text className="ml-4 text-[15px] text-gray-700">•</Text>

            <Text className="ml-2 text-[15px] text-gray-700">{shop.price}</Text>
          </View>

          {/* Experience / Distance */}
          <View className="mt-3 flex-row">
            <View className="mr-2 flex-row items-center rounded-md bg-gray-100 px-2 py-1">
              <Clock3 size={13} color="#777" />

              <Text className="ml-1 text-[12px] text-gray-600">
                {shop.experience}
              </Text>
            </View>

            <View className="flex-row items-center rounded-md bg-gray-100 px-2 py-1">
              <MapPin size={13} color="#777" />

              <Text className="ml-1 text-[12px] text-gray-600">
                {shop.distance}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <Button />
    </View>
  );
}
