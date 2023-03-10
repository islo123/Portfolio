import React from 'react'

import { workExperience } from '../../data'
import Work from './Work'

export default function WorkExperience() {
  return (
    <div className='work-experience-section'>
      {
        workExperience.map((jobs) => {
          return <Work key={jobs.id} {...jobs} />
        })
      }
    </div>
  )
}
