import { allSkills } from "../data/skills";
import "../styles/Skills.css";

// Helper: group skills into alternating rows of 5, 3, 5, 3, ...
function groupIntoAlternatingRows(arr) {
  const rows = [];
  let i = 0;
  let toggle = true;
  while (i < arr.length) {
    const rowSize = toggle ? 5 : 3;
    rows.push(arr.slice(i, i + rowSize));
    i += rowSize;
    toggle = !toggle;
  }
  return rows;
}

function Skills() {
  const skillRows = groupIntoAlternatingRows(allSkills);
  return (
    <section id="skills">
      <div className="skills-header" data-aos="fade-up">
        <h2>Skills & Technologies</h2>
      </div>
      <div className="skills-badges-wrapper">
        {skillRows.map((row, rowIdx) => (
          <div
            className="skills-badge-row"
            key={rowIdx}
            data-aos="zoom-in"
            data-aos-delay={rowIdx * 200}
          >
            {row.map((skill, idx) => (
              <span
                key={skill.name + idx}
                className={`skill-badge${skill.filled ? " filled" : " outlined"}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
