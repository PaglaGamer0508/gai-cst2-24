import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EventItemProps {
  url: string;
  eventName: string;
  eventState: "upcoming" | "ended";
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
      className="group flex items-center justify-between border-2 border-gray-400 py-3 px-7 rounded-2xl hover:border-blue-500"
    >
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl group-hover:text-blue-500">{eventName}</h1>
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
        </div>
        <p className="text-sm font-semibold text-gray-300">{eventDate}</p>
      </div>
      <ArrowRight className="group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-75" />
    </Link>
  );
};

export default EventItem;
