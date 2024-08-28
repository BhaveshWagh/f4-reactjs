import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import D from "./components/D";
// import useReducerHook from "./components/useReducerHook";
function App() {
  return (
    <>
      <useReducerHook />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/d" element={<D />} />
      </Routes>
    </>
  );
}

export default App;
