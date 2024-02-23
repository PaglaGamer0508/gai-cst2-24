import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuContainer from "@/components/MenuContainer";

const mulish = Mulish({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAI-CST2-24 - Graphic Arts Institute",
  description:
    "We are students of Govt. Graphic Arts Institute. Computer Science & Technology, 2nd Shift - Batch 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <MenuContainer />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
