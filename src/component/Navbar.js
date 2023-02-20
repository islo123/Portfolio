import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Education from './Education';
import Home from './Home';
import Projects from './projects/Projects';
import Skills from './Skills';
import WorkExperience from './work/WorkExperience';
import { MdCastForEducation } from "react-icons/md";
import { AiFillProject, AiTwotoneHome, AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";


export default function Navbar() {

    const [ showNavbarLinks, setShowNavbarLinks ] = useState(false)

  return (
    <div>

        <Router>
            
            <div className='navbar-menu' onClick={() => setShowNavbarLinks(!showNavbarLinks)}><AiOutlineMenu/></div>

            <div className='navbar-is-open'>
                {   
                    showNavbarLinks &&
                        <div>
                            <h3><Link className="navbar-link" to="/"><AiTwotoneHome/> Etusivu</Link></h3>
                            <h3><Link className="navbar-link" to="/työkokemus"><RiPagesLine/> Työkokemus</Link></h3>
                            <h3><Link className="navbar-link" to="/projektit"><AiFillProject/> Projektit</Link></h3>
                            <h3><Link className="navbar-link" to="/koulutus"><MdCastForEducation/> Koulutus</Link></h3>
                            <h3><Link className="navbar-link" to="/taidot"><AiFillStar/> Taidot</Link></h3>                         
                        </div>
                }

            </div>
            
            <div className='navbar-links'>
                <h1 className='navbar-anton'>Anton <span className='dot'>.</span></h1>
                <h3><Link className="navbar-link" to="/"><AiTwotoneHome/> Etusivu</Link></h3>
                <h3><Link className="navbar-link" to="/työkokemus"><RiPagesLine/> Työkokemus</Link></h3>
                <h3><Link className="navbar-link" to="/projektit"><AiFillProject/> Projektit</Link></h3>
                <h3><Link className="navbar-link" to="/koulutus"><MdCastForEducation/> Koulutus</Link></h3>
                <h3><Link className="navbar-link" to="/taidot"><AiFillStar/> Taidot</Link></h3>                        
             </div>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/työkokemus" element={<WorkExperience/>}/>
            <Route path="/projektit" element={<Projects/>}/>
            <Route path="/koulutus" element={<Education/>}/>
            <Route path="/taidot" element={<Skills/>}/>
          </Routes>
      </Router>
    </div>
  )
}