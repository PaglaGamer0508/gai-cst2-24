import LocationImage from "@/../public/location.png";
import LocationSection from "@/components/LocationSection";
import SeeLocationOnMaps from "@/components/SeeLocationOnMaps";
import { MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Location - GAI-CST2-24",
};

const page: React.FC = () => {
  return (
    <div>
      <LocationSection />
    </div>
  );
};

export default page;
