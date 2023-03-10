import React from 'react'

export default function ProjectsCategory({ filterBtn, allProjects, active }) {
  return (
    <div style={{ textAlign: 'center' }}>
        { 
          allProjects.map((category, index) => {
            return <button className={category === active ? 'project-btn category-btn' : 'project-active-btn category-btn'} key={index} onClick={() => filterBtn(category)}>{category}</button>
            })
        }
    </div>
  )
}
