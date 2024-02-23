import React from "react";

interface HomeProps {}

const HomeSection: React.FC<HomeProps> = ({}) => {
  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="sm:w-[80%] md:w-[60%] mx-auto">
        <p className="text-center text-xl sm:text-2xl mb-10">
          We are students of{" "}
          <span className="text-blue-500">Govt. Graphic Arts Institute</span>
        </p>
        <h1 className="text-3xl sm:text-5xl text-center">
          Computer Science & Technology, 2nd Shift - Batch 2024
        </h1>
      </div>
    </div>
  );
};

export default HomeSection;
