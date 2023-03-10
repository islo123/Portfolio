import React, { useState } from 'react'

import { projects } from '../../data'
import Project from './Project';
import ProjectsCategory from './ProjectsCategory';

const allProjects = ['Kaikki projektit', ...new Set(projects.map((item) => item.category))];

export default function Projects () {

    const [ projectsData, setProjectsData ] = useState(projects)
    const [ active, setActive ] = useState("");

    const filterBtn = (category) => {
        setActive(category)

        if ( category === "Kaikki projektit" ) {
            setProjectsData(projects)
          return
        }

        const filter = projects.filter((item) => item.category === category);
        setProjectsData(filter);
    }

  return (
    <div className='projects-section'>
        <ProjectsCategory allProjects={allProjects} active={active} filterBtn={filterBtn} />
        <Project projectsData={projectsData} active={active} />
    </div>
  )
}
