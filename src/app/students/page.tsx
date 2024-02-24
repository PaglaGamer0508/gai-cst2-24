import React from "react";
import { students } from "@/lib/students";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Students - GAI-CST2-24",
};

const page: React.FC = () => {
  return (
    <div className="p-3">
      <h1 className="text-3xl text-blue-500 text-center mb-4">Students</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Serial No.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#191919]" : "bg-[#333333]"}
            >
              <td className="border px-4 py-2 text-center">{student.roll}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td
                className={`border px-4 py-2 text-center ${
                  student.gender === "Male" ? "text-blue-500" : "text-pink-500"
                }`}
              >
                {student.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
