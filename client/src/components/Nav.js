import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink exact to="/Reviews">
          Reviews
        </NavLink>

        <NavLink exact to="/interviews">
          Interviews
        </NavLink>

        <NavLink exact to="/listen">
          Listen
        </NavLink>

        <NavLink exact to="/3-word-reviews">
          3-Word Reviews
        </NavLink>

        <NavLink exact to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
