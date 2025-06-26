import Header from "./Header";
import Entry from "./Entry";
import "../../Styling/ChallengeThree.css";
import Data from "../../data/challengeThreeData.js";

const App = () => {
  const tourist = Data.map((item) => {
    return (
      <Entry
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="main-content">{tourist}</main>
    </>
  );
};

export default App;
