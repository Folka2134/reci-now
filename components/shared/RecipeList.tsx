import React from "react";

import { dummyData } from "../../dummyData";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
  return (
    <div className="mt-6 flex gap-4">
      {dummyData.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
