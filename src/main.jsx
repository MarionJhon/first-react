import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ChallengeOne from "./components/ChallengeOne.jsx";
// import App from "./components/ChallengeTwo/App.jsx";
import App from "./components/ChallengeThree/App.jsx";
// import App from "./components/ChallengeFour/App.jsx"

function Page() {
  return (
    <StrictMode> 
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Page />);
