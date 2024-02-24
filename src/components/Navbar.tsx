"use client";

import Logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import OpenMenuButton from "./OpenMenuButton";

const Navbar: React.FC = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between fixed w-full top-0 p-2 sm:p-4 bg-black/60 backdrop-blur-md ${
        isScrolled ? "shadow-lg shadow-black/40" : ""
      }`}
    >
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center gap-x-2">
          <Image src={Logo} alt="Logo" className="w-14 sm:w-20" />
          <h1 className="text-xl sm:text-3xl">
            GAI-C
            <span className="text-blue-500">S</span>
            <span className="text-[#b3d7a7]">T</span>
            2-24
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
      <div className="sm:hidden relative z-100">
        <OpenMenuButton />
      </div>
    </div>
  );
};

export default Navbar;
