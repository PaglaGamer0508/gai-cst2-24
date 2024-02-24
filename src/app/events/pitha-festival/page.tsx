import LocationImage from "@/../public/location.png";
import Pitha1 from "@/../public/pitha-1.png";
import Pitha2 from "@/../public/pitha-2.png";
import Pitha3 from "@/../public/pitha-3.png";
import SeeLocationOnMaps from "@/components/SeeLocationOnMaps";
import { MapPin } from "lucide-react";
import { Metadata } from "next";
import { Alkatra } from "next/font/google";
import Image from "next/image";
import React from "react";
import ImageItem from "./ImageItem";
import LocationSection from "@/components/LocationSection";

const alkatra = Alkatra({ weight: ["700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pitha Festival - GAI-CST2-24",
  description: `Govt. Graphic Arts Institute. Pitha Festival!. Delicious pitha stall! Variety of pies, homemade, healthy, and
    affordable! Come on 1st March, 2024 and enjoy your favorite pitha!`,
};

const page: React.FC = () => {
  return (
    <div>
      {/* header section */}
      <div className="sm:w-[80%] md:w-[60%] mx-auto text-center py-10">
        <h1 className={`${alkatra.className} text-4xl sm:text-6xl`}>
          Pitha Festival
        </h1>
        <h2 className="text-2xl mt-2">1st March, 2024</h2>
        <p className="text-xl mt-6">{`Organizing by GAI Women's group`}</p>
      </div>
      <hr className="border-none h-[2px] bg-gray-500" />
      <div className="text-center pt-10">
        <p className="text-2xl font-semibold">
          You are invited to visit our stall
        </p>
        <h1
          className={`${alkatra.className} text-7xl pt-5 text-[#f77e0b]`}
        >{`Sweet's Bite`}</h1>
      </div>

      {/* images section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1200px] mx-auto p-4">
        {/* image 1 */}
        <ImageItem imageUrl={Pitha1} />
        {/* image 2 */}
        <ImageItem imageUrl={Pitha2} />
        {/* image 3 */}
        <ImageItem imageUrl={Pitha3} />
      </div>

      {/* description section */}
      <div className="sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto text-center py-10">
        <h1 className="text-2xl">
          Delicious pitha stall! Variety of pies, homemade, healthy, and
          affordable! Come on 1st March and enjoy your favorite pitha!
        </h1>
      </div>

      {/* location section */}
      <LocationSection />
    </div>
  );
};

export default page;
