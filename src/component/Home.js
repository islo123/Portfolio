import React from 'react'
import antonPic from "../kuvat/AntonBerisha.jpg"
import Profile from './Profile'

export default function Home() {
  return (
    <div className='home'>
        <div>
            <h1>Hei! Olen <br/> Anton Berisha</h1>
            <p>Web kehittäjän tausta 2018 lähtien</p>
            <Profile/>
        </div>
        <div>
            <img className='anton-img' src={antonPic} alt="Anton Berisha"/>
        </div>
    </div>
  )
}
