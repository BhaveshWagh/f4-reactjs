import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // we can also do it like this
  const redColor = { color: "red" };
  return (
    <>
      <h1>Namaste React</h1>
      <h2 style={{ color: "yellow" }}>Namaste Javascript</h2>
      <h3 style={redColor}>Counter {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}

export default App;
