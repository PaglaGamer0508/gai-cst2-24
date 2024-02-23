import LocationImage from "@/../public/location.png";
import SeeLocationOnMaps from "@/components/SeeLocationOnMaps";
import { MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Location - GAI-CST2-24",
};

const page: React.FC = ({}) => {
  return (
    <div>
      <div className="min-h-[70vh] flex flex-col justify-center items-center p-3">
        <h1 className="text-3xl text-blue-500 mb-4">Location</h1>
        <Image
          src={LocationImage}
          alt="location"
          width={1000}
          height={1000}
          quality={100}
          className="w-[95%] sm:w-[80%] md:w-[70%] mx-auto rounded-xl overflow-hidden"
        />
        <div className="grid place-items-center gap-1 mt-10">
          <MapPin className="text-blue-500 w-10 h-10" />
          <h1 className="text-xl sm:text-2xl">
            Shat Masjid road, Mohammadpur, Dhaka-1207.
          </h1>
        </div>
        <div className="mt-4">
          <SeeLocationOnMaps />
        </div>
      </div>
    </div>
  );
};

export default page;
