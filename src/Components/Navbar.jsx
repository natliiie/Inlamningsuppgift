import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  // const linkStyle = {
  //     textDecoration: "none",
  //     color: "red",
  //   };

  return (
    <div>
      <nav className="navStyle flexEnd">
        <Link to="/">Welcome to my page</Link>
        <Link to="/family">Family</Link>
        <Link to="/education">Education</Link>
      </nav>
    </div>
  );
};
export default Navbar;
