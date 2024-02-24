import React from "react";

const HeaderSection: React.FC = ({}) => {
  return (
    <div className="min-h-[55vh] grid place-items-center">
      <div className="max-w-[80%] md:w-[60%] mx-auto">
        <p className="text-center text-xl sm:text-2xl mb-10">
          We are students of{" "}
          <span className="text-blue-500">Govt. Graphic Arts Institute</span>
        </p>
        <h1 className="text-3xl sm:text-5xl text-center leading-10">
          Computer Science & Technology, 2nd Shift - Batch 2024
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;
