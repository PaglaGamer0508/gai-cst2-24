"use client";

import { useMenuState } from "@/global-state/menuState";
import { AlignRight } from "lucide-react";
import React from "react";

const OpenMenuButton: React.FC = () => {
  const { openSlider } = useMenuState();

  return (
    <button onClick={openSlider}>
      <AlignRight className="w-8 h-8 sm:w-10 sm:h-10 hover:text-blue-500" />
    </button>
  );
};

export default OpenMenuButton;
