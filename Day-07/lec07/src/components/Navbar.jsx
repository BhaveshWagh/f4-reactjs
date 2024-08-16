import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
