import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook
  // we can also do it like this
  const redColor = { color: "red" };
  return (
    <div className="container">
      <h1>Namaste React</h1>
      <h2 style={{ color: "yellow" }}>Namaste Javascript</h2>
      <h3 style={redColor}>Counter {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
      <button
        onClick={() => navigate("/form")}
        style={{ backgroundColor: "gray", color: "white", marginInline: "5px" }}
      >
        Navigate to form Page
      </button>
    </div>
  );
}

export default App;
