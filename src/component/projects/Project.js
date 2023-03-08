import React, { useState } from 'react'
import { motion } from "framer-motion";

export default function Project({ projectsData, active }) {

  return (
    <div>
        {
            active !== "" &&   projectsData.map(({name, id, date, description, link, sitePic }) => {
                return (
                    <motion.div 
                        style={{ overflow: "hidden" }}
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        exit={{ transform: "scale(0)" }}
                        className='project-item' 
                        key={id}
                    >
                        <p>{name}</p>
                        <p>{date}</p>
                        <p>{description}</p>
                        {
                            sitePic && <div><img className='site-img' alt={name} src={sitePic}/></div>
                        }
                        
                        { link && <a className='project-link' href={link} rel="noreferrer" alt="hr-työkalu" target="_blank">Avaa sivu</a>}
                    </motion.div>
                )
            })
        }
    </div>
  )
}
