import React from "react";

function SkillsIcon({ iconname, skillname }) {
  return (
    <div className="skill-item" data-aos="flip-left" title={skillname}>
      <div className="skill-icon">
        <i className={iconname}></i>
      </div>
      <p className="skill-name">{skillname}</p>
      <div className="skill-level-indicator">
        <div className="skill-level-dot active"></div>
        <div className="skill-level-dot active"></div>
        <div className="skill-level-dot active"></div>
        <div className="skill-level-dot active"></div>
        <div className="skill-level-dot"></div>
      </div>
    </div>
  );
}

export default SkillsIcon;
