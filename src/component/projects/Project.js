import React from 'react'

export default function Project({projectsData}) {
  return (
    <div>
        {
            projectsData.map(({name, id, date, description, link }) => {
                return (
                    <div className='project-item' key={id}>
                        <p>{name}</p>
                        <p>{date}</p>
                        <p>{description}</p>
                        { link && <a className='project-link' href={link} rel="noreferrer" alt="hr-työkalu" target="_blank">Avaa sivu</a>}
                    </div>
                )
            })
        }
    </div>
  )
}
