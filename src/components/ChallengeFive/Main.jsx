import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import {getRecipeFromMistral} from "./ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const getRecipe = async () => {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe);
  }

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
        {recipe && <ClaudeRecipe recipe={recipe}/>}
      </div>
    </main>
  );
};

export default Main;
