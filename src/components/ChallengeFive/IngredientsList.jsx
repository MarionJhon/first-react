const IngredientsList = (props) => {

  const ingredientList = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section>
      <h2 className="title">Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientList}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
