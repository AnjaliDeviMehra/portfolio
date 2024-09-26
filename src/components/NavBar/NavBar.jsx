import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import "../../styles/global.scss";
import menu from "../../assets/icons/menu.png";
import close from "../../assets/icons/close.png";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <section className="mobile-nav">
        <h1 className="mobile-nav__name">Anjali Devi</h1>
        <button className="menu" onClick={handleClick}>
          <img src={menu} alt="menu icon" className="menu__icon" />
        </button>
      </section>
      <div className={showMenu ? "nav-overlay" : "nav-overlay--hidden"}>
        <button
          className={showMenu ? "close" : "close--hidden"}
          onClick={handleClick}
        >
          <img src={close} alt="close icon" className="close__icon" />
        </button>
        <ul className="nav">
          <li className="nav__list-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
              to="#education"
            >
              Education
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
              to="#experience"
            >
              Experience
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>

      <section className="tablet-nav">
        <h1 className="tablet-nav__name">Anjali Devi</h1>

        <ul className="tablet-nav__list">
          <li className="tablet-nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "tablet-nav__link--active" : "tablet-nav__link"
              }
            >
              About
            </NavLink>
          </li>

          <li className="tablet-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "tablet-nav__link--active" : "tablet-nav__link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="tablet-nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "tablet-nav__link--active" : "tablet-nav__link"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};
