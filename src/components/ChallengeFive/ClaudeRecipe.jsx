import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section className="suggested-recipe-container">
      <h2>Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
