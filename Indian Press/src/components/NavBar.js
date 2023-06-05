import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = (props) => {
  return (
    <div>
      
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <NavLink className="navbar-brand" to="/">
          Indian Press
        </NavLink>
        <button
          className="navbar-toggler q"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/business">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/general">
                General
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/science">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="http://localhost:3001/" className={`mx-4 text-${props.mode === "dark" ? "light" : "dark"} signupbtn`} style={{textDecoration:"none", fontWeight:"bolder"}}>Log in (Digi Notes)</NavLink>
        
        <div
          className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"
            }`}
        >
          
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
