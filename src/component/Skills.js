import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";

const fiveStar = [...Array(5)].map((star, index) => {
    return <AiTwotoneStar key={index} size="30" style={{color: '#A8D0E6',}}/>
})

const threeStar = [...Array(5)].map((star, index) => {
    return <AiTwotoneStar key={index} size="30" color={index > 2? "" : "#A8D0E6"} />
})

const twoStar = [...Array(5)].map((star, index) => {
    return <AiTwotoneStar key={index} size="30" color={index > 1? "" : "#A8D0E6"} />
})

const oneStar = [...Array(5)].map((star, index) => {
    return <AiTwotoneStar key={index} size="30" color={index > 0? "" : "#A8D0E6"} />
})


export default function Skills() {
  return (
    <div style={{backgroundColor: '#24305E'}}>
        <div className='skills-stars'>
            <h3>HTML </h3><h3>{fiveStar}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>CSS </h3><h3>{fiveStar}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>React </h3><h3>{fiveStar}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>JavaScript </h3><h3>{fiveStar}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>Node.js </h3><h3>{threeStar}</h3>    
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>Angular </h3><h3>{threeStar}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>MongoDB </h3><h3>{threeStar}</h3>            
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>SQL </h3><h3>{threeStar}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>C# </h3><h3>{twoStar}</h3>
        </div>
        <hr/>
        <div className='skills-stars'>
            <h3>jQuery </h3><h3>{oneStar}</h3>  
        </div>
        <hr/>
    </div>
  )
}
