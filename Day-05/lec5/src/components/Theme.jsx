import { useState } from "react";
const Theme = () => {
  const [theme, setTheme] = useState("dark");

  function darkModeHandler() {
    setTheme("dark");
  }
  function lightModeHandler() {
    setTheme("light");
  }
  let styleObj =
    theme === "light"
      ? { backgroundColor: "lightBlue", height: "800px" }
      : { backgroundColor: "darkGray", height: "800px" };

  return (
    <div style={styleObj}>
      <div onClick={darkModeHandler}>🌙</div>

      <div onClick={lightModeHandler}>☀️</div>
    </div>
  );
};

export default Theme;
