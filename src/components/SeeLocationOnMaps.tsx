import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

interface SeeLocationOnMapsProps {}

const SeeLocationOnMaps: React.FC<SeeLocationOnMapsProps> = ({}) => {
  return (
    <Link
      target="_blank"
      href="https://www.google.com/maps/place/Government+Graphic+Arts+Institute/@23.7536873,90.362463,17z/data=!4m6!3m5!1s0x3755bf5a9024664d:0x50c2d4fb288ff156!8m2!3d23.7536824!4d90.3650379!16s%2Fg%2F1tds51lt?entry=ttu"
      className="flex items-center gap-x-2 w-fit border-2 border-blue-500 py-2 px-4 rounded-full"
    >
      <span className="text-blue-500">See Location On Maps</span>
      <Icons.googleMaps />
    </Link>
  );
};

export default SeeLocationOnMaps;
