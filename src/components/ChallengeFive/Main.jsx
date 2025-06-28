const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    ingredients.push(ingredient);
    // console.log(ingredients);
  };

  return (
    <main>
      <form className="ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g Oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button type="save">Add Ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
};

export default Main;
