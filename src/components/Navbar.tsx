import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo.svg";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import OpenMenuButton from "./OpenMenuButton";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between relative p-2 sm:p-4">
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center gap-x-2">
          <Image src={Logo} alt="Logo" className="w-14 sm:w-20" />
          <h1 className="text-xl sm:text-3xl">
            GAI-C
            <span className="text-blue-500">S</span>
            T2-24
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-x-3 ml-6">
          <Link href={"/students"} className="text-lg hover:text-blue-500">
            Students
          </Link>
          <Link href={"/events"} className="text-lg hover:text-blue-500">
            Events
          </Link>
          <Link
            title="Location on Google maps"
            href={"/location"}
            className="text-lg hover:text-blue-500"
          >
            Location
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <OpenMenuButton />
      </div>
    </div>
  );
};

export default Navbar;
