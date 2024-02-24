"use client";

import { useMenuState } from "@/global-state/menuState";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/../public/logo.svg";

const Menu: React.FC = ({}) => {
  const { isOpen, closeSlider } = useMenuState();
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll();

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 100);
  }, [menuOpen]);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } sm:hidden fixed inset-0 z-[50] bg-black/80 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between px-2 py-[11px]">
        <Link
          onClick={() => closeSlider()}
          href={"/"}
          className="flex items-center gap-x-2"
        >
          <Image src={Logo} alt="Logo" className="w-14 sm:w-20" />
          <h1 className="text-xl sm:text-3xl">
            GAI-C
            <span className="text-blue-500">S</span>
            <span className="text-[#b3d7a7]">T</span>
            2-24
          </h1>
        </Link>

        <button onClick={() => closeSlider()}>
          <X className="w-8 h-8 text-white" />
        </button>
      </div>

      <div
        className={`w-fit h-full ${
          menuOpen ? "" : "-translate-x-full"
        } transition-all w-full duration-100 p-3`}
      >
        <div className="flex flex-col gap-2">
          <Link
            className="bg-gray-700/80 hover:bg-gray-600/80 py-3 px-6 rounded-lg"
            onClick={() => closeSlider()}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => closeSlider()}
            href={"/students"}
            className="bg-gray-700/80 hover:bg-gray-600/80 py-3 px-6 rounded-lg"
          >
            Students
          </Link>
          <Link
            onClick={() => closeSlider()}
            href={"/events"}
            className="bg-gray-700/80 hover:bg-gray-600/80 py-3 px-6 rounded-lg"
          >
            Events
          </Link>
          <Link
            onClick={() => closeSlider()}
            title="Location on Google maps"
            href={"/location"}
            className="bg-gray-700/80 hover:bg-gray-600/80 py-3 px-6 rounded-lg"
          >
            Location
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
