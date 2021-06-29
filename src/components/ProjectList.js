import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) { 
  const eachProject = projects.map((project) => { return (
    <ProjectItem
      key={project.id}
      name={project.name} 
      about={project.about} 
      technologies={project.technologies}
    />
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {eachProject}
      </div>
    </div>
  );
}

export default ProjectList;

// {return <div key={project.id}>{ProjectItem(project.name, project.about, project.technologies)}</div>}
// let technologies = projects.map(project => {return project.technologies});
  // let names = projects.map(project => {return project.name})
  // let ids = projects.map(project => {return project.id})
  // let abouts = projects.map(project => {return project.about})