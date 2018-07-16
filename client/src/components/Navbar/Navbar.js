import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav style={{background: "#e6f2ff"}}>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">
      LifeHawk
    </div>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/home" 
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/health"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/health" className="nav-link">
            My Health
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/info"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/info" className="nav-link">
            My Info
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/login"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  </nav>
);

export default Navbar;
