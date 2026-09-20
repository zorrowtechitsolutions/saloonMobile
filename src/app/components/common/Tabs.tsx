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

import AboutScreen from "../../screen/user/About";
import GalleryScreen from "../../screen/user/Gallery";
import ReviewsScreen from "../../screen/user/Review";
import ServicesScreen from "../../screen/user/Services";
import Stylish from "../../screen/user/Stylish";
import HeroCarousel from "../user/Carousel";
import CategoriesComponent from "./Categories";

type TabsComponentProps = {
  tabs: string[];
  showCard?: boolean;
  showCarousel?: boolean;
};

export function TabsComponent({
  tabs,
  showCarousel,
  showCard,
}: TabsComponentProps) {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  React.useEffect(() => {
    setActiveTab(tabs[0]?.toLowerCase());
  }, []);

  const renderTabContent = (value: string) => {
    switch (value) {
      case "services":
        return <ServicesScreen />;

      case "gallery":
        return <GalleryScreen />;

      case "reviews":
        return <ReviewsScreen />;

      case "about":
        return <AboutScreen />;

      default:
        return <ServicesScreen />;
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
      {/* TAB BUTTONS */}
      <TabsList className="mt-2 gap-3 px-4">
        {tabs.map((tab) => {
          const value = tab.toLowerCase();

          const isActive = activeTab === value;

          return (
            <TabsTrigger
              key={value}
              value={value}
              className={`h-12 min-w-[120px] rounded-[15px] ${
                isActive ? "bg-black" : "bg-gray-100"
              }`}
            >
              <TabsTriggerText
                className={`text-base font-semibold ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                {tab}
              </TabsTriggerText>
            </TabsTrigger>
          );
        })}

        <TabsIndicator className="rounded-[15px] " />
      </TabsList>

      {/* CAROUSEL */}
      {showCarousel && <HeroCarousel />}

      {/* TAB CONTENT */}
      <TabsContentWrapper>
        {tabs.map((tab) => {
          const value = tab.toLowerCase();

          return (
            <TabsContent key={value} value={value}>
              <Box className="p-4">
                {showCard ? (
                  <>
                    <CategoriesComponent />
                    <Stylish title="Top Stylish" />
                    <Stylish title="Near by Stylish" />
                  </>
                ) : (
                  renderTabContent(value)
                )}
              </Box>
            </TabsContent>
          );
        })}
      </TabsContentWrapper>
    </Tabs>
  );
}
