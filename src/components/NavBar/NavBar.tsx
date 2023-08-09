import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/about">
        About
      </NavLink>
      <NavLink className="navlink" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;
