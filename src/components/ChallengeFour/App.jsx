import Contact from "./Contact";
import "./../../Styling/ChallengeFour.css";

const App = () => {
  return (
    <div className="contact">
      <Contact
        name="John Doe"
        contact="123-456-7890"
        email="johndoe@gmail.com"
      />
      <Contact
        name="Jane Smith"
        contact="987-654-3210"
        email="janesmith@gmail.com"
      />
      <Contact
        name="Alice Johnson"
        contact="555-123-4567"
        email="alicejohnson@gmail.com"
      />
      <Contact
        name="Bob Brown"
        contact="444-987-6543"
        email="bobbrown@gmail.com"
      />
    </div>
  );
};

export default App;
