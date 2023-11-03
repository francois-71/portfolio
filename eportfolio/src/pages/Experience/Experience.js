import React from "react";
import ExperienceComponent from "../../components/Experience/ExperienceComponent";
import "./experience.css";

const Experience = () => {
  return (
    <div className="container">
      <div className="experience-item-container">
        <h1>François Dion</h1>
        <h2 className="experience-all-project">Experience</h2>
        <div className="experience-item">
          <div className="experience-table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "white" }}>Year</th>
                  <th> Logo</th>
                  <th style={{ color: "white" }}>Company</th>
                  <th style={{ color: "white" }}>Job title</th>
                </tr>
              </thead>
              <ExperienceComponent
                period="March 2023 - Present"
                company="Devoteam Innovative Tech (Paris, France)"
                company_url="https://france.devoteam.com/expertises/innovative-tech/"
                company_logo="/assets/images/devoteam-logo.png"
                job_title="Python DevOps Developer (Internship then full-time)"
              />
              <ExperienceComponent
                period="September 2021 - May 2022"
                company="Stations-e (Paris, France)"
                company_url="https://stations-e.com/"
                company_logo="/assets/images/stations-e-logo.png"
                job_title="Front-end Developer (Internship then Part-time while concurrently pursuing my studies)"
              />
              <ExperienceComponent
                period="Summer 2019/2022"
                company="Air France (Paris, France)"
                company_url="https://www.airfrance.fr/"
                company_logo="/assets/images/airfrance-logo.png"
                job_title="Customer Service Agent (Seasonal)"
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
