import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <NavLink exact to="/">
            <img
              src="oddboll-logo.png"
              alt="oddboll logo"
              className="nav-logo"
            />
          </NavLink>
        </div>
        <div className="nav-list">
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink exact to="/reviews">
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
        </div>
      </nav>
    </div>
  );
};

export default Nav;
