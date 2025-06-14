import Image from "next/image";
import React from "react";

function ProjectCard(props) {
  return (
    <div className="projects-card" data-aos="zoom-in" title={props.name}>
      <div className="project-img">
        <a href={props.link} target="_blank" rel="noreferrer">
          <Image
            src={props.imgsrc}
            alt={`${props.name} Preview`}
            width={400}
            height={240}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            priority
          />
        </a>
      </div>

      <div className="project-info">
        <p className="project-title">{props.name}</p>
        <p className="project-desc">{props.desc}</p>

        <p className="project-subtitle">
          <span>Features</span>
        </p>

        <div className="project-features">
          <ul>
            {props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="project-subtitle">
          <span>Stack</span>
        </p>

        <div className="project-stack">
          {props.stacks.map((stack, index) => (
            <span key={index}>{stack}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={props.link} target="_blank" rel="noreferrer">
            <button type="button">
              Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </a>

          <a href={props.github} target="_blank" rel="noreferrer">
            <button type="button">
              GitHub <i className="fa-brands fa-github"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
