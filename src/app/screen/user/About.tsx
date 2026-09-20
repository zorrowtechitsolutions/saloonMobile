import { MapPin, Phone, Star } from "lucide-react-native";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";

const services = [
  {
    id: 1,
    name: "Haircut",
    price: 200,
  },
  {
    id: 2,
    name: "Beard Trim",
    price: 150,
  },
  {
    id: 3,
    name: "Hair Styling",
    price: 300,
  },
  {
    id: 4,
    name: "Hair Wash",
    price: 100,
  },
];

export default function AboutScreen() {
  const callShop = () => {
    Linking.openURL("tel:+91259104054");
  };

  return (
    <ScrollView
      className="w-full h-full"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 18,
        paddingBottom: 600,
      }}
    >
      {/* Shop Name */}
      <Text className="text-[22px] font-semibold text-[#171717]">
        Luxe Hair Studio
      </Text>

      {/* Rating */}
      <View className="mt-2 flex-row items-center">
        <Star size={21} color="#E8C46D" fill="#E8C46D" strokeWidth={1.5} />

        <Text className="ml-2 text-[16px] font-medium text-[#222222]">4.7</Text>
      </View>

      {/* Distance + Location */}
      <View className="mt-2 flex-row items-center">
        <MapPin size={20} color="#333333" strokeWidth={1.8} />

        <Text className="ml-3 text-[16px] text-[#222222]">2 Km</Text>

        <Text className="mx-3 text-[14px] text-[#222222]">•</Text>

        <Text className="text-[16px] text-[#222222]">
          Malappuram, Koottilangady
        </Text>
      </View>

      {/* Opening Hours */}
      <View className="mt-7">
        <Text className="text-[21px] font-semibold text-[#171717]">
          Opening Hours
        </Text>

        <Text className="mt-3 text-[20px] leading-[29px] text-[#686868]">
          Monday - Sunday : 9:00 AM{"\n"}
          9:00 PM
        </Text>
      </View>

      {/* Large spacing - same as screenshot */}
      <View className="h-[205px]" />

      {/* Location */}
      <View>
        <Text className="text-[21px] font-semibold text-[#171717]">
          Location
        </Text>

        <View className="mt-4 flex-row">
          <MapPin
            size={23}
            color="#555555"
            strokeWidth={1.8}
            style={{ marginTop: 2 }}
          />

          <Text className="ml-4 flex-1 text-[20px] leading-[29px] text-[#4F4F4F]">
            123 Fashion Avenue, Suite 200 Downtown{"\n"}
            District, NY 10001
          </Text>
        </View>
      </View>

      {/* Contact */}
      <View className="mt-7">
        <Text className="text-[21px] font-semibold text-[#171717]">
          Contact
        </Text>

        <Pressable onPress={callShop} className="mt-4 flex-row items-center">
          <Phone size={25} color="#555555" strokeWidth={1.8} />

          <Text className="ml-4 text-[20px] text-[#222222]">+91 259104054</Text>
        </Pressable>
      </View>

      {/* About */}
      <View className="mt-7">
        <Text className="text-[21px] font-semibold text-[#171717]">About</Text>

        <Text className="mt-4 text-[18px] leading-[29px] text-[#5F5F5F]">
          Welcome to Luxe Hair Studio, your premier destination for exceptional
          beauty services. We pride ourselves on delivering world-class
          treatments in a luxurious and relaxing environment. Our team of highly
          skilled professionals is dedicated to helping you look and feel your
          absolute best.
        </Text>
      </View>

      {/* Services */}
      <View className="mt-7">
        <Text className="text-[21px] font-semibold text-[#171717]">
          Services & Pricing
        </Text>

        <View className="mt-4">
          {services.map((service) => (
            <View
              key={service.id}
              className="mb-3 flex-row items-center justify-between rounded-[12px] border border-[#E5E2DC] bg-white px-3 py-4"
            >
              <Text className="text-[17px] text-[#292929]">{service.name}</Text>

              <Text className="text-[17px] font-semibold text-[#292929]">
                ₹ {service.price}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
