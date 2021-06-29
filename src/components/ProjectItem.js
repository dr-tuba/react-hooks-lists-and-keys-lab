import React from "react";

function ProjectItem({ name, about, technologies }) {
  let i = 1
  const eachTechnology = technologies.map((tech) => {
    return (
      <span key={tech + i}>{tech}</span>
    )}
  )
  i++
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {eachTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
