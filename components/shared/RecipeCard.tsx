import { Recipe } from "@/types/recipe";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="">
      <Link href={`/recipe/${recipe.id}`}>
        <CardHeader className="p-2">
          <Image
            className="stretch"
            src={recipe.images[0]}
            alt={recipe.title}
            width={200}
            height={200}
          />
        </CardHeader>
        <CardContent className="px-3 py-1">
          <CardTitle className="text-md">{recipe.title}</CardTitle>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between p-2">
        <Button variant="outline">Like</Button>
        <Button variant="outline">Save</Button>
      </CardFooter>
    </Card>
  );
};
