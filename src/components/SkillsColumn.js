import React from "react";
import SkillsIcon from "./SkillsIcon";

function SkillsColumn({ colicon,colname, listSkills }) {
  const skillKeys = Object.keys(listSkills);
  return (
    <div className="skills-column" data-aos="fade-up">
      <p className="skills-col-title"><i className={colicon}></i> {colname}</p>
      <div className="skills-col-content">
        {skillKeys.map((key, index) => (
          <SkillsIcon key={index} iconname={listSkills[key]} skillname={key} />
        ))}
      </div>
    </div>
  );
}

export default SkillsColumn;
