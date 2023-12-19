import React from "react";
import ProjectComponent from "../../components/Project/ProjectComponent";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./project.css";

const Project = () => {
  const { t } = useTranslation();

  const colors = {
    constColorDev: {
      color: "hsla(34, 97%, 58%, 1)",
      BackgroundColor: "rgba(255, 165, 0, 0.1)",
    },
    constColorDefault: {
      color: "rgb(94 234 212)",
      BackgroundColor: "rgba(45, 212, 191, 0.1)",
    },
  };

  return (
    <div className="container">
      <div className="project-item-container">
        <h1>François Dion</h1>
        <h2 className="project-all-project">{t("Projects")}</h2>
        <div className="project-item">
          <div className="skill-categories">
          <Skill
            name={t("Skill-default-text")}
            constColor={colors.constColorDefault}
          />
          <Skill
            name={t("Skill-futur-addition")}
            constColor={colors.constColorDev}
          />
          </div>
          <div className="project-notice">
            <strong>{(t("Note") + ": ")}</strong>{t("Projects-description-notice") + " "}
            <Link className="contact-projects" to="/contact">&#x1F4E7;{t("Contact-me")}&#x1F4E7;</Link>
          </div>
          <div className="project-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white", paddingRight: "25px" }}>
                    {t("Year")}
                  </th>
                  <th style={{ color: "white" }}>{t("Project")}</th>
                  <th style={{ color: "white" }}>{t("Made-at")}</th>
                  <th className="built-with-header">{t("Built-with")}</th>
                  <th style={{ color: "white" }}>{t("Link")}</th>
                </tr>
              </thead>
              <ProjectComponent
                year="2023"
                project={t("DFHousing") + " (" + t("In-development") + ")"}
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="Golang"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="Gin"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="React"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="4"
                    name="JavaScript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="5"
                    name="Bootstrap"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="6"
                    name="CSS"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="MongoDB Atlas"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="8"
                    name="Github"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="9"
                    name="OpenCV"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="10"
                    name="Docker"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="11"
                    name="NGINX"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="12"
                    name="AWS EC2"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="13"
                    name="GitHub Actions"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="14"
                    name="Stripe"
                    constColor={colors.constColorDev}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2023"
                project={t("Portfolio")}
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="React"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="Bootstrap"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="CSS"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="5"
                    name="JavaScript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="6"
                    name="BrowserStack"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="Python"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="Flask"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="8"
                    name="Github"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="9"
                    name="AWS EC2"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="10"
                    name="Docker"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="11"
                    name="NGINX"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link="https://github.com/francois-71/portfolio"
                show_link="github.com/francois-71/portfolio"
              />
              <ProjectComponent
                year="2023"
                project={t("Api-development-monitoring-interface")}
                made_at="Devoteam Innovative Tech (Paris, France)"
                built_with={[
                  <Skill
                    key="1"
                    name="Python"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="Django"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="Django HTML"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="4"
                    name="CSS"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="5"
                    name="PostgreSQL"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="6"
                    name="Docker"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="GitLab CI/CD"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="8"
                    name="Linux"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="9"
                    name="NGINX"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="10"
                    name="Rancher"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2023"
                project={t("Bouncing-ball-game")}
                made_at="Griffith University (Brisbane, Australia)"
                built_with={[
                  <Skill
                    key="1"
                    name="Javascript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="p5.js"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2022"
                project={t("Front-end-development-of-a-web-application")}
                made_at="Stations-e (Paris, France)"
                built_with={[
                  <Skill
                    key="1"
                    name="HTML"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="CSS"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="Javascript"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link="https://stations-e.shop"
                show_link="stations-e.shop"
              />
              <ProjectComponent
                year="2022"
                project={t("GIMP-like-image-editor")}
                made_at="ISEP (Paris, France)"
                built_with={[
                  <Skill
                    key="1"
                    name="C++"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="OpenCV"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link="https://github.com/francois-71/gimpsep-opencv_caf/"
                show_link="github.com/francois-71/gimpsep-opencv_caf/"
              />
              <ProjectComponent
                year="2021"
                project={t(
                  "Tinder-Autoclicker-With-Facial-Eye-Recognition-And-Pixel-Analysis"
                )}
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="Java"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="OpenCV"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2021"
                project={t("Mr-Jack-Pocket-Game-Development")}
                made_at="ISEP (Paris, France)"
                built_with={[
                  <Skill
                    key="1"
                    name="Java"
                    constColor={colors.constColorDefault}
                  />,
                ]}
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
