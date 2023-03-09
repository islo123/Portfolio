import React from 'react'
import antonPic from "../kuvat/AntonBerisha.jpg"

export default function Home({ showNavbarLinks }) {
  return (
    <div className='home'>
        <div>
            <h1>Hei! Olen <br/> Anton Berisha</h1>
            <p>Web kehittäjän tausta 2018 lähtien</p>
        </div>
        {
          !showNavbarLinks &&
            <div>
              <img className='anton-img' src={antonPic} alt="Anton Berisha"/>
            </div>
        }

    </div>
  )
}
