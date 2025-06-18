import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "@/data/projectsList";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-header" data-aos="fade-up">
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-section">
        {projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            desc={project.desc}
            imgsrc={project.imgsrc}
            features={project.features}
            stacks={project.stacks}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
