import { router } from "expo-router";
import { LucideIcon } from "lucide-react-native";
import { Pressable, Text } from "react-native";

export default function ButtonComponent({
  buttonText,
  textColor,
  bgColor,
  boder,
  icon: IconComponent,
  iconColor,
  height,
}: {
  buttonText?: string;
  textColor?: string;
  bgColor?: string;
  boder?: string | null;
  icon?: LucideIcon;
  height: string;
  iconColor?: string;
}) {
  const handleButton = () => {
    if (buttonText == "View Shop") {
      router.push("/screen/user/ShopDetails");
    }

    if (buttonText == "View Profile") {
      router.push("/screen/user/StylishDetails");
    }

    if (buttonText == "Write a Review") {
      router.push("/screen/user/review/create");
    }

    if (buttonText == "Book Appointment") {
      router.push("/screen/user/services/selectServices");
    }
    if (buttonText == "Continue") {
      router.push("/screen/user/booking/selectDate");
    }
    if (buttonText == "Confirm Booking") {
      router.push("/screen/user/booking/confirmBooking");
    }

    if (buttonText == "Book Now") {
      router.push("/screen/user/services/selectServices");
    }

    if (buttonText == "Confirm Appointment") {
      router.push("/screen/user/booking/completeBooking");
    }
    if (buttonText == "View Booking") {
      router.push("/bookings");
    }
    if (buttonText == "Back to Home") {
      router.push("/");
    }
    if (buttonText == "View Details") {
      router.push("/screen/user/booking/bookingDetails");
    }

    if (buttonText == "Subscribe") {
      router.push("/screen/admin/subscription/payment");
    }

    if (buttonText == "Continue With Google Pay") {
      router.push("/screen/admin/shop/registration/compleated");
    }
    if (buttonText == "Cancel") {
      router.back();
    }
  };

  return (
    <Pressable
      className={`${height} flex-1 flex-row items-center justify-center rounded-[10px] border ${boder} ${bgColor}`}
      onPress={() => handleButton()}
    >
      {IconComponent && <IconComponent size={16} color={iconColor} />}

      <Text className={`ml-2 text-[17px] font-semibold ${textColor}`}>
        {buttonText}
      </Text>
    </Pressable>
  );
}
