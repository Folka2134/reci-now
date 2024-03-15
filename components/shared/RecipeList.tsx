import React from "react";

import { dummyData } from "../../dummyData";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      {dummyData.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
