import React from "react";
import "./newexperiencecomponent.css";

const NewExperienceComponent = ({
  period,
  company,
  company_url,
  job_title,
  company_logo,
}) => {
  return (
    <>
      <div className="unique-experience-wrapper">
        <a className="unique-experience-wrapper-a" href={company_url}>
          <div className="unique-experience-logo">
            <img src={company_logo} alt={company} />
          </div>
          <div className="unique-experience-text">
            <h6>{job_title}</h6>
            <p>{company}</p>
            <p>{period}</p>
          </div>
        </a>
      </div>
      <div className="experience-mobile-arrow">&#8593;</div>
    </>
  );
};

export default NewExperienceComponent;
