import React from 'react'

export default function ProjectsCategory({ filterBtn, allProjects, active }) {
  return (
    <div style={{textAlign: 'center'}}>
        {allProjects.map((category, index) => {
            return <button className={category === active ? 'project-btn btn' : 'project-active-btn btn'} key={index} onClick={() => filterBtn(category)}>{category}</button>
        })}
    </div>
  )
}
