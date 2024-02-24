import HeaderSection from "@/components/HeaderSection";
import Notice from "@/components/Notice";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-6">
      <Notice />
      <HeaderSection />

      <div className="flex flex-col gap-y-2 w-[95%] sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto">
        <Link
          className="flex items-center justify-center gap-x-2 border-2 border-blue-500 py-2 px-4 rounded-full group w-full"
          href={"/events"}
        >
          <span>Events</span>
          <ArrowRight className="w-6 group-hover:translate-x-1 transition-transform duration-75" />
        </Link>
        <div className="flex justify-center items-center gap-x-4">
          <Link
            className="flex items-center justify-center gap-x-2 border-2 border-blue-500 py-2 px-4 rounded-full group w-[50%]"
            href={"/location"}
          >
            <span>Location</span>
            <ArrowRight className="w-6 group-hover:translate-x-1 transition-transform duration-75" />
          </Link>
          <Link
            className="flex items-center justify-center gap-x-2 border-2 border-blue-500 py-2 px-4 rounded-full group w-[50%]"
            href={"/students"}
          >
            <span>Students</span>
            <ArrowRight className="w-6 group-hover:translate-x-1 transition-transform duration-75" />
          </Link>
        </div>
      </div>
    </div>
  );
}
