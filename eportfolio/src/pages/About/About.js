import React from "react";
import Skill from "../../components/Skill/Skill.js";
import { useTranslation } from "react-i18next";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="short-intro-container">
        <h1 className="name">François Dion</h1>
        <h5 className="job-position">{t("Position")}</h5>
        <div className="short-introduction">
          {t("Small-Presentation")}
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
        <div className="skills-container">
          <Skill name="Python" />
          <Skill name="Java" />
          <Skill name="JavaScript" />
          <Skill name="C++" />
          <Skill name="Golang" />
        </div>
        <h6 className="web-frameworks">{t("Web-Frameworks")}</h6>
        <div className="skills-container">
          <Skill name="Django" />
          <Skill name="Flask" />
          <Skill name="React" />
          <Skill name="HTML" />
          <Skill name="CSS" />
        </div>
        <h6 className="tools">{t("Version-Control")}</h6>
        <div className="skills-container">
          <Skill name="GitLab" />
          <Skill name="GitHub" />
        </div>
        <h6 className="DevOps">{t("Devops")}</h6>
        <div className="skills-container">
          <Skill name="GitLab CI/CD" />
          <Skill name="Docker" />
        </div>
        <h6 className="databases"> {t("Databases")} </h6>
        <div className="skills-container">
          <Skill name="PostgreSQL" />
        </div>
        <h6 className="os">{t("OS")}</h6>
        <div className="skills-container">
          <Skill name="Windows" />
          <Skill name="Linux" />
        </div>
        <h6 className="Suites">{t("Suites")}</h6>
        <div className="skills-container">
          <Skill name="Office" />
          <Skill name="Google" />
        </div>
        <h6 className="cloud">{t("Cloud")}</h6>
        <div className="skills-container">
          <Skill name="AWS" />
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
          <span className="description-strong">{t("Full-Presentation.Part-2-2")}</span>{" "}
          {t("Full-Presentation.Part-2-3")}
        </p>
        <p className="background">
        {t("Full-Presentation.Part-3")}
        </p>
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
              <br /> <i>{(t("Master-in-Software-Engineering"))}</i>
              <br />
              <span className="education-time-place">
                {t("Month-half.January")} 2018 - {t("Month-half.September")} 2023 {t("Paris")}, {t("France")}
              </span>
            </p>
            <p className="education-text-2">
              <span className="education-text-bold">
                <span className="education-school">
                  Griffith University &#x1F1E6;&#x1F1FA;
                </span>
              </span>
              <br /> <i>{t("Computer-Science")}, {t("Academic-exchange")}</i>
              <br />
              <span className="education-time-place">
              {t("Month-half.October")} - {t("Month-half.March")} 2023 {t("Brisbane")}, {t("Australia")}
              </span>
            </p>
            <p className="education-text-3">
              <span className="education-text-bold">
                <span className="education-school">
                  INHA University &#x1F1F0;&#x1F1F7;
                </span>
              </span>
              <br /> <i>{t("Computer-Science")}, {t("Academic-exchange")}</i>
              <br />
              <span className="education-time-place">
              {t("Month-half.February")} 2020 - {t("Month-half.July")} 2020 {t("Incheon")}, {t("South-Korea")}
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
                ... - {t("Month-half.June")} 2018 {t("The-Hague")}, {t("Netherlands")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
