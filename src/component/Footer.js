import React from 'react'

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GrContact } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <a target="_blank" className='footer-link' rel="noreferrer" href='https://github.com/islo123?tab=repositories'><AiOutlineGithub/> Harrastus projektit GitHub: issa</a>
      </div>

      <div>
        <a target="_blank" className='footer-link' rel="noreferrer" href='https://www.linkedin.com/in/anton-berisha-a49a83215/'><AiFillLinkedin/> Minun LinkedIn profiili</a>
      </div>
        
      <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '10px', alignSelf: 'center' }}><GrContact/></p>
          <p> Otta yhteyttä <br/> iberisha94@hotmail.com </p>
      </div>
    </footer>
  )
}
