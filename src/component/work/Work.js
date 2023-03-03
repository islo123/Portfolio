import React, { useState } from 'react'
import { AiFillCloseSquare } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";

export default function Work({name, company, date, duration, description}) {
    const [ showDetail, setShowDetail ] = useState(false)

  return (
    <div className='work-section'>
      <div className='work-name'>
        <h3>{name}</h3><h3 className='open-work-detail' onClick={() => setShowDetail(!showDetail)}>{showDetail? <AiFillCloseSquare/> : <MdOpenInBrowser/>}</h3>
      </div>
      <div>
        { showDetail && 
          <div>
            <p>{company}</p>
            <p>{date} ({duration})</p>
            <p>{description}</p>
          </div>
        }        
      </div>
    </div>
  )
}
