import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "red",
      };

return (
<div>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          borderTop: "solid 1px",
          paddingTop: "1rem",
          textAlign: "center",
        }}
      >
        <Link to="/" style={linkStyle}>
          Start
        </Link>{" "}
        |{" "}
        <Link to="/family" style={linkStyle}>
          Family
        </Link>{" "}
        |{" "}
        <Link to="/education" style={linkStyle}>
          Education
        </Link>

    </nav> 
</div>
);
}
    export default Navbar