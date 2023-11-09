import React from "react";
import Skill from "../../components/Skill/Skill.js";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="short-intro-container">
        <h1 className="name">François Dion</h1>
        <h5 className="job-position"> Software Engineer </h5>
        <p className="short-introduction">
          I design and build software solutions for the web. I am passionate
          about exploring new technologies to stay at the forefront of
          innovation.
        </p>
        <h3 className="skills">Skills</h3>
        <h6 className="programming-languages">Programming languages</h6>
        <div className="skills-container">
          <Skill name="Python" />
          <Skill name="Java" />
          <Skill name="JavaScript" />
          <Skill name="C++" />
          <Skill name="Golang" />
        </div>
        <h6 className="web-frameworks"> Web frameworks / Web development </h6>
        <div className="skills-container">
          <Skill name="Django" />
          <Skill name="Flask" />
          <Skill name="React" />
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="JavaScript" />
          <Skill name="Docker" />
        </div>
        <h6 className="tools">Version control</h6>
        <div className="skills-container">
          <Skill name="GitLab" />
          <Skill name="GitHub" />
        </div>
        <h6 className="DevOps">DevOps</h6>
        <div className="skills-container">
          <Skill name="GitLab CI/CD" />
          <Skill name="Docker" />
        </div>
        <h6 className="databases"> Databases </h6>
        <div className="skills-container">
          <Skill name="PostgreSQL" />
        </div>
        <h6 className="os">OS</h6>
        <div className="skills-container">
          <Skill name="Windows" />
          <Skill name="Linux" />
        </div>
        <h6 className="Suites">Suites</h6>
        <div className="skills-container">
          <Skill name="Office" />
          <Skill name="Google" />
        </div>
        <h6 className="cloud">Cloud</h6>
        <div className="skills-container">
          <Skill name="AWS" />
        </div>
      </div>
      <div className="long-intro-container">
        <h3 className="who-am-i">Who am I</h3>
        <p className="description">
          I am a software engineer/developer from France with a passion for
          technology and innovation. My journey into the world of IT and
          software development began during my academic pursuits, where I honed
          my skills in web and software development. While I've recently
          graduated, I've already had the opportunity to contribute to
          significant projects in software and web development.
        </p>
        <p className="hobby">
          Beyond my professional life, I have been a glider pilot for 7 years
          now and have held my glider pilot licence (SPL) since 2018. Aviation
          is another area I am passionate about and is a hobby that provides me
          with a sense of freedom and adventure that complements my dedication
          to innovation and technology.
        </p>
        <p className="background">
          I was born in Paris in France and grew up in The Hague in the
          Netherlands. My multicultural background has instilled in me a global
          perspective and my experiences have taken me to various countries,
          including South Korea, Australia, and the Netherlands, further
          enriching my understanding of diverse cultures and international work
          environments.
        </p>
        <div className="explore-experience-container">
          <Link className="explore-experience" to="/experience">
            <div className="explore-my-experience-button">
              <span className="explore-experience-arrow">&#8594;&nbsp;</span>
              View my experience &nbsp;&#x1F30D;
            </div>
          </Link>
        </div>
        <div className="explore-projects-container">
          <Link className="explore-projects" to="/projects">
            <div className="explore-my-projects-button">
              <span className="explore-projects-arrow">&#8594;&nbsp;</span>
              Explore my projects &nbsp;&#x1F6A7;
            </div>
          </Link>
        </div>
        <div className="explore-resume-container">
          <Link className="explore-resume" to="/resume">
            <div className="explore-my-resume-button">
              <span className="explore-resume-arrow">&#8594;&nbsp;</span>
              View my resume &#127919;
            </div>
          </Link>
        </div>
        <div className="education-container">
          <h3 className="education">Education</h3>
          <div className="education-text">
            <p className="education-text-1">
              <span className="education-text-bold">
                <span className="education-school">
                  Institut Supérieur d’Électronique de Paris (ISEP) &#x1F1EB;&#x1F1F7;
                </span>
              </span>
              <br /> <i>Master in Software Engineering</i>
              <br />
              <span className="education-time-place">
                Sep 2018 - Sep 2023 Paris, France
              </span>
            </p>
            <p className="education-text-2">
              <span className="education-text-bold">
                <span className="education-school">
                  Griffith University &#x1F1E6;&#x1F1FA;
                </span>
              </span>
              <br /> <i>Computer Science, academic exchange</i>
              <br />
              <span className="education-time-place">
                Oct 2022 - Mar 2023 Brisbane, Australia
              </span>
            </p>
            <p className="education-text-3">
              <span className="education-text-bold">
                <span className="education-school">
                  INHA University &#x1F1F0;&#x1F1F7;
                </span>
              </span>
              <br /> <i>Computer Science, academic exchange</i>
              <br />
              <span className="education-time-place">
                Feb 2020 - Jul 2020 Incheon, South Korea
              </span>
            </p>
            <p className="education-text-4">
              <span className="education-text-bold">
                <span className="education-school">
                  French High School of The Netherlands &#x1F1F3;&#x1F1F1;
                </span>
              </span>
              <br />
              <span className="education-time-place">
                ... - Jun 2018 The Hague, Netherlands
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
