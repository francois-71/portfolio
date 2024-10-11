import React from "react";
import "./project-status.css";

const ProjectStatus = ({ name, constColor={} }) => {
  return (
    <div className="projectStatus" style={{ backgroundColor: constColor["backgroundColor"] }}>
      <p style={{ color: constColor["color"] }}>{name}</p>
    </div>
  );
};
export default ProjectStatus;
