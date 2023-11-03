import React from "react";
import "./skill.css";

const Skill = ({ name }) => {
  return (
    <div className="skill">
      <p>{name}</p>
    </div>
  );
};

export default Skill;
