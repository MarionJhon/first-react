import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  const handleSubmit = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const getRecipe = () => {
    setRecipeShown((prevShow) => !prevShow);
  };

  return (
    <main>
      <div className="main-container">
        <form className="ingredient-form" action={handleSubmit}>
          <input
            type="text"
            placeholder="e.g Oregano"
            aria-label="Add Ingredient"
            name="ingredient"
          />
          <button type="save">Add Ingredient</button>
        </form>
        {ingredients.length > 0 && <IngredientsList getRecipe={getRecipe} ingredients={ingredients}/>}
        {recipeShown && <ClaudeRecipe />}
      </div>
    </main>
  );
};

export default Main;
