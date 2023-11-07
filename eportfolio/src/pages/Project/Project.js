import React from "react";
import ProjectComponent from "../../components/Project/ProjectComponent";
import Skill from "../../components/Skill/Skill";
import "./project.css";

const Project = () => {
  return (
    <div className="container">
      <div className="project-item-container">
        <h1>François Dion</h1>
        <h2 className="project-all-project">Projects</h2>
        <div className="project-item">
          <div className="project-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white" }}>Year</th>
                  <th style={{ color: "white" }}>Project</th>
                  <th style={{ color: "white" }}>Made at</th>
                  <th style={{ color: "white" }}>Built with</th>
                  <th style={{ color: "white" }}>Link</th>
                </tr>
              </thead>
              <ProjectComponent
                year="2023"
                project="Portfolio"
                made_at=""
                built_with={[
                  <Skill key="1" name="React" />,
                  <Skill key="2" name="Bootstrap" />,
                  <Skill key="3" name="CSS" />,
                  <Skill key="4" name="HTML" />,
                  <Skill key="5" name="JavaScript" />,
                  <Skill key="6" name="BrowserStack" />,
                  <Skill key="7" name="Flask" />,
                ]}
                link="https://github.com/francois-71/portfolio"
                show_link="github.com/francois-71/portfolio"
              />
              <ProjectComponent
                year="2023"
                project="API development & monitoring interface"
                made_at="Devoteam Innovative Tech (Paris, France)"
                built_with={[
                  <Skill key="1" name="Python" />,
                  <Skill key="2" name="Django" />,
                  <Skill key="3" name="Django HTML" />,
                  <Skill key="4" name="CSS" />,
                  <Skill key="5" name="PostgreSQL" />,
                  <Skill key="6" name="Docker" />,
                  <Skill key="7" name="GitLab CI/CD" />,
                  <Skill key="8" name="Linux" />,
                  <Skill key="9" name="NGINX" />,
                ]}
                link=""
                show_link="Internal project"
              />
              <ProjectComponent
                year="2023"
                project="Bouncing ball Game"
                made_at="Griffith University (Brisbane, Australia)"
                built_with={[
                  <Skill key="1" name="Javascript" />,
                  <Skill key="2" name="p5.js" />,
                ]}
                link=""
                show_link=""
              />
              <ProjectComponent
                year="2022"
                project="Front-end development of a web app"
                made_at="Stations-e (Paris, France)"
                built_with={[
                  <Skill key="1" name="HTML" />,
                  <Skill key="2" name="CSS" />,
                  <Skill key="3" name="Javascript" />,
                ]}
                link="https://stations-e.shop"
                show_link="stations-e.shop"
              />
              <ProjectComponent
                year="2021"
                project="Tinder Autoclicker with Facial, Eye Recognition and pixel analysis"
                made_at=""
                built_with={[
                  <Skill key="1" name="Java" />,
                  <Skill key="2" name="OpenCV" />,
                ]}
                link=""
                show_link=""
              />
              <ProjectComponent
                year="2021"
                project="Mr Jack Pocket Game Development"
                made_at="ISEP (Paris, France)"
                built_with={[<Skill key="1" name="Java" />]}
                link=""
                show_link=""
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
