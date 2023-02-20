import React from 'react'

export default function ProjectsCategory({ filterBtn, allProjects }) {
  return (
    <div style={{textAlign: 'center'}}>
        {allProjects.map((category, index) => {
            return <button className='project-btn' key={index} onClick={() => filterBtn(category)}>{category}</button>
        })}
    </div>
  )
}
