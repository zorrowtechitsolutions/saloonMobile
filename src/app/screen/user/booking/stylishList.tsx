import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Plus, Star } from "lucide-react-native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const data = [
  { id: "1", name: "Josh", rating: "4.7", experience: "5 years" },
  { id: "2", name: "Ameen", rating: "4.8", experience: "4 years" },
  { id: "3", name: "Rahul", rating: "4.6", experience: "6 years" },
  { id: "4", name: "Arjun", rating: "4.9", experience: "7 years" },
  { id: "5", name: "John", rating: "4.5", experience: "3 years" },
  { id: "6", name: "David", rating: "4.8", experience: "8 years" },
  { id: "7", name: "Adam", rating: "4.7", experience: "5 years" },
];

export default function StylishList() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 8,
        paddingBottom: 20,
      }}
      renderItem={({ item }) => (
        <View className="mb-2">
          <View className="w-full flex-row items-center justify-between rounded-3xl  p-3 shadow-sm">
            {/* Avatar + Info */}
            <View className="flex-1 flex-row items-center">
              <Avatar>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
                  }}
                />
              </Avatar>

              <View className="ml-4 justify-center">
                <Text className="mb-1 text-xl font-bold text-gray-900">
                  {item.name}
                </Text>

                <View className="flex-row items-center">
                  <Star size={14} color="#FBBF24" fill="#FBBF24" />

                  <Text className="ml-1 text-sm font-medium text-gray-700">
                    {item.rating}
                  </Text>

                  <View className="mx-2 h-1 w-1 rounded-full bg-gray-400" />

                  <Text className="text-sm font-medium text-gray-700">
                    {item.experience}
                  </Text>
                </View>
              </View>
            </View>

            {/* Add */}
            <TouchableOpacity
              className="h-12 w-12 items-center justify-center rounded-2xl border border-gray-300"
              activeOpacity={0.7}
            >
              <Plus size={24} color="#374151" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}
