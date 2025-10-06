import React from "react";
import ProjectComponent from "../../components/Project/ProjectComponent";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";
import "./project.css";
import ProjectStatus from "../../components/ProjectStatus/ProjectStatus";

const Project = () => {
  const { t } = useTranslation();

  const colors = {
    constColorDev: {
      color: "hsla(34, 97%, 58%, 1)",
      backgroundColor: "rgba(255, 165, 0, 0.1)",
    },
    constColorDefault: {
      color: "rgb(94 234 212)",
      backgroundColor: "rgba(45, 212, 191, 0.1)",
    },
    constColorCanceled: {
      color: "rgba(255,0,0, 1)",
      backgroundColor: "rgba(255,0,0, 0.1)",
    },
    constColorInProgress: {
      color: "hsla(200, 100%, 100%, 1)",
      backgroundColor: "rgba(0, 123, 255, 0.1)",
    },
    constColorFinished: {
      color: "hsla(0, 0%, 100%, 1)",
      backgroundColor: "rgba(40, 255, 10, 0.1)",
    },
  };

  return (
    <div className="container">
      <div className="project-item-container">
        <h1>François Dion</h1>
        <h2 className="project-all-project">{t("Projects")}</h2>
        <div className="project-item">
          <div className="skill-categories">
            <div className="developed-with">
              <Skill
                name={t("Skill-default-text")}
                constColor={colors.constColorDefault}
              />
              <Skill
                name={t("Skill-futur-addition")}
                constColor={colors.constColorDev}
              />
            </div>
          </div>
          <div className="project-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white", paddingRight: "25px" }}>
                    {t("Year")}
                  </th>
                  <th style={{ color: "white" }}>{t("Project-status")}</th>
                  <th style={{ color: "white" }}>{t("Project")}</th>
                  <th style={{ color: "white" }}>{t("Made-at")}</th>
                  <th className="built-with-header">{t("Built-with")}</th>
                  <th style={{ color: "white" }}>{t("Link")}</th>
                </tr>
              </thead>
              <ProjectComponent
                year="2025"
                project={t("GalaxyHopper")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("In-Progress")}
                    constColor={colors.constColorInProgress}
                  />
                }
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="TypeScript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="Next.js"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="NestJS"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="4"
                    name="PostgreSQL"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="5"
                    name="Three.js"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="6"
                    name="Docker"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2024"
                project={t("FastHousing")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Canceled")}
                    constColor={colors.constColorCanceled}
                  />
                }
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="TypeScript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="Next.js"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="PostgreSQL"
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
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="11"
                    name="AWS S3"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="12"
                    name="NGINX"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="13"
                    name="AWS EC2"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="14"
                    name="GitHub Actions"
                    constColor={colors.constColorDev}
                  />,
                  <Skill
                    key="15"
                    name="Stripe"
                    constColor={colors.constColorDev}
                  />,
                ]}
                link="https://github.com/francois-71/FastHousing"
                show_link="github.com/francois-71/FastHousing"
              />
              <ProjectComponent
                year="2024"
                project={t("NginxLogsAnalyzer")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="Flask"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="React"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link="https://github.com/francois-71/NginxLogAnalyzer"
                show_link="github.com/francois-71/NginxLogAnalyzer"
              />
              <ProjectComponent
                year="2023"
                project={t("Portfolio")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
                made_at="&#x1F3E0;"
                built_with={[
                  <Skill
                    key="1"
                    name="React"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="2"
                    name="JavaScript"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="3"
                    name="Python"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="4"
                    name="Flask"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="5"
                    name="Github"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="6"
                    name="AWS EC2"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="7"
                    name="Docker"
                    constColor={colors.constColorDefault}
                  />,
                  <Skill
                    key="8"
                    name="NGINX"
                    constColor={colors.constColorDefault}
                  />,
                ]}
                link=""
                show_link="&#x1F510;"
              />
              <ProjectComponent
                year="2023"
                project={t("Api-development-monitoring-interface")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
                link="https://github.com/francois-71/bouncing-ball-js"
                show_link="github.com/francois-71/bouncing-ball-js"
              />
              <ProjectComponent
                year="2022"
                project={t("Front-end-development-of-a-web-application")}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
                show_link="github.com/francois-71/gimpsep-opencv_caf"
              />
              <ProjectComponent
                year="2021"
                project={t(
                  "Tinder-Autoclicker-With-Facial-Eye-Recognition-And-Pixel-Analysis"
                )}
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
                project_status={
                  <ProjectStatus
                    key="1"
                    name={t("Finished")}
                    constColor={colors.constColorFinished}
                  />
                }
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
