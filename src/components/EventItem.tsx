import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EventItemProps {
  url: string;
  eventName: string;
  eventState: "upcoming" | "ended" | "open";
  eventDate: string;
}

const EventItem: React.FC<EventItemProps> = ({
  eventState,
  eventDate,
  eventName,
  url,
}) => {
  return (
    <Link
      href={url}
      className="group flex items-center justify-between border-4 py-3 px-7 rounded-3xl border-gray-400 hover:border-blue-500 hover:bg-gray-100/10 transition-all duration-75"
    >
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold group-hover:text-blue-500">
            {eventName}
          </h1>
          {eventState === "upcoming" && (
            <div className="bg-[#F77E0B] text-black px-2  font-semibold rounded-lg">
              Upcoming
            </div>
          )}
          {eventState === "ended" && (
            <div className="bg-gray-400 text-black px-2  font-semibold rounded-lg">
              Ended
            </div>
          )}
          {eventState === "open" && (
            <div className="bg-green-500 text-black px-2  font-semibold rounded-lg">
              Open
            </div>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-300">{eventDate}</p>
      </div>
      <ArrowRight className="w-8 h-8 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-75" />
    </Link>
  );
};

export default EventItem;
