import {
    ChevronRight,
    Clock3,
    LocateFixed,
    MapPin,
    Search,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/common/AppBar";
import { InputComponent } from "../../components/common/Input";

const locations = [
  {
    title: "Malappuram kottapadi",
    subtitle: "State Highway 71, Middle Hill",
  },
  {
    title: "Malappuram",
    subtitle: "Keralam",
  },
  {
    title: "Malappuram Town",
    subtitle: "Malappuram, Kerala, India",
  },
  {
    title: "Malappuram Bus Stand",
    subtitle: "Malappuram, Kerala, India",
  },
];

const recentLocations = [
  {
    name: "Kannur",
    state: "Kerala",
  },
  {
    name: "Tirur",
    state: "Kerala",
  },
  {
    name: "Kozhikode",
    state: "Kerala",
  },
];

export default function LocationSearchScreen() {
  const handleCurrentLocation = () => {
    console.log("Get current location");
  };

  const handleLocationPress = (location: (typeof locations)[0]) => {
    console.log("Selected:", location);
  };

  return (
    <SafeAreaView className="flex-1 ">
      <AppBar title="Select your location" />

      <View className="flex-row gap-2 items-center ml-5 my-3">
        <MapPin size={22} color="#222" />
        <Text className="text-[16px] font-bold">Kerala, India</Text>
      </View>

      <InputComponent icon={Search} placeholderText="Search" />

      <View className="px-3">
        <Pressable
          onPress={handleCurrentLocation}
          className="h-[70px] flex-row items-center rounded-2xl border border-gray-200 bg-white px-4"
        >
          {/* Icon */}
          <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <LocateFixed size={22} color="#222" />
          </View>

          {/* Text */}
          <View className="ml-5 flex-1">
            <Text className="text-[16px] font-bold text-gray-900">
              Use Current Location
            </Text>

            <Text className="mt-0.5 text-[13px] text-gray-400">
              Detect your current city
            </Text>
          </View>

          <ChevronRight size={22} color="#a8a8a8" />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-2 w-full"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 300,
          gap: 16,
        }}
      >
        <View className="mt-6 ">
          {/* Title */}
          <Text className="mb-4 text-[16px] font-medium text-gray-700">
            Popular Cities
          </Text>

          {/* Single Card */}
          <View className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {recentLocations.map((location, index) => (
              <Pressable
                key={location.name}
                onPress={() => {
                  console.log("Selected:", location.name);
                }}
                className={`h-[55px] flex-row items-center px-4 active:bg-gray-50 ${
                  index !== recentLocations.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {/* Clock Icon */}

                {/* Location Name */}
                <Text className="ml-4 flex-1 text-[16px] font-medium text-gray-900">
                  {location.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="flex-1   pt-1">
          {/* Current Location */}

          {/* Search Results */}
          <Text className="mb-3 mt-5 text-[18px] font-medium text-gray-700">
            Search Results
          </Text>

          {/* Results */}
          <View className="gap-3">
            {locations.map((location, index) => (
              <Pressable
                key={index}
                onPress={() => handleLocationPress(location)}
                className="h-[84px] flex-row items-center rounded-2xl border border-gray-200 bg-white px-4"
              >
                {/* Location Icon */}
                <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                  <MapPin size={21} color="#666" />
                </View>

                {/* Location Details */}
                <View className="ml-5 flex-1">
                  <Text
                    numberOfLines={1}
                    className="text-[16px] font-bold text-gray-900"
                  >
                    {location.title}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="mt-1 text-[13px] text-gray-400"
                  >
                    {location.subtitle}
                  </Text>
                </View>

                {/* Arrow */}
                <ChevronRight size={22} color="#b5b5b5" />
              </Pressable>
            ))}
          </View>
        </View>

        {/* prev search */}

        <View className="mt-6 ">
          {/* Title */}
          <Text className="mb-4 text-[16px] font-medium text-gray-700">
            Recent Location
          </Text>

          {/* Single Card */}
          <View className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {recentLocations.map((location, index) => (
              <Pressable
                key={location.name}
                onPress={() => {
                  console.log("Selected:", location.name);
                }}
                className={`h-[55px] flex-row items-center px-4 active:bg-gray-50 ${
                  index !== recentLocations.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {/* Clock Icon */}
                <Clock3 size={20} color="#AEB5C0" strokeWidth={1.8} />

                {/* Location Name */}
                <Text className="ml-4 flex-1 text-[16px] font-medium text-gray-900">
                  {location.name}
                </Text>

                {/* State */}
                <Text className="text-[14px] text-gray-400">
                  {location.state}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
