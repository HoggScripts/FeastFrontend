import { useFetchRecipes } from "@/hooks/useRecipeActions";
import RecipeCard from "../recipes/detailed-card/RecipeCard";

function ViewRecipesPage() {
  const { data: recipes, error, isLoading } = useFetchRecipes();

  console.log(recipes);

  if (isLoading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>Error fetching recipes: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-12 min-h-screen p-4">
      <div className="col-span-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recipes.map((recipe) => (
          <div className="max-w-xs w-full" key={recipe.id}>
            <RecipeCard isLoadedRecipe={true} recipe={recipe} key={recipe.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRecipesPage;
