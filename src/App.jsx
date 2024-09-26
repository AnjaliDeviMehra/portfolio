import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
