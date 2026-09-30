import {
  CircleX,
  Clock,
  Clock3,
  Heart,
  LucideIcon,
  MapPin,
  Star,
  Store,
} from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import ButtonBox from "../user/Buttonbox";

// 360px

export function CardComponent({
  width,
  shop,
  shopShown,
  primaryButtonText,
  secondaryButtonText,
  offerShown,
  icon,
  booking = false,
}: {
  shop: any;
  shopShown?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  offerShown?: boolean;
  width?: string;
  icon?: LucideIcon;
  booking?: boolean;
}) {
  return (
    <View
      className={` ${width} shrink-0 rounded-[22px] bg-white p-4 shadow-sm ${booking && "mt-3"}`}
    >
      {shopShown && !offerShown ? (
        <Image
          source={shop.image}
          className="h-[132px] w-[100%] shrink-0 rounded-[14px]"
          resizeMode="cover"
        />
      ) : null}

      {/* Top section */}
      <View className="flex-row ">
        {/* Image */}

        {!shopShown || offerShown ? (
          <Image
            source={shop.image}
            className={` shrink-0 rounded-[14px] ${booking ? "rounded-full h-[70px] w-[70px]" : "rounded-[14px] h-[112px] w-[140px]"}`}
            resizeMode="cover"
          />
        ) : null}

        {/* Details */}
        <View className="ml-4 min-w-0 flex-1">
          {/* Name + Rating */}
          <View className="flex-row items-start justify-between">
            <View className="min-w-0 flex-1 pr-2">
              <Text
                className={`text-[23px] ${shopShown ? "mt-3" : ""} font-semibold text-black`}
                numberOfLines={1}
              >
                {offerShown ? shop.offer : shop.name}
              </Text>

              {booking || shopShown ? null : (
                <Text
                  className="mt-0.5 text-[15px] text-gray-700"
                  numberOfLines={1}
                >
                  {shop.shop}
                </Text>
              )}
            </View>

            {/* Rating + Heart */}

            <View className="flex-row items-center gap-2">
              {!booking ? (
                <>
                  {offerShown ? null : (
                    <View
                      className={`flex-row items-center ${
                        shopShown ? "mt-3" : ""
                      }`}
                    >
                      <Star size={18} color="#9A7417" fill="#9A7417" />

                      <Text className="ml-1 text-[15px] font-semibold text-black">
                        {shop.rating}
                      </Text>
                    </View>
                  )}

                  {shopShown ? null : (
                    <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                      <Heart size={22} color="black" fill="black" />
                    </Pressable>
                  )}
                </>
              ) : (
                <View
                  className={`ml-3 rounded-full px-3 py-2 ${
                    shop.status === "pending"
                      ? "bg-yellow-100"
                      : shop.status === "confirmed"
                        ? "bg-green-100"
                        : shop.status === "cancelled"
                          ? "bg-red-100"
                          : "bg-red-100"
                  }`}
                >
                  <Text
                    className={`text-[12px] font-semibold ${
                      shop.status === "pending"
                        ? "text-yellow-700"
                        : shop.status === "confirmed"
                          ? "text-green-700"
                          : shop.status === "cancelled"
                            ? "text-red-700"
                            : "text-red-500"
                    }`}
                  >
                    • {shop.status}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Service / Price */}

          {shopShown ? null : (
            <View
              className={` ${booking ? "mt-0" : "mt-3"} flex-row items-center`}
            >
              <Text className="text-[15px] text-gray-700" numberOfLines={1}>
                {shop.service}
              </Text>
              {!booking && (
                <>
                  <Text className="mx-2 text-[15px] text-gray-700">•</Text>

                  <Text className="text-[15px] text-gray-700">
                    {shop.price}
                  </Text>
                </>
              )}
            </View>
          )}

          {offerShown ? (
            <View className="mt-3 flex-row items-center">
              <View className="">
                <Text className="text-[15px] text-gray-700" numberOfLines={1}>
                  {shop.service}
                </Text>

                <Text className="text-[15px] text-gray-700">₹{shop.price}</Text>
                <View
                  className={`flex-row items-center ${shopShown ? "mt-3" : ""}`}
                >
                  <Star size={18} color="#9A7417" fill="#9A7417" />

                  <Text className="ml-1 text-[15px] font-semibold text-black">
                    {shop.rating}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

          {/* Experience / Distance */}
          {!booking && (
            <View className="mt-3 flex-row">
              {offerShown ? null : (
                <>
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
                </>
              )}
            </View>
          )}
        </View>
      </View>
      {booking && (
        <>
          <View className="h-[1px] flex-1 bg-gray-300 mt-2" />

          <View className="mt-2">
            <View className="flex-row items-center rounded-md  px-2 py-1">
              <Store size={13} color="black" />

              <Text className="ml-1 text-[14px] text-gray-600">
                {shop.shop}
              </Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center rounded-md px-2 py-1">
                <Clock size={13} color="black" />

                <Text className="ml-1 text-[14px] text-gray-600">
                  {shop.time}
                </Text>
              </View>
              <Text className="text-[13px] font-bold">{shop.price}</Text>
            </View>
          </View>
        </>
      )}

      {shopShown ? (
        <Pressable className="h-11 w-11 items-center absolute right-7 top-6 justify-center rounded-full bg-gray-100">
          <Heart size={22} color="black" fill="black" />
        </Pressable>
      ) : null}

      {/* Buttons */}
      <View className="mt-1">
        <ButtonBox
          primaryButtonText={primaryButtonText}
          secondaryButtonText={
            shop.status == "pending" ? "Cancel" : secondaryButtonText
          }
          offerShown={offerShown}
          shopName={shop.name}
          shopDistance={shop.distance}
          icon={shop.status == "pending" ? CircleX : icon}
          shopStatus={shop.status}
        />
      </View>
    </View>
  );
}
