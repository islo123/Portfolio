import React, { useState } from 'react'
import {
    Routes,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import Education from './Education';
import Home from './Home'
import Skills from './Skills';
import WorkExperience from './work/WorkExperience';
import { MdCastForEducation } from "react-icons/md";
import { AiTwotoneHome, AiFillStar, AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { RiPagesLine } from "react-icons/ri";
import About from './About';


export default function Navbar() {

    const [ showNavbarLinks, setShowNavbarLinks ] = useState(false)

    let location = useLocation();

  return (
    <div>
          <div className='navbar-menu' onClick={() => setShowNavbarLinks(!showNavbarLinks)}>{showNavbarLinks? <AiFillCloseSquare/> : <AiOutlineMenu/>}</div>

          <div className={showNavbarLinks? 'navbar-is-open navbar-modal' : 'navbar-is-close navbar-modal'}>
              <h3 onClick={() => setShowNavbarLinks(!showNavbarLinks)}><Link className="navbar-link" to="/"><AiTwotoneHome/> Etusivu</Link></h3>
              <h3 onClick={() => setShowNavbarLinks(!showNavbarLinks)}><Link className="navbar-link" to="/minusta"><AiTwotoneHome/> Minusta</Link></h3>
              <h3 onClick={() => setShowNavbarLinks(!showNavbarLinks)}><Link className="navbar-link" to="/työkokemus"><RiPagesLine/> Työkokemus</Link></h3>
              <h3 onClick={() => setShowNavbarLinks(!showNavbarLinks)}><Link className="navbar-link" to="/koulutus"><MdCastForEducation/> Koulutus</Link></h3>
              <h3 onClick={() => setShowNavbarLinks(!showNavbarLinks)}><Link className="navbar-link" to="/taidot"><AiFillStar/> Taidot</Link></h3>                         
          </div>
          
          <div className='navbar-links'>
              <h1 className='navbar-anton'>Anton <span className='dot'>.</span></h1>
              <h3><Link className="navbar-link" to="/"><AiTwotoneHome/> Etusivu</Link></h3>
              <h3><Link className="navbar-link" to="/minusta"><FcAbout/> Minusta</Link></h3>
              <h3><Link className="navbar-link" to="/työkokemus"><RiPagesLine/> Työkokemus</Link></h3>
              <h3><Link className="navbar-link" to="/koulutus"><MdCastForEducation/> Koulutus</Link></h3>
              <h3><Link className="navbar-link" to="/taidot"><AiFillStar/> Taidot</Link></h3>                        
          </div>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="slide"
              timeout={2000}
            >
            <Routes location={location}>
              <Route exact path="/" element={ <Home showNavbarLinks={ showNavbarLinks }/> }/>
              <Route path="/minusta" element={ <About/> }/>
              <Route path="/työkokemus" element={ <WorkExperience/> }/>
              <Route path="/koulutus" element={ <Education/> }/>
              <Route path="/taidot" element={ <Skills/> }/>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
    </div>
  )
}
