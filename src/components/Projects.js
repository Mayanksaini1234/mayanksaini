import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "@/data/projectsList";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div data-aos="fade-up">
        <p className="contact-title1">Projects</p>
        <p className="contact-title2">Turning Vision into Reality! 🎖️</p>
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
