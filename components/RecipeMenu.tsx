import React from "react";
import { RecipeList } from "./shared/RecipeList";
import { Searchbar } from "./shared/Searchbar";
import { Button } from "./ui/button";
import Link from "next/link";
import { CategoryList } from "./CategoryList";

export const RecipeMenu = () => {
  return (
    <>
      <Link href={`/recipe/create`}>
        <Button variant={"default"} className="text-xs">
          Create Recipe
        </Button>
      </Link>
      <Searchbar />
      <CategoryList />
      <RecipeList />
    </>
  );
};
