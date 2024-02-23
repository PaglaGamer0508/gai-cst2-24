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
      } flex sm:hidden fixed inset-0 z-[50] bg-black/80`}
    >
      <button className="absolute top-2 right-2" onClick={() => closeSlider()}>
        <X className="w-8 h-8 text-white" />
      </button>

      <div
        className={`w-fit h-full ${
          menuOpen ? "" : "-translate-x-full"
        } transition-all duration-100 p-3 w-[50%] bg-[#0f0f0f]`}
      >
        <Link onClick={() => closeSlider()} href={"/"}>
          <Image src={Logo} alt="Logo" className="w-14 sm:w-20" />
        </Link>
        <div className="flex flex-col mt-10">
          <Link onClick={() => closeSlider()} href={"/"}>
            Home
          </Link>
          <Link
            onClick={() => closeSlider()}
            href={"/events"}
            className="text-lg hover:text-blue-500"
          >
            Events
          </Link>
          {/* <Link onClick={() => closeSlider()} href={"#"} className="text-lg hover:text-blue-500">
            Students
          </Link> */}
          <Link
            onClick={() => closeSlider()}
            title="Location on Google maps"
            href={"/location"}
            className="text-lg hover:text-blue-500"
          >
            Location
          </Link>
        </div>
      </div>

      <div
        onClick={() => closeSlider()}
        className="w-[70%] h-full bg-transparent"
      ></div>
    </div>
  );
};

export default Menu;
