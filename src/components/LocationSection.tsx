import { MapPin } from "lucide-react";
import React from "react";
import SeeLocationOnMaps from "./SeeLocationOnMaps";

const LocationSection: React.FC = () => {
  return (
    <div className="sm:w-[80%] md:w-[80%] xl:w-[55%] mx-auto text-center px-3 py-6">
      <h1 className="text-3xl text-blue-500 mb-10">Location</h1>
      <div className="flex items-center gap-x-2 justify-center mb-10">
        <MapPin className="text-gray-500 w-8 h-8" />
        <p className="text-xl sm:text-2xl text-left">
          {/* <MapPin /> */}
          Shat Masjid road, Mohammadpur, Dhaka-1207.
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9060561877286!2d90.36493060661992!3d23.753471249601425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5a9024664d%3A0x50c2d4fb288ff156!2sGovernment%20Graphic%20Arts%20Institute!5e1!3m2!1sen!2sbd!4v1708786010969!5m2!1sen!2sbd"
        width="600"
        height="450"
        loading="eager"
        className="w-full mx-auto rounded-xl overflow-hidden"
      ></iframe>

      <div className="grid place-items-center mt-10">
        <SeeLocationOnMaps />
      </div>
    </div>
  );
};

export default LocationSection;
