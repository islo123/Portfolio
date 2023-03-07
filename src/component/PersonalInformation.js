import React from 'react'
import finFlag from '../kuvat/Fin-flag.png'
import GBFlag from '../kuvat/GB-flag.png'
import KSFlag from '../kuvat/KS-flag.png'
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GrContact } from "react-icons/gr";

export default function PersonalInformation() {
  return (
    <footer className='footer'>
        <div>
            <h4>Kielet</h4>
            <p className='flag-name'><img className='language-flag' alt='Suomen lippu' src={finFlag}/> Suomi --- erinomainen</p>
            <p className='flag-name'><img className='language-flag' alt='Iso Britannia lippu' src={GBFlag}/> Englanti --- hyvä</p>
            <p className='flag-name'><img className='language-flag' alt='Kosovon lippu' src={KSFlag}/> Albania --- äidinkieli</p>            
        </div>

        <a target="_blank" className='footer-link' rel="noreferrer" href='https://github.com/islo123?tab=repositories'><AiOutlineGithub/> Harrastus projektit GitHub: issa</a>
        <br/>
        <a target="_blank" className='footer-link' rel="noreferrer" href='https://www.linkedin.com/in/anton-berisha-a49a83215/'><AiFillLinkedin/> Minun LinkedIn profiili</a>
        
        <div style={{display: 'flex'}}>
            <p style={{marginRight: '10px', alignSelf: 'center'}}><GrContact /></p>
            <p> Otta yhteyttä <br/> iberisha94@hotmail.com</p>
        </div>
    </footer>
  )
}
