import React from "react";
import "./resume.css"; // You can create a CSS file for styling

const Resume = () => {
  const pdfPath = "assets/media/cv_en_francois_dion_portfolio.pdf"; // Replace with your PDF path
  const imageSrc = "assets/media/images/cv_en_francois_dion_portfolio.png"; // Replace with your image path

  return (
    <div className="resume-container">
      <a href={pdfPath} download="François_Dion_Resume.pdf">
        <p>Download my resume</p>
      </a>
      <div className="resume-image">
        <img src={imageSrc} alt="François Dion's Resume" className="resume-image" />
      </div>
    </div>
  );

  
};

export default Resume;
