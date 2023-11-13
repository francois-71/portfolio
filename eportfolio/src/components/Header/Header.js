import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = (props) => {
  const { t } = useTranslation();
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
      className={`navbar sticky-top navbar-expand-xl px-5 ${
        isNavOpen ? "navbar-expanded" : ""
      }`}
    >
      <Link
        to="/about"
        onClick={props.handleScrollTop}
        className="navbar-brand"
      >
        <Logo logo="/assets/media/images/francois-dion-logo.png" />
        {/* Replace the above line with the correct path and component for your logo */}
      </Link>
      <Link
        className="header-element nav-item nav-link mx-3 text-white"
        style={{ borderBottom: "none" }}
      >
        <LanguageSelector onLanguageChange={closeNav} />
      </Link>

      <button
        className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
        type="button"
        onClick={toggleNav}
        aria-controls="navbarNavAltMarkup"
        aria-label="Toggle navigation"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <span className="navbar-toggler-icon"
        style={{paddingLeft: "30px"}}></span>
      </button>

      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNavAltMarkup"
      >
        <ul
          className={`navbar-nav mx-auto d-flex justify-content-evenly${
            isNavOpen ? "flex-column" : ""
          }`}
        >
          <li>
            <Link
              className="about header-element nav-item nav-link mx-3 text-white"
              to="/about"
              onClick={closeNav}
            >
              &#x1F9B4; {t("About")}
            </Link>
          </li>
          <li>
            <Link
              className="experience header-element nav-item nav-link mx-3 text-white"
              to="/experience"
              onClick={closeNav}
            >
              &#x1F30D; {t("Experience")}
            </Link>
          </li>
          <li>
            <Link
              className="projects header-element nav-item nav-link mx-3 text-white"
              to="/projects"
              onClick={closeNav}
            >
              &#x1F6A7; {t("Projects")}
            </Link>
          </li>
          <li>
            <Link
              className="contact header-element nav-item nav-link mx-3 text-white"
              to="/contact"
              onClick={closeNav}
            >
              &#x1F4E7; {t("Contact")}
            </Link>
          </li>
        </ul>

        <div className="navbar-nav ml-auto">
          <Link
            className="resume header-element nav-item nav-link text-white"
            to="/resume"
            onClick={closeNav}
          >
            &#127919; {t("Resume")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
