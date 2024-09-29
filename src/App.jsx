import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
