import React from "react";
import "./resume.css";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const pdfPath = t("resume-to-download");
  const imageSrc = t("path-to-resume");
  return (
    <div className="resume-container">
      <a href={pdfPath} download="François_Dion_Resume.pdf">
        <p>&#x1F4E5; {t("download-my-resume")}</p>
      </a>
      <div className="resume-image">
        <img src={imageSrc} alt="François Dion's Resume" className="resume-image" />
      </div>
    </div>
  );
};

export default Resume;
