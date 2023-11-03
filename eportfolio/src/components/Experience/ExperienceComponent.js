import React from "react";
import "./experienceComponent.css";

const ExperienceComponent = ({
  period,
  company,
  company_url,
  job_title,
  company_logo,
}) => {
  return (
    <tbody className="experience-component-text">
      <tr>
        <td>{period}</td>
        <td>
          <img className="company-logo" src={company_logo} alt={company} />
        </td>

        <td>
          <a className="company-name" href={company_url}>
            {company}
          </a>
        </td>
        <td>{job_title}</td>
      </tr>
    </tbody>
  );
};

export default ExperienceComponent;
