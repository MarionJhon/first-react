// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx"; 
import "./index.css";
// import "./App.css";
// import App from './App.jsx'

function Page() {
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

createRoot(document.getElementById("root")).render(<Page />);
