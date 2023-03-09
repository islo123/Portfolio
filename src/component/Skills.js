import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";

const star = (coloredStar) => {
    return [...Array(5)].map((star, index) => {
        return <AiTwotoneStar key={index} size="30" color={index >= coloredStar ? "" : "#F8E9A1"} />
    })
}

export default function Skills() {
  return (
    <div style={{backgroundColor: '#24305E', paddingLeft: '1rem'}}>
        <div className='skills-stars'>
            <h3>HTML </h3><h3>{star(5)}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>CSS </h3><h3>{star(5)}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>React </h3><h3>{star(5)}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>JavaScript </h3><h3>{star(5)}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>Node.js </h3><h3>{star(3)}</h3>    
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>Angular </h3><h3>{star(3)}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>MongoDB </h3><h3>{star(3)}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>SQL </h3><h3>{star(3)}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>C# </h3><h3>{star(2)}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>jQuery </h3><h3>{star(1)}</h3>  
        </div>
        <hr/>
    </div>
  )
}
