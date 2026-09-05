import { Box } from "@/components/ui/box";
import {
    Tabs,
    TabsContent,
    TabsContentWrapper,
    TabsIndicator,
    TabsList,
    TabsTrigger,
    TabsTriggerText,
} from "@/components/ui/tabs";
import React from "react";
import Stylish from "../../screen/user/Stylish";
import HeroCarousel from "../user/Carousel";
import CategoriesComponent from "./Categories";

export function TabsComponent() {
  const [activeTab, setActiveTab] = React.useState("men");

  return (
    <Tabs defaultValue="men" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="gap-3 px-4 mt-2">
        <TabsTrigger
          value="men"
          className={`h-12 min-w-[120px]  ${activeTab == "men" ? "rounded-[15px] " : "bg-gray-100 "}  `}
        >
          <TabsTriggerText
            className={`text-base font-semibold ${activeTab == "men" ? "text-white" : "text-black"}`}
          >
            Men
          </TabsTriggerText>
        </TabsTrigger>

        <TabsTrigger
          value="women"
          className={`h-12 min-w-[120px]  ${activeTab == "women" ? "rounded-[15px] " : "bg-gray-100"}  `}
        >
          <TabsTriggerText
            className={`text-base font-semibold ${activeTab == "women" ? "text-white" : "text-black"}`}
          >
            Women
          </TabsTriggerText>
        </TabsTrigger>

        <TabsIndicator className="bg-black rounded-[15px] border" />
      </TabsList>

      <HeroCarousel />

      <TabsContentWrapper>
        <TabsContent value="men">
          <Box className="">
            <CategoriesComponent />
            <Stylish title="Top Stylish" />
            <Stylish title="Near by Stylish" />
          </Box>
        </TabsContent>

        <TabsContent value="women">
          <Box className="p-4">
            <CategoriesComponent />
            <Stylish title="Top Stylish" />
            <Stylish title="Near by Stylish" />
          </Box>
        </TabsContent>
      </TabsContentWrapper>
    </Tabs>
  );
}
