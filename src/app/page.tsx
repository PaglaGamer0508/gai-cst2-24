import HeaderSection from "@/components/HeaderSection";
import Notice from "@/components/Notice";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-3">
      <Notice />
      <HeaderSection />

      <div className="flex justify-center items-center gap-x-4">
        <Link
          className="flex items-center gap-x-2 w-fit border-2 border-blue-500 py-2 px-4 rounded-full group"
          href={"/location"}
        >
          <span>Location</span>
          <ArrowRight className="w-6 group-hover:translate-x-1 transition-transform duration-75" />
        </Link>
        <Link
          className="flex items-center gap-x-2 w-fit border-2 border-blue-500 py-2 px-4 rounded-full group"
          href={"/students"}
        >
          <span>Students</span>
          <ArrowRight className="w-6 group-hover:translate-x-1 transition-transform duration-75" />
        </Link>
      </div>
    </div>
  );
}
