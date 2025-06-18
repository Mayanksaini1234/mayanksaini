import React from "react";
import SkillsIcon from "./SkillsIcon";

function SkillsColumn({ colicon, colname, listSkills }) {
  const skillKeys = Object.keys(listSkills);
  return (
    <div className="skills-column" data-aos="zoom-in">
      <div className="skills-column-header">
        <div className="skills-column-icon">
          <i className={colicon}></i>
        </div>
        <h3 className="skills-column-name">{colname}</h3>
      </div>
      <div className="skills-list">
        {skillKeys.map((key, index) => (
          <SkillsIcon key={index} iconname={listSkills[key]} skillname={key} />
        ))}
      </div>
    </div>
  );
}

export default SkillsColumn;
