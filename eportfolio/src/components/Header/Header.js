import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    // Event listener to reset alignment when the screen size is larger
    const handleResize = () => {
      if (window.innerWidth > 991.98) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg px-5 ${
        isNavOpen ? "navbar-expanded" : ""
      }`}
    >
      <Link to="/about">
        <Logo logo="/assets/media/images/francois-dion-logo.png"
         />
      </Link>

      <button
        className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
        type="button"
        onClick={toggleNav}
        aria-controls="navbarNavAltMarkup"
        aria-label="Toggle navigation"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNavAltMarkup"
      >
        <ul
          className={`navbar-nav mx-auto ${
            isNavOpen ? "flex-column align-items-center" : ""
          }`}
        >
          <li>
            <Link
              className="header-element nav-item nav-link mx-5 text-white"
              to="/about"
              onClick={closeNav}
            >
              01. About
            </Link>
          </li>
          <li>
            <Link
              className="header-element nav-item nav-link mx-5 text-white"
              to="/experience"
              onClick={closeNav}
            >
              02. Experience
            </Link>
          </li>
          <li>
            <Link
              className="header-element nav-item nav-link mx-5 text-white"
              to="/projects"
              onClick={closeNav}
            >
              03. Projects
            </Link>
          </li>
          <li>
            <Link
              className="header-element nav-item nav-link mx-5 text-white"
              to="/contact"
              onClick={closeNav}
            >
              04. Contact
            </Link>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <Link
              className="header-element nav-item nav-link  text-white"
              to="/resume"
              onClick={closeNav}
            >
              Resume
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
