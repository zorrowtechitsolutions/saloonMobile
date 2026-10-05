import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Check, ImagePlus, Trash2 } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AccordionComponent from "../../../../components/common/Accordion";
import { InputComponent } from "../../../../components/common/Input";

const category = [
  {
    id: 1,
    name: "Saloon & Spa",
    services: [
      {
        id: 2,
        name: "Saloon",
      },
      {
        id: 3,
        name: "Spa",
      },
      {
        id: 4,
        name: "Beautyparler",
      },
    ],
  },
];

const audience = [
  {
    id: 1,
    name: "Men",
    services: [
      {
        id: 2,
        name: "Men",
      },
      {
        id: 3,
        name: "Women",
      },
      {
        id: 4,
        name: "Women & Men",
      },
    ],
  },
];

export default function IdentityShop() {
  return (
    <>
      {/* ========================= */}
      {/* HANDLE */}
      {/* ========================= */}

      <View className="w-full flex-row justify-center items-center py-4">
        <Progress value={25} orientation="horizontal" className="w-[40%]">
          <ProgressFilledTrack />
        </Progress>
      </View>

      <ScrollView
        contentContainerClassName="px-5 pb-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 38,
          paddingBottom: 80,
          flexGrow: 1,
        }}
      >
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <View className="mb-6">
          <Text className="text-[26px] font-bold leading-8 text-[#111827]">
            Let's craft your identity
          </Text>

          <Text className="mt-2 text-[15px] leading-[22px] text-[#6B7280]">
            Essential details to showcase your atelier to prospective customers.
          </Text>
        </View>

        {/* ========================= */}
        {/* SHOP PHOTO CARD */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          {/* Card Header */}

          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-[18px] font-semibold text-[#1F2937]">
              Shop Photo
            </Text>

            <View className="rounded-full bg-gray-100 px-3 py-1">
              <Text className="text-[10px] font-bold tracking-wide text-gray-500">
                REQUIRED
              </Text>
            </View>
          </View>

          {/* Image */}

          <View className="h-[180px] w-full overflow-hidden rounded-xl">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
              }}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>

          {/* Buttons */}

          <View className="mt-4 flex-row gap-3">
            <TouchableOpacity
              activeOpacity={0.8}
              className="h-12 flex-1 flex-row items-center justify-center rounded-xl border border-gray-300 bg-white"
            >
              <ImagePlus size={17} color="#374151" />

              <Text className="ml-2 text-[14px] font-medium text-[#374151]">
                Replace
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="h-12 flex-1 flex-row items-center justify-center rounded-xl border border-red-200 bg-red-50"
            >
              <Trash2 size={17} color="#EF4444" />

              <Text className="ml-2 text-[14px] font-medium text-red-500">
                Remove
              </Text>
            </TouchableOpacity>
          </View>

          {/* Information */}

          <View className="mt-3 flex-row items-center">
            <View className="h-5 w-5 items-center justify-center">
              <Check size={15} color="#111827" strokeWidth={2.5} />
            </View>

            <Text
              className="ml-1 flex-1 text-[12px] font-medium leading-4 text-gray-500"
              numberOfLines={2}
            >
              Shown prominently on search & client bookings
            </Text>
          </View>
        </View>

        {/* ========================= */}
        {/* SHOP NAME */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <Text className="mb-3 text-[18px] font-semibold text-[#1F2937]">
            Shop Name
          </Text>

          <View className="w-full">
            <InputComponent placeholderText="Enter shop name" />
          </View>

          <Text className="mt-2 text-[12px] leading-4 text-gray-400">
            This name will be displayed across client receipts and bookings.
          </Text>
        </View>

        {/* ========================= */}
        {/* SHOP CATEGORY */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <Text className="mb-3 text-[18px] font-semibold text-[#1F2937]">
            Shop Category
          </Text>

          <View className="overflow-hidden rounded-xl border border-gray-200 bg-[#F9FAFB]  px-5">
            <AccordionComponent services={category} showAddCheckBox={true} />
          </View>
        </View>

        {/* ========================= */}
        {/* TARGET AUDIENCE */}
        {/* ========================= */}

        <View className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <Text className="mb-3 text-[18px] font-semibold text-[#1F2937]">
            Target Audience
          </Text>

          <View className="overflow-hidden rounded-xl border border-gray-200 bg-[#F9FAFB] px-5">
            <AccordionComponent services={audience} showCheckBox={true} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
