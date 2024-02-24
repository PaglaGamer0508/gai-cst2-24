import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Notice: React.FC = ({}) => {
  return (
    <div className="bg-[#F77E0B] grid place-items-center p-4 sm:p-6">
      <Link
        href={`/events/pitha-festival`}
        className="flex items-center text-center text-xl sm:text-3xl font-semibold text-black group"
      >
        <span>Up Coming - Pitha Festival</span>
        <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-3 transition-transform duration-75" />
      </Link>
    </div>
  );
};

export default Notice;
