import React from "react";
import "./skill.css";

const Skill = ({ name, constColor={} }) => {
  return (
    <div className="skill" style={{ backgroundColor: constColor["backgroundColor"] }}>
      <p style={{ color: constColor["color"] }}>{name}</p>
    </div>
  );
};
export default Skill;
