import React from 'react'
import { motion } from "framer-motion";


export default function Profile() {
  return (
    <div className='profile'>
      <motion.div 
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ delay: 0.5 }}>

          Olen pätevä Full Stack -kehittäjä.
          Minulla on datanomin tutkinto
          painotuksella frontend-kehittäjä
          Taitotalo ammattikoulusta.
        </motion.div>
        <br/>
        <br/>
        <motion.div 
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ delay: 1 }}>

          Itseohjautuva työskentely on
          minulle luontaista. Kiinnostukseni
          ohjelmoinnin ymmärtämiseen ja
          taittamiseen kokonaisvaltaisesti on
          motivoinut minua kehittämään
          taitojani myös backend puolella.
        </motion.div>
        <br/>
        <br/>
        <motion.div 
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ delay: 1.5 }}>
          Olen päättänyt opintoni Opiframella
          Full Stack -kehittäjäksi, opintoni
          sisälsivät työharjoittelun, jota
          suoritin PHZ FullStack Oy:llä.
        </motion.div>
        <br/>
        <br/>
        <motion.div 
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ delay: 2 }}>
          PHZ:all olen ollut mukana monessa
          eri projektissa, joiden myötä
          kokemusta on karttunut erilaisista
          tehtävistä, rooleista ja työtavoista.
        </motion.div>
        <br/>
        <br/>
        <motion.div 
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ delay: 2.5 }}>
          Vapaa-ajallani viihdyn liikunnan, musiikin ja teknologian parissa.
        </motion.div>
        <br/>
        <br/>
    </div>
  )
}
