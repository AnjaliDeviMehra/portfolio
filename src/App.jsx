import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
