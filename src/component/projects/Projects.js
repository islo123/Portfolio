import React, { useState } from 'react'
import { projects } from '../../data'
import Project from './Project';
import ProjectsCategory from './ProjectsCategory';

const allProjects = ['Kaikki', ...new Set(projects.map((item) => item.category))];

export default function Projects () {

    const [ projectsData, setProjectsData] = useState(projects)

    const filterBtn = (category) => {
        if( category === "Kaikki" ) {
          setProjectsData(projects)
          return
        }
        const filter = projects.filter((item) => item.category === category);
        setProjectsData(filter);
    }

  return (
    <div className='projects-section'>
        <ProjectsCategory allProjects={allProjects} filterBtn={filterBtn}/>
        <Project projectsData={projectsData} />
    </div>
  )
}
