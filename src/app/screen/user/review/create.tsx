import { router } from "expo-router";
import { Star, X } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "../../../components/common/Button";

export default function ReviewCreate() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 28,
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
        <View className=" flex-row justify-between items-center">
          <Text className="text-[18px] font-semibold text-black">
            Share your experience
          </Text>

          <Pressable
            className="h-11 w-11 justify-center rounded-full bg-gray-100"
            onPress={() => router.back()}
          >
            <X size={26} color="black" />
          </Pressable>
        </View>

        <Text className="mt-4 text-[13px] leading-7 text-gray-500">
          We value your feedback! Tell us about{"\n"}
          your experience.
        </Text>

        <View className="mt-10 h-[1px] bg-gray-300" />

        <Text className="mt-10 text-[15px] font-medium text-black">
          How would you rate your experience?
        </Text>

        <View className="mt-6 flex-row">
          {[1, 2, 3, 4, 5].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setRating(item)}
              className="mr-6"
            >
              <Star
                size={30}
                color="#D5B96F"
                fill={item <= rating ? "#D5B96F" : "transparent"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-10 h-[1px] bg-gray-300" />

        <TextInput
          value={review}
          onChangeText={setReview}
          placeholder="Write your experience...."
          placeholderTextColor="#8A8A8A"
          multiline
          textAlignVertical="top"
          className="mt-10 h-[300px] rounded-[30px] border border-gray-200 px-7 py-7 text-[18px] text-black"
        />
        <View className="mt-4">
          <ButtonComponent
            buttonText="Submit Review"
            textColor="text-white"
            bgColor="bg-black"
            boder="border-black"
            height="h-16"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
