import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Navbar.module.scss";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
    console.log(`${menuOpen} ${size.width}`);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <h2>JF</h2>
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/">Skills</Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${classes.header__content__toggle} ${
            menuOpen ? classes.menuOpen : ""
          }`}
        >
          {menuOpen ? (
            <FaTimes onClick={menuToggleHandler} />
          ) : (
            <FaBars onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
