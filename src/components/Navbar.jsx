import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <Link to="/">Accueil</Link> |{" "}
      <Link to="/filieres">Filières</Link> |{" "}
      <Link to="/modules">Modules</Link>
    </nav>
  );
}

export default NavBar;

