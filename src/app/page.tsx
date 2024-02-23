import HomeSection from "@/components/HomeSection";
import Notice from "@/components/Notice";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Notice />
      <HomeSection />
    </div>
  );
}
