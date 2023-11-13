import React from "react";
import ProjectComponent from "../../components/Project/ProjectComponent";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";
import "./project.css";

const Project = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="project-item-container">
        <h1>François Dion</h1>
        <h2 className="project-all-project">{t("Projects")}</h2>
        <div className="project-item">
          <div className="project-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white", paddingRight: "25px"}}>{t("Year")}</th>
                  <th style={{ color: "white" }}>{t("Project")}</th>
                  <th style={{ color: "white" }}>{t("Made-at")}</th>
                  <th style={{ color: "white" }}>{t("Built-with")}</th>
                  <th style={{ color: "white" }}>{t("Link")}</th>
                </tr>
              </thead>
              <ProjectComponent
                year="2023"
                project={t("Portfolio")}
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill key="1" name="React" />,
                  <Skill key="2" name="Bootstrap" />,
                  <Skill key="3" name="CSS" />,
                  <Skill key="5" name="JavaScript" />,
                  <Skill key="6" name="BrowserStack" />,
                  <Skill key="7" name="Flask" />,
                  <Skill key="8" name="AWS" />,
                  <Skill key="9" name="Docker" />,
                  <Skill key="10" name="NGINX" />,
                ]}
                link="https://github.com/francois-71/portfolio"
                show_link="github.com/francois-71/portfolio"
              />
              <ProjectComponent
                year="2023"
                project={t("Api-development-monitoring-interface")}
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
                  <Skill key="10" name="Rancher" />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2023"
                project={t("Bouncing-ball-game")}
                made_at="Griffith University (Brisbane, Australia)"
                built_with={[
                  <Skill key="1" name="Javascript" />,
                  <Skill key="2" name="p5.js" />,
                ]}
                link=""
                show_link="&#x1F510;"
                
              />
              <ProjectComponent
                year="2022"
                project={t("Front-end-development-of-a-web-application")}
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
                year="2022"
                project={t("GIMP-like-image-editor")}
                made_at="ISEP (Paris, France)"
                built_with={[
                  <Skill key="1" name="C++" />,
                  <Skill key="2" name="OpenCV" />,
                ]}
                link="https://github.com/francois-71/gimpsep-opencv_caf/"
                show_link="github.com/francois-71/gimpsep-opencv_caf/"
              />
              <ProjectComponent
                year="2021"
                project={t("Tinder-Autoclicker-With-Facial-Eye-Recognition-And-Pixel-Analysis")}
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill key="1" name="Java" />,
                  <Skill key="2" name="OpenCV" />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2021"
                project={t("Mr-Jack-Pocket-Game-Development")}
                made_at="ISEP (Paris, France)"
                built_with={[<Skill key="1" name="Java" />]}
                link="https://github.com/francois-71/MrJackPocketFPW"
                show_link="github.com/francois-71/MrJackPocketFPW"
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
