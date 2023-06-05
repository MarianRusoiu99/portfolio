import React from 'react'

import {motion , useAnimation, AnimatePresence} from 'framer-motion'
 import {animations} from "./json/animations.js"
import { nanoid } from 'nanoid';
function Element(props) {
  const [isShown, setIsShown] = React.useState(false);




  return (
    <div>
      
      <motion.div 
     variants={animations.containerVariants}
     initial="hidden"
     animate="visible"
     exit="exit"
      onTap={() => {setIsShown((prev)=>!prev)}} 
      className='worksElement' key={props.key} >
        
        <div className="row1">
          <h3 className="title">{props.title}</h3>
          <div className='links'> <a href={props.demo}>DEMO</a><a href={props.github}>GITHUB</a></div>
        </div>
        <AnimatePresence>
        {isShown &&
          (<motion.div 
            key={nanoid()}
            variants={animations.elementVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          className="row2">
            <div className='descriere'>{props.descriere}</div>
            <img className="image" src={props.image} alt={props.alt} />
          </motion.div>
          )}
        </AnimatePresence>
      </motion.div></div>
  )
}

export default Element