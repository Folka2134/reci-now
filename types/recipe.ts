export type Recipes = Recipe[];

export type Recipe = {
  id: number;
} & RecipeData;

export type RecipeData = {
  title: string;
  description: string;
  images: string[];
  createdBy: string
  createdAt: string;
  updatedAt: string;
}