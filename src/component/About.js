import React from 'react'
import Profile from './Profile'
import Projects from './projects/Projects';
import finFlag from '../kuvat/Fin-flag.png'
import GBFlag from '../kuvat/GB-flag.png'
import KSFlag from '../kuvat/KS-flag.png'

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className='about'>
        <div className='about-section'>
            <Profile/>
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}>
              <div className='about-language'>
                  <h4 style={{marginTop: '16px'}}>Kielet</h4>
                  <p className='flag-name'><img className='language-flag' alt='Suomen lippu' src={finFlag}/> Suomi --- erinomainen</p>
                  <p className='flag-name'><img className='language-flag' alt='Iso Britannia lippu' src={GBFlag}/> Englanti --- hyvä</p>
                  <p className='flag-name'><img className='language-flag' alt='Kosovon lippu' src={KSFlag}/> Albania --- äidinkieli</p>            
              </div>
            </motion.div>        
        </div>

        <Projects/>
    </div>
  )
}
