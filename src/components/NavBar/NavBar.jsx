import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import "../../styles/global.scss";

export const NavBar = () => {
  return (
    <>
      <button></button>
      <div className="mobile-nav">
        <NavLink to="/" className="nav__link">
          About
        </NavLink>
        <NavLink className="nav__link">Education</NavLink>
        <NavLink className="nav__link">Work Experience</NavLink>
        <NavLink className="nav__link">Projects</NavLink>
        <NavLink className="nav__link">Resume</NavLink>
      </div>
      <div className="nav">
        <NavLink to="/" className="nav__link">
          About
        </NavLink>
        <NavLink className="nav__link">Education</NavLink>
        <NavLink className="nav__link">Work Experience</NavLink>
        <NavLink className="nav__link">Projects</NavLink>
        <NavLink className="nav__link">Resume</NavLink>
      </div>
    </>
  );
};
