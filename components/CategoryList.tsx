import React from "react";

import { dummyCategories } from "@/dummyData";

export const CategoryList = () => {
  return (
    <div className="mt-2 flex gap-5 px-2">
      {dummyCategories.map((category) => (
        <span
          key={category}
          className="cursor-pointer text-sm transition-transform duration-75 hover:scale-105 hover:text-[#1B7616]"
        >
          {category}
        </span>
      ))}
    </div>
  );
};
