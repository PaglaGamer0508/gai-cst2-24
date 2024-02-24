import { Brush, Code2, Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = ({}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-[#191919] p-3 sm:p-4 sm:px-8">
        <div className="flex items-center gap-x-1">
          <Brush className="w-5 h-5" />
          <span>Designed by</span>
          <Link
            title="Harun Zaber"
            target="_blank"
            className="hover:text-blue-500"
            href={"https://harunzaberhz.web.app/"}
          >
            Harun
          </Link>
        </div>
        <div className="flex items-center gap-x-1">
          <Code2 className="w-5 h-5" />
          <span>Developed by</span>
          <Link
            title="Fahad Mahmud"
            target="_blank"
            className="hover:text-blue-500"
            href={"https://www.facebook.com/fahad.mahmud.16547008"}
          >
            Fahad
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-[#333333] p-3 sm:p-4 sm:px-8">
        <p className="flex items-center gap-x-1">
          <Copyright className="w-5 h-5" /> <span>Copyright GAI-CST2-24</span>
        </p>
        <p>
          Powered by{" "}
          <Link
            title="Harun Zaber"
            target="_blank"
            className="hover:text-blue-500"
            href={"https://harunzaberhz.web.app/"}
          >
            Harun
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
