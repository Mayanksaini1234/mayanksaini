import React from "react";

function SkillsIcon({ iconname, skillname }) {
  return (
    <div className="skills-icons" data-aos="flip-left" title={skillname}>
      <i className={iconname}></i>
      <span>{skillname}</span>
    </div>
  );
}

export default SkillsIcon;
