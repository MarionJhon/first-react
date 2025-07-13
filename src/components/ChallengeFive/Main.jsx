import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const handleSubmit = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
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
        {ingredients.length > 0 &&<section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientList}
          </ul>
          {ingredients.length === 3 && <div className="recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button>Get a recipe</button>
          </div>}
        </section>}
      </div>
    </main>
  );
};

export default Main;
