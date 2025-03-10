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
      if (window.innerWidth > 1140) {
        // 1140px is the breakpoint for navbar-expand-xl
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
      className={`logo-nav navbar sticky-top navbar-expand-xl ${
        isNavOpen ? "navbar-expanded" : ""
      }`}
    >
      <Link
        to="/about"
        onClick={props.handleScrollTop}
        className="navbar-brand"
      >
        <Logo logo="/assets/media/images/francois-dion-logo.png" />
      </Link>
      <Link
        className="language header-element nav-item nav-link text-white"
        style={{ borderBottom: "none" }}
      >
        <LanguageSelector onLanguageChange={closeNav} />
      </Link>

      <button
        className={`navbar-toggler d-xl-none` + (isNavOpen ? " open" : "")}
        type="button"
        onClick={toggleNav}
        aria-controls="navbarNavAltMarkup"
        aria-label="Toggle navigation"
        style={{
          color: isNavOpen ? "#000" : "#fff",
          border: "none",
          borderRadius: "12px",
          padding: "5px 8px",
          outline: "none",
          transition: "background-color 0.3s, color 0.3s",
          boxShadow: "none",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={`hamburger ${isNavOpen ? "open" : ""}`}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </button>

      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNavAltMarkup"
      >
        <ul
          className={`navbar-nav mx-auto d-flex justify-content-between ${
            isNavOpen ? "flex-column" : ""
          }`}
        >
          <li>
            <Link
              className="experience header-element nav-item nav-link mx-3 text-white"
              to="/experience"
              onClick={closeNav}
            >
              {t("Experience")}
            </Link>
          </li>
          <li>
            <Link
              className="projects header-element nav-item nav-link mx-3 text-white"
              to="/projects"
              onClick={closeNav}
            >
              {t("Projects")}
            </Link>
          </li>
          <li>
            <Link
              className="contact header-element nav-item nav-link mx-3 text-white"
              to="/contact"
              onClick={closeNav}
            >
              {t("Contact")}
            </Link>
          </li>
          <li>
            <Link
              className="about header-element nav-item nav-link mx-3 text-white"
              to="/about"
              onClick={closeNav}
            >
              {t("About")}
            </Link>
          </li>
        </ul>

        <div className="navbar-nav ml-auto">
          <Link
            className="resume header-element nav-item nav-link text-white"
            to="/resume"
            onClick={closeNav}
          >
            {t("Resume")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
