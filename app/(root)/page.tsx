import { RecipeMenu } from "@/components/RecipeMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RecipeMenu />
    </main>
  );
}
