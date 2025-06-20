import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import "../index.css";

function ChallengeOne() {
  return (
    <>
      <div className="card">
        <Header />
        <hr className="divider" />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default ChallengeOne;
