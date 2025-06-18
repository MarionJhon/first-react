// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import "./index.css";
// import "./App.css";
// import App from './App.jsx'

function MainContent() {
  return (
    <>
      <main>
        <h1>Reasons I'm excited to learn react</h1>
        <ol>
          <li>
            React is a popular library, so i will able to fit in with all the
            coolest dev's out there! 😎
          </li>
          <li>
            I am more likely to get a job as a front end developer if i know
            react
          </li>
        </ol>
      </main>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2025 Agapay development. All right reserved.</small>
    </footer>
  );
}

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
