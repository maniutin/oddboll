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
          <div className="nav-link">
            <NavLink activeStyle={{ textDecoration: "underline" }} exact to="/">
              Home
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              exact
              to="/reviews"
            >
              Reviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              exact
              to="/interviews"
            >
              Interviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              exact
              to="/listen"
            >
              Listen
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              exact
              to="/3-word-reviews"
            >
              3-Word Reviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              exact
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
