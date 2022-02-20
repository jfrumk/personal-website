import React, { useEffect, useState } from "react";
import classes from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <h2 className={classes.header__content__logo}>JF</h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
          </ul>
        </nav>
        <div
          className={`${classes.header__content__toggle} ${
            menuOpen ? classes.menuOpen : ""
          }`}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            onClick={menuToggleHandler}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
