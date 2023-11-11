import React from "react";
import ExperienceComponent from "../../components/Experience/ExperienceComponent";
import "./experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="experience-item-container">
        <h1>François Dion</h1>
        <h2 className="experience-all-project">{t("Experience")}</h2>
        <div className="experience-item">
          <div className="experience-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white" }}>{t("Year")}</th>
                  <th> {t("Logo")}</th>
                  <th style={{ color: "white" }}>{t("Company")}</th>
                  <th style={{ color: "white" }}>{t("Job-Title")}</th>
                </tr>
              </thead>
              <ExperienceComponent
                period={t("Month-full.March") + " 2023 - " + t("Present")}
                company="Devoteam Innovative Tech (Paris, France)"
                company_url="https://france.devoteam.com/expertises/innovative-tech/"
                company_logo="/assets/media/images/devoteam-logo.png"
                job_title={t("Job-Description.Python-DevOps-Developer")}
              />
              <ExperienceComponent
                period={t("Month-full.September") + " 2021 - " + t("Month-full.May") + " 2022 " }
                company="Stations-e (Paris, France)"
                company_url="https://stations-e.com/"
                company_logo="/assets/media/images/stations-e-logo.png"
                job_title={t("Job-Description.Front-end-Developer")}
              />
              <ExperienceComponent
                period={t("Summer") + " 2019 & 2022"}
                company="Air France (Paris, France)"
                company_url="https://www.airfrance.fr/"
                company_logo="/assets/media/images/airfrance-logo.png"
                job_title={t("Job-Description.Customer-Service-Agent")}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
