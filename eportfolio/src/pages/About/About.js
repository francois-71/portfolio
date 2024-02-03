import React from "react";
import Skill from "../../components/Skill/Skill.js";
import { useTranslation } from "react-i18next";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

  const colors = {
    constColorDev: {
      color: "orange",
      BackgroundColor: "rgba(255, 165, 0, 0.1)",
    },
    constColorDefault: {
      color: "rgb(94 234 212)",
      BackgroundColor: "rgba(45, 212, 191, 0.1)",
    },
  };

  return (
    <div className="container">
      <div className="short-intro-container">
        <div className="short-intro-text-images">
          <div className="short-intro-text-images-left">
            <h1 className="name">François Dion</h1>
            <h5 className="job-position">{t("Position")}</h5>
            <p className="small-presentation-text">{t("Small-Presentation")}</p>
          </div>
          <div className="short-intro-text-images-right">
            <img
              className="francois-image"
              src="assets/media/images/you_download_my_picture_because_I_am_cute.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="short-introduction">
          <div className="explore-contact-container">
            <Link className="explore-contact" to="/contact">
              <div className="explore-contact-button">
                <span className="explore-contact-arrow">&#8594;&nbsp;</span>
                {t("Lets-Talk")} &#x1F4E7;
              </div>
            </Link>
          </div>
        </div>
        <h3 className="skills">{t("Skills")}</h3>
        <h6 className="programming-languages">{t("Programming-Languages")}</h6>
        <div className="skills-container-about">
          <Skill name="Python" constColor={colors.constColorDefault} />
          <Skill name="Java" constColor={colors.constColorDefault} />
          <Skill name="JavaScript" constColor={colors.constColorDefault} />
          <Skill name="C++" constColor={colors.constColorDefault} />
          <Skill name="Golang" constColor={colors.constColorDefault} />
        </div>
        <h6 className="web-frameworks">{t("Web-Frameworks")}</h6>
        <div className="skills-container-about">
          <Skill name="Django" constColor={colors.constColorDefault} />
          <Skill name="Flask" constColor={colors.constColorDefault} />
          <Skill name="Gin" constColor={colors.constColorDefault} />
          <Skill name="React" constColor={colors.constColorDefault} />
          <Skill name="HTML" constColor={colors.constColorDefault} />
          <Skill name="CSS" constColor={colors.constColorDefault} />
        </div>
        <h6 className="tools">{t("Version-Control")}</h6>
        <div className="skills-container-about">
          <Skill name="GitLab" constColor={colors.constColorDefault} />
          <Skill name="GitHub" constColor={colors.constColorDefault} />
        </div>
        <h6 className="DevOps">{t("DevOps")}</h6>
        <div className="skills-container-about">
          <Skill name="GitLab CI/CD" constColor={colors.constColorDefault} />
          <Skill name="Docker" constColor={colors.constColorDefault} />
        </div>
        <h6 className="databases"> {t("Databases")} </h6>
        <div className="skills-container-about">
          <Skill name="PostgreSQL" constColor={colors.constColorDefault} />
          <Skill name="MongoDB" constColor={colors.constColorDefault} />
        </div>
        <h6 className="os">{t("OS")}</h6>
        <div className="skills-container-about">
          <Skill name="Windows" constColor={colors.constColorDefault} />
          <Skill name="Linux" constColor={colors.constColorDefault} />
        </div>
        <h6 className="Suites">{t("Suites")}</h6>
        <div className="skills-container-about">
          <Skill name="Office" constColor={colors.constColorDefault} />
          <Skill name="Google" constColor={colors.constColorDefault} />
        </div>
        <h6 className="cloud">{t("Cloud")}</h6>
        <div className="skills-container-about">
          <Skill name="AWS" constColor={colors.constColorDefault} />
        </div>
      </div>
      <div className="long-intro-container">
        <h3 className="who-am-i">{t("Who-Am-I")}</h3>
        <p className="description">
          {t("Full-Presentation.Part-1-1")}&nbsp;
          <span className="description-strong">
            {t("Full-Presentation.Part-1-2")}
          </span>{" "}
          {t("Full-Presentation.Part-1-3")}
        </p>
        <p className="hobby">
          {t("Full-Presentation.Part-2-1")}&nbsp;
          <span className="description-strong">
            {t("Full-Presentation.Part-2-2")}
          </span>{" "}
          {t("Full-Presentation.Part-2-3")}
        </p>
        <p className="background">{t("Full-Presentation.Part-3")}</p>
        <div className="social-media-container">
          <div className="social-links-content">
            <div className="social-links-about">
              <a
                className="linkedin-logo"
                href="https://www.linkedin.com/in/francoisdion71/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a className="github-logo" href="https://github.com/francois-71">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                class="instagram-logo"
                href="https://www.instagram.com/francois_dn/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="explore-experience-container">
          <Link className="explore-experience" to="/experience">
            <div className="explore-my-experience-button">
              <span className="explore-experience-arrow">&#8594;&nbsp;</span>
              {t("View-my-experiences")} &nbsp;&#x1F30D;
            </div>
          </Link>
        </div>
        <div className="explore-projects-container">
          <Link className="explore-projects" to="/projects">
            <div className="explore-my-projects-button">
              <span className="explore-projects-arrow">&#8594;&nbsp;</span>
              {t("Explore-my-projects")} &nbsp;&#x1F6A7;
            </div>
          </Link>
        </div>
        <div className="explore-resume-container">
          <Link className="explore-resume" to="/resume">
            <div className="explore-my-resume-button">
              <span className="explore-resume-arrow">&#8594;&nbsp;</span>
              {t("View-my-resume")} &#127919;
            </div>
          </Link>
        </div>
        <div className="education-container">
          <h3 className="education">{t("Education")}</h3>
          <div className="education-text">
            <p className="education-text-1">
              <span className="education-text-bold">
                <span className="education-school">
                  Institut Supérieur d’Électronique de Paris (ISEP)
                  &#x1F1EB;&#x1F1F7;
                </span>
              </span>
              <br /> <i>{t("Master-in-Software-Engineering")}</i>
              <br />
              <span className="education-time-place">
                {t("Month-half.January")} 2018 - {t("Month-half.September")}{" "}
                2023 {t("Paris")}, {t("France")}
              </span>
            </p>
            <p className="education-text-2">
              <span className="education-text-bold">
                <span className="education-school">
                  Griffith University &#x1F1E6;&#x1F1FA;
                </span>
              </span>
              <br />{" "}
              <i>
                {t("Computer-Science")}, {t("Academic-exchange")}
              </i>
              <br />
              <span className="education-time-place">
                {t("Month-half.October")} 2022 - {t("Month-half.March")} 2023{" "}
                {t("Brisbane")}, {t("Australia")}
              </span>
            </p>
            <p className="education-text-3">
              <span className="education-text-bold">
                <span className="education-school">
                  INHA University &#x1F1F0;&#x1F1F7;
                </span>
              </span>
              <br />{" "}
              <i>
                {t("Computer-Science")}, {t("Academic-exchange")}
              </i>
              <br />
              <span className="education-time-place">
                {t("Month-half.February")} 2020 - {t("Month-half.July")} 2020{" "}
                {t("Incheon")}, {t("South-Korea")}
              </span>
            </p>
            <p className="education-text-4">
              <span className="education-text-bold">
                <span className="education-school">
                  {t("High-School")} &#x1F1F3;&#x1F1F1;
                </span>
              </span>
              <br />
              <span className="education-time-place">
                ... - {t("Month-half.June")} 2018 {t("The-Hague")},{" "}
                {t("Netherlands")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
