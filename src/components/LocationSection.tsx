import LocationImage from "@/../public/location.png";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import SeeLocationOnMaps from "./SeeLocationOnMaps";

const LocationSection: React.FC = () => {
  return (
    <div className="sm:w-[80%] md:w-[60%] mx-auto text-center px-3 py-6">
      <h1 className="text-3xl text-blue-500 mb-10">Location</h1>
      <div className="flex items-center gap-x-2 justify-center mb-10">
        <MapPin className="text-gray-500 w-8 h-8" />
        <p className="text-xl sm:text-2xl max-w-[80%] sm:max-w-max text-left">
          {/* <MapPin /> */}
          Shat Masjid road, Mohammadpur, Dhaka-1207.
        </p>
      </div>

      <Image
        src={LocationImage}
        alt="location"
        width={1000}
        height={1000}
        quality={100}
        className="w-[95%] sm:w-[80%] md:w-[70%] mx-auto rounded-xl overflow-hidden"
      />

      <div className="grid place-items-center mt-10">
        <SeeLocationOnMaps />
      </div>
    </div>
  );
};

export default LocationSection;
