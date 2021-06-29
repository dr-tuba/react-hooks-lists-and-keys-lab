import React from "react";
import { nanoid } from 'nanoid';

function ProjectItem({ name, about, technologies}) {
  console.log(technologies)
  
  const eachTechnology = technologies.map((tech) => {
    console.log(tech)
    return (
      <span key={nanoid()}>{tech}</span>
    )}
  )
  
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
