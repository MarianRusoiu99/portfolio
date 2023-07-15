import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { animations } from "./json/animations.js"
import { nanoid } from 'nanoid';
function Element(props) {
  const [isShown, setIsShown] = React.useState(false);


  React.useEffect(() => {
    document.querySelector(".descriere").textContent.replace(/"([^"]+(?="))"/g, '$1')
  }, [])

  return (
    <motion.div onTap={() => { setIsShown((prev) => !prev) }} >

      <motion.div


        className='worksElement' key={props.key} >

        <div className="row1">
          <h3 className="title">{props.title}</h3>
          <div className='links'> <a href={props.demo} target="_blank" rel="noreferrer" className='linkItem'>DEMO</a><a href={props.github} target="_blank" rel="noreferrer" className='linkItem'>GITHUB</a>  <div className="year">{props.year}</div></div>

        </div>
        <AnimatePresence>

          <motion.div
            key={nanoid()}
            variants={animations.elementVariants}
            initial="hidden"
            animate={isShown ? "visible" : "hidden"}
            exit="exit"
            className="row2">
            <img className="image" src={props.image} alt={props.alt} />
            <div className='descriere'>{props.descriere} </div>
           

          </motion.div>

        </AnimatePresence>
      </motion.div></motion.div>
  )
}

export default Element