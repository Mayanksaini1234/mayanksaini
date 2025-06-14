import SkillsColumn from "./SkillsColumn";
import { frontendSkills, backendSkills, databaseSkills, devOpsSkills } from "../data/skills";
import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-section">
        <SkillsColumn
          colicon="fa-solid fa-code"
          colname="Frontend Development"
          listSkills={frontendSkills}
        />
        <SkillsColumn
          colicon="fa-solid fa-server"
          colname="Backend Development"
          listSkills={backendSkills}
        />
        <SkillsColumn
          colicon="fa-solid fa-database"
          colname="Database"
          listSkills={databaseSkills}
        />
        <SkillsColumn
          colicon="fa-solid fa-gear"
          colname="DevOps & Tools"
          listSkills={devOpsSkills}
        />
      </div>
    </section>
  );
}

export default Skills;
