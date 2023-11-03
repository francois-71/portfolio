import React from "react";
import Skill from "../../components/Skill/Skill.js";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="short-intro-container">
        <h1 className="name">François Dion</h1>
        <h5 className="job-position">
          {" "}
          Python DevOps Developer at Devoteam Innovative Tech{" "}
        </h5>
        <p className="short-introduction">
          I build and develop software solutions, leveraging my expertise in
          programming, problem-solving, and effective communication to drive
          innovative projects and foster collaborative teamwork.
        </p>
        <h3 className="skills">Skills</h3>
        <h6 className="programming-languages">Programming languages</h6>
        <div className="skills-container">
          <Skill name="Python" />
          <Skill name="Java" />
          <Skill name="JavaScript" />
          <Skill name="Notions of Go" />
          <Skill name="Notions of C++" />
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
      </div>
      <div className="long-intro-container">
        <h3 className="who-am-i">Who am I</h3>
        <p className="description">
          I am a dynamic young professional with a passion for technology and
          innovation. My journey into the world of IT and software development
          began during my academic pursuits, where I honed my skills in web and
          software development. While I've recently graduated, I've already had
          the opportunity to contribute to significant projects in software and
          web development, including a transformative internship that led to a
          full-time role as a Python DevOps Developer at Devoteam Innovative
          Tech.
        </p>
        <p className="hobby">
          Beyond my professional life, I am an avid glider pilot with seven
          years of experience. My hobby of glider piloting provides a sense of
          freedom and adventure that complements my dedication to innovation and
          technology.
        </p>
        <p className="background">
          Raised in The Hague, Netherlands, and born in Paris, my multicultural
          background has instilled in me a global perspective. My experiences
          have taken me to various countries, including South Korea, Australia,
          and the Netherlands, further enriching my understanding of diverse
          cultures and international work environments.
        </p>
        <p className="mission">
          I take pride in my ability to solve complex problems, my eagerness to
          explore new horizons, and my unwavering dedication to achieving
          excellence in everything I do. My mission is to continue innovating
          and pushing the boundaries of technology while making positive
          contributions to the field and the organizations I collaborate with.
        </p>
        <div className="explore-projects-container">
          <Link className="explore-projects" to="/projects">
            <div className="explore-my-projects-button">
              <span className="explore-projects-arrow">&#8594;&nbsp;</span>Explore my projects
            </div>
          </Link>
        </div>
        <div className="explore-experience-container">
          <Link className="explore-experience" to="/experience">
            <div className="explore-my-experience-button">
              <span className="explore-experience-arrow">&#8594;&nbsp;</span>View my experience
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
