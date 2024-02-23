import LocationImage from "@/../public/location.png";
import Pitha1 from "@/../public/pitha-1.png";
import Pitha2 from "@/../public/pitha-2.png";
import Pitha3 from "@/../public/pitha-3.png";
import SeeLocationOnMaps from "@/components/SeeLocationOnMaps";
import { MapPin } from "lucide-react";
import { Alkatra } from "next/font/google";
import Image from "next/image";
import React from "react";
import ImageItem from "./ImageItem";
import { Metadata } from "next";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
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
      <div className="sm:w-[80%] md:w-[60%] mx-auto text-center px-3 py-10">
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
    </div>
  );
};

export default page;
