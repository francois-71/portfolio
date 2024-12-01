import React from "react";
import "./newexperience.css";
import { useTranslation } from "react-i18next";
import NewExperienceComponent from "../../components/Experience/NewExperienceComponent";

const NewExperience = () => {
  const { t } = useTranslation();
  return (
    <div className="experience-container">
      <div className="experience-item-container">
        <h1 className="experience-full-name">François Dion</h1>
        <h2 className="experience-all-project">{t("Experience")}</h2>
        <div className="experience-wrapper">
          <div className="experience-components-left">
            <div className="experience-disk"></div>
            <div className="experience-line-first"></div>
            <div className="experience-horizontal-inter-line"></div>
            <div className="experience-line"></div>
            <div className="experience-horizontal-inter-line"></div>
            <div className="experience-line"></div>
            <div className="experience-horizontal-start-line"></div>            
            <div className="experience-line"></div>
            <div className="experience-horizontal-start-line"></div>            
          </div>
          <div className="experience-components-right">
          <NewExperienceComponent
              period={t("Month-full.December") + " 2024 - " + t("Present")}
              company="Orchestrade (Paris, France)"
              company_url="https://orchestrade.com"
              company_logo="/assets/media/images/orchestrade.png"
              job_title={t("Job-Description.Junior-Software-Developer")}
            />
            <NewExperienceComponent
              period={t("Month-full.February") + " 2024 - " + t("Month-full.May") + " 2024"}
              company="Moment (Paris, France)"
              company_url="https://www.moment.tech/"
              company_logo="/assets/media/images/moment_solutions_logo.svg"
              job_title={t("Job-Description.Full-Stack-Engineer-Developer")}
            />
            <NewExperienceComponent
              period={
                t("Month-full.March") +
                " 2023 - " +
                t("Month-full.January") +
                " 2024"
              }
              company="Devoteam Innovative Tech (Paris, France)"
              company_url="https://france.devoteam.com/expertises/innovative-tech/"
              company_logo="/assets/media/images/devoteam-logo.png"
              job_title={t("Job-Description.Python-DevOps-Developer")}
            />
            <NewExperienceComponent
              period={
                t("Month-full.September") +
                " 2021 - " +
                t("Month-full.May") +
                " 2022 "
              }
              company="Stations-e (Paris, France)"
              company_url="https://stations-e.com/"
              company_logo="/assets/media/images/stationselogo.png"
              job_title={t("Job-Description.Front-end-Developer")}
            />
            <NewExperienceComponent
              period={t("Summer") + " 2019 & 2022"}
              company="Air France (Paris, France)"
              company_url="https://www.airfrance.fr/"
              company_logo="/assets/media/images/airfrance-logo.png"
              job_title={t("Job-Description.Customer-Service-Agent")}
            />
            {/*
            <NewExperienceComponent
              period={
                t("Month-full.January") +
                " 2020 - " +
                t("Month-full.February") +
                " 2020"
              }
              company={t("salvation-army") + " (Paris, France)"}
              company_url="https://www.salvationarmy.org/"
              company_logo="/assets/media/images/salvation-army-logo.png"
              job_title={t("volunteer")}
            />
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewExperience;
