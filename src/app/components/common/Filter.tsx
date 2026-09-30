import { ScrollView, View } from "react-native";
import AccordionComponent from "./Accordion";
import ButtonComponent from "./Button";

const services = [
  {
    id: 1,
    name: "location (Distance)",
    sub: "5 km selected",
    services: [
      {
        id: 5,
        name: "1km",
      },

      {
        id: 3,
        name: "2km",
      },
      {
        id: 4,
        name: "3km",
      },
    ],
  },

  {
    id: 2,
    name: "Rating",
    sub: "47 + selected",
    services: [
      {
        id: 89,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 8,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 3,
    name: "Category",
    sub: "Hair Stylish",
    services: [
      {
        id: 10,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 9,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 4,
    name: "Service",
    sub: "1 Selected (Beard)",
    services: [
      {
        id: 18,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 10,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 5,
    name: "Availability",
    sub: "Available Today",
    services: [
      {
        id: 20,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 9,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 6,
    name: "Experience",
    sub: "3+ Yrs Selected",
    services: [
      {
        id: 2,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 7,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 7,
    name: "For",
    sub: "Men Selected",
    services: [
      {
        id: 85,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 8,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 8,
    name: "Work Type",
    sub: "Shop Staff Selectd",
    services: [
      {
        id: 35,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 8,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
  {
    id: 9,
    name: "Price Range",
    sub: "Recommended",
    services: [
      {
        id: 25,
        name: "1",
      },

      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
      {
        id: 9,
        name: "4",
      },
      {
        id: 5,
        name: "5",
      },
    ],
  },
];

export default function FilterComponent() {
  return (
    <>
      <ScrollView
        className="flex-1  pb-20 "
        showsVerticalScrollIndicator={false}
      >
        <AccordionComponent services={services} />
      </ScrollView>

      {/* Sticky Footer */}
      <View className="flex-row justify-between px-1 py-4 gap-3">
        <ButtonComponent
          buttonText="Reset"
          textColor="text-black"
          bgColor="bg-white"
          boder="border-black"
          height="h-12"
        />

        <ButtonComponent
          buttonText="Apply"
          textColor="text-white"
          bgColor="bg-black"
          boder="border-black"
          height="h-12"
        />
      </View>
    </>
  );
}
