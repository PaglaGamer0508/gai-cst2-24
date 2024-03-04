import EventItem from "@/components/EventItem";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events - GAI-CST2-24",
};

const page: React.FC = ({}) => {
  return (
    <div className="min-h-[70vh]">
      <div className="sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto p-3">
        <h1 className="text-2xl text-blue-500 mb-2">Events</h1>
        {/* Pitha Festival */}
        <div className="flex flex-col gap-4 pt-3">
          <EventItem
            eventState="ended"
            eventName="Pitha Festival"
            eventDate="March 1, 2024"
            url="/events/pitha-festival"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
